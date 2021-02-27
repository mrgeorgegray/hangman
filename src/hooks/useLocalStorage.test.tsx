import React from "react";
import { render, fireEvent } from "@testing-library/react";

import useLocalStorage from "./useLocalStorage";

type State = Record<string, string>;

describe("useLocalStorage()", () => {
  const key = "storage-key";
  const initialState: State = { a: "thing", b: "other" };
  const newState: State = { a: "other", b: "new" };

  const StorageComponent: React.FC = () => {
    const [state, setState] = useLocalStorage<State>(key, initialState);

    return (
      <div>
        <button onClick={() => setState(newState)}>set state</button>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  };

  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("it reads on render", () => {
    render(<StorageComponent />);
    expect(window.localStorage.getItem).toHaveBeenCalledWith(key);
  });

  it("can set state", () => {
    const { getByText } = render(<StorageComponent />);

    fireEvent.click(getByText("set state"));

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(newState)
    );
  });
});

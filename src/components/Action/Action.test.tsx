import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Action from ".";

describe("<Action />", () => {
  const onClick = jest.fn();
  const text = "Click me";

  it("renders", () => {
    const { container } = render(<Action onClick={onClick} text={text} />);
    expect(container).toMatchSnapshot();
  });

  it("handles clicks", () => {
    const { getByText } = render(<Action onClick={onClick} text={text} />);
    fireEvent.click(getByText(text));
    expect(onClick).toHaveBeenCalled();
  });
});

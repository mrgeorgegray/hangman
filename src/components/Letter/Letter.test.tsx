import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Letter from ".";

describe.only("<Letter />", () => {
  const onClick = jest.fn();

  const defaultProps = {
    onClick,
    letter: "a",
    isDisabled: false,
    isCorrect: false,
    shouldHighlight: false,
  };

  it("renders", () => {
    const { container } = render(<Letter {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it("handles clicks", () => {
    const { getByText } = render(<Letter {...defaultProps} />);
    fireEvent.click(getByText(defaultProps.letter));
    expect(onClick).toHaveBeenCalled();
  });

  it("is disabled", () => {
    const { getByText } = render(
      <Letter {...defaultProps} isDisabled={true} />
    );
    const btn = getByText(defaultProps.letter);
    fireEvent.click(btn);

    expect(onClick).not.toHaveBeenCalled();
    expect(btn).toBeDisabled();
  });

  it("highlights correct", () => {
    const { container } = render(
      <Letter {...defaultProps} shouldHighlight={true} isCorrect={true} />
    );
    expect(container).toMatchSnapshot();
  });

  it("highlights incorrect", () => {
    const { container } = render(
      <Letter {...defaultProps} shouldHighlight={true} />
    );
    expect(container).toMatchSnapshot();
  });
});

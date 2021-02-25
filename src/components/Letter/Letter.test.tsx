import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import Letter from ".";
import { THEMES } from "../../config";

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
    const { container } = render(
      <ThemeProvider theme={THEMES.lightTheme}>
        <Letter {...defaultProps} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("handles clicks", () => {
    const { getByText } = render(
      <ThemeProvider theme={THEMES.lightTheme}>
        <Letter {...defaultProps} />
      </ThemeProvider>
    );
    fireEvent.click(getByText(defaultProps.letter));
    expect(onClick).toHaveBeenCalled();
  });

  it("is disabled", () => {
    const { getByText } = render(
      <ThemeProvider theme={THEMES.lightTheme}>
        <Letter {...defaultProps} isDisabled={true} />
      </ThemeProvider>
    );
    const btn = getByText(defaultProps.letter);
    fireEvent.click(btn);

    expect(onClick).not.toHaveBeenCalled();
    expect(btn).toBeDisabled();
  });

  it("highlights correct", () => {
    const { container } = render(
      <ThemeProvider theme={THEMES.lightTheme}>
        <Letter {...defaultProps} shouldHighlight={true} isCorrect={true} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("highlights incorrect", () => {
    const { container } = render(
      <ThemeProvider theme={THEMES.lightTheme}>
        <Letter {...defaultProps} shouldHighlight={true} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});

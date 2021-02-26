import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import ThemeSwitch, { ThemeSwitchProps } from ".";
import { THEMES } from "../../config";

describe("<ThemeSwitch />", () => {
  const defaultProps: ThemeSwitchProps = {
    currentTheme: "light",
    handleChange: () => {},
  };

  const buildSubject = (props = defaultProps) =>
    render(
      <ThemeProvider theme={THEMES.light}>
        <ThemeSwitch {...props} />
      </ThemeProvider>
    );

  it("renders unchecked with light theme", () => {
    const { container } = buildSubject();

    expect(container).toMatchSnapshot();
  });

  it("renders checked with dark theme", () => {
    const { getByTestId, getByText } = buildSubject({
      ...defaultProps,
      currentTheme: "dark",
    });
    const checkbox = getByTestId("toggleThemeCheckbox");

    expect(checkbox).toBeChecked();
    expect(getByText("Enable Light Mode")).toBeInTheDocument();
  });

  it("handles change", () => {
    const handleChange = jest.fn();
    const { getByTestId, getByText } = buildSubject({
      ...defaultProps,
      handleChange,
    });
    const checkbox = getByTestId("toggleThemeCheckbox");

    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalled();
  });
});

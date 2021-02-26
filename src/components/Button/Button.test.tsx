import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import Button, { ButtonProps } from ".";
import { THEMES } from "../../config";

describe("<Button />", () => {
  const defaultProps: ButtonProps = {
    onClick: () => {},
    text: "Click me",
    type: "plain",
  };

  const buildSubject = (props = defaultProps) =>
    render(
      <ThemeProvider theme={THEMES.light}>
        <Button {...props} />
      </ThemeProvider>
    );

  it("renders plain", () => {
    const { container } = buildSubject();

    expect(container).toMatchSnapshot();
  });

  it("handles clicks", () => {
    const onClick = jest.fn();
    const { getByText } = buildSubject({ ...defaultProps, onClick });

    fireEvent.click(getByText(defaultProps.text));

    expect(onClick).toHaveBeenCalled();
  });

  it("renders a plain type", () => {
    const { getByText } = buildSubject();

    expect(getByText(defaultProps.text)).toHaveStyleRule(
      "background-color",
      THEMES.light.colors.text,
      { target: ":hover" }
    );
    expect(getByText(defaultProps.text)).toHaveStyleRule(
      "border-color",
      THEMES.light.colors.text,
      { target: ":hover" }
    );
  });

  it("renders a error type", () => {
    const { getByText } = buildSubject({
      ...defaultProps,
      type: "error",
    });

    expect(getByText(defaultProps.text)).toHaveStyleRule(
      "background-color",
      THEMES.light.colors.error,
      { target: ":hover" }
    );
    expect(getByText(defaultProps.text)).toHaveStyleRule(
      "border-color",
      THEMES.light.colors.error,
      { target: ":hover" }
    );
  });

  it("renders a warning type", () => {
    const { getByText } = buildSubject({
      ...defaultProps,
      type: "warning",
    });

    expect(getByText(defaultProps.text)).toHaveStyleRule(
      "background-color",
      THEMES.light.colors.warning,
      { target: ":hover" }
    );
    expect(getByText(defaultProps.text)).toHaveStyleRule(
      "border-color",
      THEMES.light.colors.warning,
      { target: ":hover" }
    );
  });

  it("renders a success type", () => {
    const { getByText } = buildSubject({
      ...defaultProps,
      type: "success",
    });

    expect(getByText(defaultProps.text)).toHaveStyleRule(
      "background-color",
      THEMES.light.colors.success,
      { target: ":hover" }
    );
    expect(getByText(defaultProps.text)).toHaveStyleRule(
      "border-color",
      THEMES.light.colors.success,
      { target: ":hover" }
    );
  });

  it("renders large", () => {
    const { getByText } = buildSubject({
      ...defaultProps,
      size: "large",
    });

    expect(getByText(defaultProps.text)).toHaveStyleRule(
      "font-size",
      `${THEMES.light.fontSize[2]}px`
    );
    expect(getByText(defaultProps.text)).toHaveStyleRule(
      "padding",
      "16px 24px"
    );
  });
});

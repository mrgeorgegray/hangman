import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import Banner, { BannerProps } from ".";
import { THEMES } from "../../config";

describe("<Banner />", () => {
  const defaultProps: BannerProps = {
    message: "uh oh",
    type: "error",
  };

  const buildSubject = (props = defaultProps) =>
    render(
      <ThemeProvider theme={THEMES.light}>
        <Banner {...props}>Children</Banner>
      </ThemeProvider>
    );

  it("renders a banner", () => {
    const { container } = buildSubject();

    expect(container).toMatchSnapshot();
  });

  it("renders a error type", () => {
    const { getByRole } = buildSubject();

    expect(getByRole("alert")).toHaveStyleRule(
      "background-color",
      THEMES.light.colors.softError
    );
  });

  it("renders a success type", () => {
    const { getByRole } = buildSubject({
      ...defaultProps,
      type: "success",
    });

    expect(getByRole("alert")).toHaveStyleRule(
      "background-color",
      THEMES.light.colors.softSuccess
    );
  });
});

import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import Solution from ".";
import { THEMES } from "../../config";

describe("<Solution />", () => {
  it("renders", () => {
    const { container } = render(
      <ThemeProvider theme={THEMES.light}>
        <Solution text="s_lution" />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});

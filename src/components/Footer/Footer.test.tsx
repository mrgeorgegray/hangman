import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import Footer from ".";
import { THEMES } from "../../config";

describe("<Footer />", () => {
  it("renders", () => {
    const { container } = render(
      <ThemeProvider theme={THEMES.lightTheme}>
        <Footer />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});

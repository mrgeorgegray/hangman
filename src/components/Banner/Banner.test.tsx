import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import Banner from ".";
import { THEMES } from "../../config";

describe("<Banner />", () => {
  it("renders a error state", () => {
    const { container } = render(
      <ThemeProvider theme={THEMES.lightTheme}>
        <Banner type="error" message="uh oh" action={<span>Actions</span>} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders a success state", () => {
    const { container } = render(
      <ThemeProvider theme={THEMES.lightTheme}>
        <Banner type="success" message="woohoo" action={<span>Actions</span>} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});

import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import ChancesCount from ".";
import { THEMES } from "../../config";

describe("<ChancesCount />", () => {
  it("renders", () => {
    const { container } = render(
      <ThemeProvider theme={THEMES.light}>
        <ChancesCount chancesRemaining={2} />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});

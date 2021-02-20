import React from "react";
import { render } from "@testing-library/react";

import Solution from ".";

describe("<Solution />", () => {
  it("renders", () => {
    const { container } = render(<Solution text="s_lution" />);
    expect(container).toMatchSnapshot();
  });
});

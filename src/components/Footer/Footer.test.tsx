import React from "react";
import { render } from "@testing-library/react";

import Footer from ".";

describe("<Footer />", () => {
  it("renders", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});

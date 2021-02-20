import React from "react";
import { render } from "@testing-library/react";

import Header from ".";

describe("<Header />", () => {
  it("renders", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});

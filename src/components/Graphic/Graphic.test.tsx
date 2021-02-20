import React from "react";
import { render } from "@testing-library/react";

import Graphic from ".";

describe("<Graphic />", () => {
  it("renders", () => {
    const { container } = render(<Graphic chancesRemaining={2} />);
    expect(container).toMatchSnapshot();
  });
});

import React from "react";
import { render } from "@testing-library/react";

import Banner from ".";

describe("<Banner />", () => {
  it("renders a error state", () => {
    const { container } = render(<Banner type="error" text="uh oh" />);
    expect(container).toMatchSnapshot();
  });

  it("renders a success state", () => {
    const { container } = render(<Banner type="success" text="woohoo" />);
    expect(container).toMatchSnapshot();
  });
});

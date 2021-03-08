import { render } from "../../testUtils";
import Footer from ".";

describe("<Footer />", () => {
  it("renders", () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});

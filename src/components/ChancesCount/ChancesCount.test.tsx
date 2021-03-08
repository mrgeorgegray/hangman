import { render } from "../../testUtils";
import ChancesCount from ".";

describe("<ChancesCount />", () => {
  it("renders", () => {
    const { container } = render(<ChancesCount chancesRemaining={2} />);

    expect(container).toMatchSnapshot();
  });
});

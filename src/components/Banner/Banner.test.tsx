import { render } from "../../testUtils";
import { THEMES } from "../../config";
import Banner, { BannerProps } from ".";

describe("<Banner />", () => {
  const defaultProps: BannerProps = {
    message: "uh oh",
    type: "error",
  };

  const buildSubject = (props = defaultProps) =>
    render(<Banner {...props}>Children</Banner>);

  it("renders a banner", () => {
    const { container } = buildSubject();

    expect(container).toMatchSnapshot();
  });

  it("renders a error type", () => {
    const { getByRole } = buildSubject();

    expect(getByRole("alert")).toHaveStyleRule(
      "background-color",
      THEMES.light.colors.softError
    );
  });

  it("renders a success type", () => {
    const { getByRole } = buildSubject({
      ...defaultProps,
      type: "success",
    });

    expect(getByRole("alert")).toHaveStyleRule(
      "background-color",
      THEMES.light.colors.softSuccess
    );
  });
});

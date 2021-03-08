import { render } from "../../testUtils";
import { THEMES } from "../../config";
import { GameStatus } from "../../context/Game/state";
import Solution, { SolutionProps } from ".";

describe("<Solution />", () => {
  const defaultProps: SolutionProps = {
    text: "s_lution",
    status: GameStatus.Playing,
  };

  const buildSubject = (props = defaultProps) =>
    render(<Solution {...props} />);

  it("renders inPlay", () => {
    const { container } = buildSubject();

    expect(container).toMatchSnapshot();
  });

  it("renders as won", () => {
    const { getByText } = buildSubject({
      ...defaultProps,
      text: "won",
      status: GameStatus.Won,
    });

    expect(getByText("won")).toHaveStyleRule(
      "color",
      THEMES.light.colors.success
    );
  });

  it("renders as lost", () => {
    const { getByText } = buildSubject({
      ...defaultProps,
      text: "lost",
      status: GameStatus.Lost,
    });

    expect(getByText("lost")).toHaveStyleRule(
      "color",
      THEMES.light.colors.error
    );
  });
});

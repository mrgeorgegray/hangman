import { render, fireEvent } from "../../testUtils";
import { THEMES } from "../../config";
import Letter, { LetterProps } from ".";

describe.only("<Letter />", () => {
  const defaultProps: LetterProps = {
    onClick: () => {},
    letter: "a",
    isDisabled: false,
    isCorrect: false,
    shouldHighlight: false,
  };

  const buildSubject = (props = defaultProps) => render(<Letter {...props} />);

  it("renders", () => {
    const { container } = buildSubject();

    expect(container).toMatchSnapshot();
  });

  it("handles clicks", () => {
    const onClick = jest.fn();
    const { getByText } = buildSubject({ ...defaultProps, onClick });

    fireEvent.click(getByText(defaultProps.letter));

    expect(onClick).toHaveBeenCalled();
  });

  it("is disabled", () => {
    const onClick = jest.fn();
    const { getByText } = buildSubject({
      ...defaultProps,
      onClick,
      isDisabled: true,
    });
    const btn = getByText(defaultProps.letter);

    fireEvent.click(btn);

    expect(onClick).not.toHaveBeenCalled();
    expect(btn).toBeDisabled();
  });

  it("highlights correct", () => {
    const { getByText } = buildSubject({
      ...defaultProps,
      shouldHighlight: true,
      isCorrect: true,
    });

    expect(getByText(defaultProps.letter)).toHaveStyleRule(
      "color",
      THEMES.light.colors.success
    );
  });

  it("highlights incorrect", () => {
    const { getByText } = buildSubject({
      ...defaultProps,
      shouldHighlight: true,
      isCorrect: false,
    });

    expect(getByText(defaultProps.letter)).toHaveStyleRule(
      "color",
      THEMES.light.colors.error
    );
  });
});

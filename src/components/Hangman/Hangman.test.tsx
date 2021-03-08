import { render } from "../../testUtils";
import Hangman from ".";

describe("<Hangman />", () => {
  const buildSubject = (chancesRemaining: number) =>
    render(<Hangman chancesRemaining={chancesRemaining} />);

  it("renders gallows", () => {
    const { container } = buildSubject(6);

    expect(container).toMatchSnapshot();
  });

  it("renders head", () => {
    const { getByTestId } = buildSubject(5);

    expect(getByTestId("gallows")).toBeInTheDocument();
    expect(getByTestId("head")).toBeInTheDocument();
  });

  it("renders body", () => {
    const { getByTestId } = buildSubject(4);

    expect(getByTestId("gallows")).toBeInTheDocument();
    expect(getByTestId("head")).toBeInTheDocument();
    expect(getByTestId("body")).toBeInTheDocument();
  });

  it("renders left arm", () => {
    const { getByTestId } = buildSubject(3);

    expect(getByTestId("gallows")).toBeInTheDocument();
    expect(getByTestId("head")).toBeInTheDocument();
    expect(getByTestId("body")).toBeInTheDocument();
    expect(getByTestId("left-arm")).toBeInTheDocument();
  });

  it("renders right arm", () => {
    const { getByTestId } = buildSubject(2);

    expect(getByTestId("gallows")).toBeInTheDocument();
    expect(getByTestId("head")).toBeInTheDocument();
    expect(getByTestId("body")).toBeInTheDocument();
    expect(getByTestId("right-arm")).toBeInTheDocument();
  });

  it("renders left leg", () => {
    const { getByTestId } = buildSubject(1);

    expect(getByTestId("gallows")).toBeInTheDocument();
    expect(getByTestId("head")).toBeInTheDocument();
    expect(getByTestId("body")).toBeInTheDocument();
    expect(getByTestId("right-arm")).toBeInTheDocument();
    expect(getByTestId("left-leg")).toBeInTheDocument();
  });

  it("renders right leg", () => {
    const { getByTestId } = buildSubject(0);

    expect(getByTestId("gallows")).toBeInTheDocument();
    expect(getByTestId("head")).toBeInTheDocument();
    expect(getByTestId("body")).toBeInTheDocument();
    expect(getByTestId("right-arm")).toBeInTheDocument();
    expect(getByTestId("left-leg")).toBeInTheDocument();
    expect(getByTestId("right-leg")).toBeInTheDocument();
  });
});

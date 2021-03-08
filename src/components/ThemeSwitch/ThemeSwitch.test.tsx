import { render, fireEvent } from "../../testUtils";
import ThemeSwitch, { ThemeSwitchProps } from ".";

describe("<ThemeSwitch />", () => {
  const defaultProps: ThemeSwitchProps = {
    currentTheme: "light",
    handleChange: () => {},
  };

  const buildSubject = (props = defaultProps) =>
    render(<ThemeSwitch {...props} />);

  it("renders unchecked with light theme", () => {
    const { container } = buildSubject();

    expect(container).toMatchSnapshot();
  });

  it("renders checked with dark theme", () => {
    const { getByTestId, getByText } = buildSubject({
      ...defaultProps,
      currentTheme: "dark",
    });
    const checkbox = getByTestId("toggleThemeCheckbox");

    expect(checkbox).toBeChecked();
    expect(getByText("Enable Light Mode")).toBeInTheDocument();
  });

  it("handles change", () => {
    const handleChange = jest.fn();
    const { getByTestId } = buildSubject({
      ...defaultProps,
      handleChange,
    });
    const checkbox = getByTestId("toggleThemeCheckbox");

    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalled();
  });
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import Button from ".";
import { THEMES } from "../../config";

describe("<Button />", () => {
  const onClick = jest.fn();
  const text = "Click me";

  it("renders error", () => {
    const { container } = render(
      <ThemeProvider theme={THEMES.lightTheme}>
        <Button type="error" onClick={onClick} text={text} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders success", () => {
    const { container } = render(
      <ThemeProvider theme={THEMES.lightTheme}>
        <Button type="success" onClick={onClick} text={text} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders warning", () => {
    const { container } = render(
      <ThemeProvider theme={THEMES.lightTheme}>
        <Button type="warning" onClick={onClick} text={text} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("handles clicks", () => {
    const { getByText } = render(
      <ThemeProvider theme={THEMES.lightTheme}>
        <Button type="error" onClick={onClick} text={text} />
      </ThemeProvider>
    );
    fireEvent.click(getByText(text));
    expect(onClick).toHaveBeenCalled();
  });
});

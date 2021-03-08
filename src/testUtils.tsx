import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import { THEMES } from "./config";

const WithTheme: React.FC = ({ children }) => (
  <ThemeProvider theme={THEMES.light}>{children}</ThemeProvider>
);

const renderWithTheme = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: WithTheme, ...options });

export * from "@testing-library/react";
export { renderWithTheme as render };

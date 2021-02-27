import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";

import Topics, { TopicsProps } from ".";
import { THEMES } from "../../config";

describe("<Topics />", () => {
  const defaultProps: TopicsProps = {
    handleTopicClick: () => {},
    topics: [
      { topic: "movies", title: "Movies" },
      { topic: "sport", title: "Sport" },
      { topic: "words", title: "Words" },
    ],
  };

  const buildSubject = (props = defaultProps) =>
    render(
      <ThemeProvider theme={THEMES.light}>
        <Topics {...props} />
      </ThemeProvider>
    );

  it("renders", () => {
    const { container } = buildSubject();

    expect(container).toMatchSnapshot();
  });

  it("handles a topic click", () => {
    const handleTopicClick = jest.fn();
    const { getByText } = buildSubject({ ...defaultProps, handleTopicClick });

    fireEvent.click(getByText("Movies"));

    expect(handleTopicClick).toHaveBeenCalledWith("movies");
  });
});

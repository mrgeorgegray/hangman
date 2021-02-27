/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

import Button from "../Button";
import { Topic } from "../../context/Game/state";

export interface TopicsProps {
  handleTopicClick: (t: Topic) => void;
  topics: { topic: Topic; title: string }[];
}

const Topics: React.FC<TopicsProps> = ({ handleTopicClick, topics }) => {
  const { space } = useTheme();

  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <p
        css={css`
          margin-bottom: ${space[3]}px;
          margin-top: ${space[4]}px;
        `}
      >
        Choose a topic
      </p>
      {topics.map((t) => (
        <div
          key={t.topic}
          css={css`
            margin-bottom: ${space[2]}px;
          `}
        >
          <Button
            type="plain"
            size="large"
            onClick={() => handleTopicClick(t.topic)}
            text={t.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Topics;

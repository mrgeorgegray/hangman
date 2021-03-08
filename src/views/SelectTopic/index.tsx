/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

import { useGameDispatch } from "../../context/Game";
import { Topic, topicList } from "../../context/Game/state";
import Button from "../../components/Button";
import { capitaliseFirstLetter } from "../../utils";

const SelectTopic = () => {
  const { space } = useTheme();
  const dispatch = useGameDispatch();

  const handleSetTopic = (topic: Topic) => {
    dispatch({ type: "setTopicAndStart", payload: { topic } });
  };

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
      {topicList.map((topic) => (
        <div
          key={topic}
          css={css`
            margin-bottom: ${space[2]}px;
          `}
        >
          <Button
            type="plain"
            size="large"
            onClick={() => handleSetTopic(topic)}
            text={capitaliseFirstLetter(topic)}
          />
        </div>
      ))}
    </div>
  );
};

export default SelectTopic;

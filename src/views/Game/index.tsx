/** @jsxImportSource @emotion/react */
import React from "react";
import { css, useTheme } from "@emotion/react";

import { useGameDispatch, useGameState } from "../../context/Game";
import { GameStatus, Topic } from "../../context/Game/state";
import Banner from "../../components/Banner";
import Button from "../../components/Button";
import Hangman from "../../components/Hangman";
import Letter from "../../components/Letter";
import Solution from "../../components/Solution";
import Topics from "../../components/Topics";

const topics: { topic: Topic; title: string }[] = [
  { topic: "movies", title: "Movies" },
  { topic: "sport", title: "Sport" },
  { topic: "words", title: "Words" },
];

const GamePage: React.FC = () => {
  const { breakpoints, colors, fontSize, space } = useTheme();
  const dispatch = useGameDispatch();
  const {
    chancesRemaining,
    guesses,
    letters,
    solution,
    solutionFormatted,
    status,
    topic,
  } = useGameState();

  const handleGuess = React.useCallback(
    (letter: string) => {
      dispatch({
        type: "guess",
        payload: {
          letter,
        },
      });
    },
    [dispatch]
  );

  const handleKeyup = React.useCallback(
    (event: KeyboardEvent) => {
      if (letters.includes(event.key)) {
        handleGuess(event.key);
      }
    },
    [letters, handleGuess]
  );

  const handleNewGame = () => {
    dispatch({ type: "new" });
  };

  const handleQuit = () => {
    dispatch({ type: "quit" });
  };

  const handleGiveup = () => {
    dispatch({ type: "giveup" });
  };

  const handleSetTopic = (topic: Topic) => {
    dispatch({ type: "setTopic", payload: { topic } });
  };

  React.useEffect(() => {
    if (status === GameStatus.Playing) {
      window.addEventListener("keyup", handleKeyup);
    } else {
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [status, handleKeyup]);

  if (!topic) {
    return <Topics handleTopicClick={handleSetTopic} topics={topics} />;
  }

  return (
    <div
      css={css`
        text-align: center;
        @media (min-width: ${breakpoints.lg}) {
          text-align: left;
        }
      `}
    >
      {status === GameStatus.Lost && (
        <Banner
          type="error"
          message="Game over :-( "
          action={
            <Button type="plain" onClick={handleNewGame} text="New Game" />
          }
        />
      )}
      {status === GameStatus.Won && (
        <Banner
          type="success"
          message="Congratulations! You Won :-)"
          action={
            <Button type="plain" onClick={handleNewGame} text="New Game" />
          }
        />
      )}
      <div
        css={css`
          margin-top: ${space[2]}px;

          @media (min-width: ${breakpoints.lg}) {
            float: left;
            width: 48%;
          }
        `}
      >
        <Hangman chancesRemaining={chancesRemaining} />
      </div>
      <div
        css={css`
          margin-top: ${space[2]}px;

          @media (min-width: ${breakpoints.lg}) {
            float: right;
            margin-top: ${space[4]}px;
            width: 48%;
          }
        `}
      >
        <Solution text={solutionFormatted} status={status} />
        <div
          css={css`
            font-size: ${fontSize[0]}px;
            margin-bottom: ${space[2]}px;
          `}
        >
          <p
            aria-live="polite"
            id="chancesRemaining"
            css={css`
              color: ${colors.grey};
            `}
          >
            (chances remaining: {chancesRemaining})
          </p>
        </div>
        <div
          css={css`
            margin-bottom: ${space[3]}px;

            @media (min-width: ${breakpoints.lg}) {
              margin-left: -${space[2] + 2}px;
              max-width: 440px;
            }
          `}
        >
          {letters.flatMap((letter) => {
            const isUsed = guesses.includes(letter);
            const isDisabled = status !== GameStatus.Playing || isUsed;
            const isCorrect = solution?.includes(letter);
            const shouldHighlight = isUsed && isDisabled;

            return (
              <Letter
                aria-controls="chancesRemaining"
                key={letter}
                onClick={handleGuess}
                letter={letter}
                isDisabled={isDisabled}
                isCorrect={isCorrect}
                shouldHighlight={shouldHighlight}
              />
            );
          })}
        </div>
        <nav>
          {status === GameStatus.Playing && (
            <div
              css={css`
                margin-bottom: ${space[3]}px;
              `}
            >
              <span
                css={css`
                  margin-right: ${space[2]}px;
                `}
              >
                <Button type="warning" onClick={handleGiveup} text="Give up!" />
              </span>
              <Button type="error" onClick={handleQuit} text="Quit Game" />
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default GamePage;

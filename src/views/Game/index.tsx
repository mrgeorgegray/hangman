/** @jsxImportSource @emotion/react */
import React from "react";
import { css, useTheme } from "@emotion/react";

import { useGameDispatch, useGameState } from "../../context/Game";
import { GameStatus } from "../../context/Game/state";
import Banner from "../../components/Banner";
import Button from "../../components/Button";
import ChancesCount from "../../components/ChancesCount";
import Hangman from "../../components/Hangman";
import Letter from "../../components/Letter";
import Solution from "../../components/Solution";

const GamePage: React.FC = () => {
  const { breakpoints, space } = useTheme();
  const dispatch = useGameDispatch();
  const {
    chancesRemaining,
    guesses,
    letters,
    solution,
    solutionFormatted,
    status,
  } = useGameState();

  const handleGuess = React.useCallback(
    (letter: string) => {
      dispatch({
        type: "guess",
        payload: { letter },
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

  const handleDispatch = (type: "new" | "quit" | "giveup") => {
    dispatch({ type });
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
        <Banner type="error" message="Game over :-( ">
          <Button
            type="plain"
            onClick={() => handleDispatch("new")}
            text="New Game"
          />
        </Banner>
      )}
      {status === GameStatus.Won && (
        <Banner type="success" message="Congratulations! You Won :-)">
          <Button
            type="plain"
            onClick={() => handleDispatch("new")}
            text="New Game"
          />
        </Banner>
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
        <ChancesCount chancesRemaining={chancesRemaining} />
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
            <div>
              <Button
                type="warning"
                onClick={() => handleDispatch("giveup")}
                text="Give up!"
              />
              <Button
                type="error"
                onClick={() => handleDispatch("quit")}
                text="Quit Game"
              />
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default GamePage;

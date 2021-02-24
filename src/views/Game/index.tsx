/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

import { useGameDispatch, useGameState } from "../../context/Game";
import { GameStatus } from "../../context/Game/state";
import Action from "../../components/Action";
import Banner from "../../components/Banner";
import Hangman from "../../components/Hangman";
import Letter from "../../components/Letter";
import Solution from "../../components/Solution";

const GamePage: React.FC = () => {
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
    dispatch({ type: "start" });
  };

  const handleQuit = () => {
    dispatch({ type: "quit" });
  };

  const handleGiveup = () => {
    dispatch({ type: "giveup" });
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
        max-width: 1000px;
        text-align: center;

        @media (min-width: 720px) {
          text-align: left;
        }
      `}
    >
      {status === GameStatus.Lost && (
        <Banner
          type="error"
          message={`You Lost :-( the answer was "${solution}"`}
          action={
            <Action type="success" onClick={handleNewGame} text="New Game" />
          }
        />
      )}
      {status === GameStatus.Won && (
        <Banner
          type="success"
          message="Congratulations! You Won :-)"
          action={
            <Action type="success" onClick={handleNewGame} text="New Game" />
          }
        />
      )}
      <div
        css={css`
          margin-top: 20px;

          @media (min-width: 720px) {
            float: left;
            width: 48%;
          }
        `}
      >
        <Hangman chancesRemaining={chancesRemaining} />
      </div>
      <div
        css={css`
          margin-top: 30px;

          @media (min-width: 720px) {
            float: right;
            margin-top: 80px;
            width: 48%;
          }
        `}
      >
        <Solution text={solutionFormatted} />
        <div
          css={css`
            font-size: 14px;
            margin-bottom: 20px;
          `}
        >
          <p>(chances remaining: {chancesRemaining})</p>
        </div>
        <div
          css={css`
            margin-bottom: 30px;

            @media (min-width: 720px) {
              margin-left: -20px;
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
                margin-bottom: 30px;
              `}
            >
              <Action type="warning" onClick={handleGiveup} text="Give up!" />
              <Action type="error" onClick={handleQuit} text="Quit Game" />
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default GamePage;

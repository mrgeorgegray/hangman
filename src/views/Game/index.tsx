import React from "react";

import { useGameDispatch, useGameState } from "../../context/Game";
import { GameStatus } from "../../context/Game/state";
import Action from "../../components/Action";
import Banner from "../../components/Banner";
import Graphic from "../../components/Graphic";
import Letter from "../../components/Letter";
import Solution from "../../components/Solution";

const GamePage: React.FC = () => {
  const dispatch = useGameDispatch();
  const {
    chancesRemaining,
    status,
    letters,
    solution,
    solutionFormatted,
    guesses,
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
    <div>
      <nav>
        <Action onClick={handleNewGame} text="New Game" />
        <Action onClick={handleGiveup} text="Give up!" />
        <Action onClick={handleQuit} text="Quit Game" />
      </nav>
      <hr />
      {status === GameStatus.Lost && (
        <Banner
          type="error"
          text={`You Lost :-( — the answer was "${solution.toUpperCase()}"`}
        />
      )}
      {status === GameStatus.Won && (
        <Banner
          type="success"
          text={`Congratulations! You Won :-) with ${chancesRemaining} chances left`}
        />
      )}
      <Graphic chancesRemaining={chancesRemaining} />
      <Solution text={solutionFormatted} />
      <div style={{ maxWidth: 240 }}>
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
    </div>
  );
};

export default GamePage;

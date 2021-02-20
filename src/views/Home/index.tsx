import React from "react";

import { useGameDispatch } from "../../context/Game";

const HomePage: React.FC = () => {
  const dispatch = useGameDispatch();

  const handleStart = () => {
    dispatch({ type: "start" });
  };

  return (
    <div>
      <h1>Welcome to Hangman!</h1>
      <p>Press the button to get started...</p>
      <button onClick={handleStart}>Start Game</button>
    </div>
  );
};

export default HomePage;

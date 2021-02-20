import React from "react";

interface LetterProps {
  onClick: (letter: string) => void;
  letter: string;
  isDisabled: boolean;
  isCorrect: boolean;
  shouldHighlight: boolean;
}

const Letter: React.FC<LetterProps> = ({
  onClick,
  letter,
  isDisabled,
  isCorrect,
  shouldHighlight,
}) => (
  <button
    disabled={isDisabled}
    onClick={() => onClick(letter)}
    style={{
      border: "1px solid #c3c3c3",
      color: shouldHighlight ? (isCorrect ? "green" : "red") : undefined,
      width: 30,
      height: 30,
      display: "inline-block",
      fontSize: 18,
      textAlign: "center",
      textTransform: "uppercase",
      margin: 2,
    }}
  >
    {letter}
  </button>
);

export default Letter;

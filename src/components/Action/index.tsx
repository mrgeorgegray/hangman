import React from "react";

interface ActionProps {
  onClick: () => void;
  text: string;
}

const Action: React.FC<ActionProps> = ({ onClick, text }) => (
  <button style={{ marginRight: 6 }} onClick={onClick}>
    {text}
  </button>
);

export default Action;

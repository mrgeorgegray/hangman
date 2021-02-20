import React from "react";

interface SolutionProps {
  text: string;
}

const Solution: React.FC<SolutionProps> = ({ text }) => (
  <div
    style={{
      fontSize: "32px",
      letterSpacing: "4px",
      textTransform: "uppercase",
      marginBottom: 20,
    }}
  >
    {text}
  </div>
);

export default Solution;

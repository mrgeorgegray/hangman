import React from "react";

interface GraphicProps {
  chancesRemaining: number;
}

const Graphic: React.FC<GraphicProps> = ({ chancesRemaining }) => (
  <div
    style={{
      width: 160,
      height: 160,
      backgroundColor: "#c3c3c3",
      textAlign: "center",
      padding: 20,
      marginBottom: 20,
    }}
  >
    <p>Hangman graphic @todo...</p>
    <p>(chances remaining: {chancesRemaining})</p>
  </div>
);

export default Graphic;

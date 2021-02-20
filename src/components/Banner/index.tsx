import React, { CSSProperties } from "react";

interface BannerProps {
  type: "error" | "success";
  text: string;
}

const Banner: React.FC<BannerProps> = ({ type, text }) => {
  let styles: CSSProperties = {};

  if (type === "error") {
    styles = {
      backgroundColor: "#FFBABA",
    };
  }
  if (type === "success") {
    styles = {
      backgroundColor: "#DFF2BF",
    };
  }

  return (
    <div
      style={{
        ...styles,
        padding: 20,
        margin: "10px 0",
        border: "2px solid black",
      }}
    >
      {text}
    </div>
  );
};

export default Banner;

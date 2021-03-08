/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

const Footer = () => {
  const { fontSize, space } = useTheme();

  return (
    <footer
      role="contentinfo"
      css={css`
        flex-shrink: 0;
        font-size: ${fontSize[0]}px;
        padding-top: ${space[3]}px;
        text-align: center;
      `}
    >
      <hr />
      <p>
        Read more about{" "}
        <a href="https://github.com/mrgeorgegray/hangman">this project</a>.
      </p>
    </footer>
  );
};

export default Footer;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Footer = () => (
  <footer
    css={css`
      flex-shrink: 0;
      font-size: 14px;
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

export default Footer;

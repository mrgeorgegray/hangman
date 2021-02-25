/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

const Footer: React.FC = () => {
  const { fontSize } = useTheme();

  return (
    <footer
      css={css`
        flex-shrink: 0;
        font-size: ${fontSize[0]}px;
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

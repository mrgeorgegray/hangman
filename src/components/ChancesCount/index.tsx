/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

interface ChancesCountProps {
  chancesRemaining: number;
}

const ChancesCount: React.FC<ChancesCountProps> = ({ chancesRemaining }) => {
  const { colors, fontSize, space } = useTheme();

  return (
    <div
      css={css`
        font-size: ${fontSize[0]}px;
        margin-bottom: ${space[2]}px;
      `}
    >
      <p
        id="chancesRemaining"
        aria-live="polite"
        css={css`
          color: ${colors.grey};
        `}
      >
        (chances remaining: {chancesRemaining})
      </p>
    </div>
  );
};

export default ChancesCount;

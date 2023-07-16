import { css } from "@emotion/react";

export const muscleMemoryNoteSheetStyles = {
  root: css({
    "svg": {
      width: "100% !important",

      "&:first-of-type": {
        display: "none",
      },

      "&:last-of-type": {
        display: "flex",
      },
    },
  }),
};
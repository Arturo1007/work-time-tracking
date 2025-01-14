import { sva } from "../../../../styled-system/css";

export const FormErrorBoxRecipe = sva({
  slots: ['root', 'title', 'list'],
  base: {
    root: {
      color: "white",
      px: "2",
      py: "2",
      rounded: "sm",
      w: "max-content",
      listStyle: "inside",
      mb: "1",
    },
    title: {
      fontSize: "md",
    },
    list: {
      fontSize: "sm",
    },
  },
  variants: {
    success: {
      true: {
        root: {bg: '#00BB77'},
      },
      false: {
        root: {bg: 'red.500'},
      }
    }
  }
})
import { sva } from "../../../../styled-system/css";

export const timeRecipe = sva({
  slots: ['root', 'close'],
  base: {
    root: {
      p: '3', color: 'white', rounded: 'sm', position: 'relative', transition: 'transform',
      _hover: {
        transform: 'translateX(1px)'
      }
    },
    close: { position: 'absolute', right: '2', top: '3', cursor:'pointer' }
  },
  variants: {
    style: {
      primary: {
        root: { bg: '#00BB77' },
      },
      secondary: {
        root: { bg: 'yellow.500', color: 'white'},
      },
      terciary: {
        root: { bg: 'red.500' },
      }
    }
  },
  defaultVariants: {
    style: 'primary',
  }
})
import { sva } from "../../../../styled-system/css";

export const InputFieldRecipe = sva({
  slots: ['root', 'input', 'labelWrapper', 'label'],
  base: {
    root: {
      display: 'flex', gap: '2', flexDir: 'column', fontWeight: 'bold', width: 'full', sm: {width: '1/2'}
    },
    input: {
      borderWidth: '1px', borderRadius: 'sm', fontWeight: 'normal',
      _focus: {outline: '2px solid #00BB77' }
    },
    labelWrapper: {
      display: 'flex',
      flexWrap:'wrap',
      gap: '2'
    },
    label: {
      color: 'white',
      p: 1,
      px: 2,
      rounded: 'md',
      bg: '#00BB77',
      cursor: 'pointer',
      transition: 'transform .2s ease',
      _hover: {
        transform: 'translateY(-2px)'
      }
    }
  },
  variants: {
    size: {
      sm: {
        root: {},
        input: { fontSize: 'sm', p: '1' }
      },
      md: {
        root: {},
        input: { fontSize: 'md', p: '2' }
      },
      lg: {
        root: {},
        input: { fontSize: 'lg', p: '2' }
      }
    },
    style: {
      primary: {
        root: {},
        input: {outline: '1px solid #00BB77', border: 'none', color: 'black'}
      },
      secondary: {
        root: {},
        input: {outline: '1px solid #00BB77', border: 'none', color: '#00BB77'}
      }
    }
  },
  defaultVariants: {
    size: 'lg',
    style: 'primary',
  }
})
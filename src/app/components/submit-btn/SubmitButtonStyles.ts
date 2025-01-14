import { cva } from "../../../../styled-system/css";

export const SubmitButtondRecipe = cva({
  base: {
    color: "#00BB77",
    border: "1px solid #00BB77",
    cursor: "pointer",
    p: 2,
    px: 3,
    rounded: "md",
    fontSize: "lg",
    fontWeight: "bold",
    width: "full",
    transition: 'transform .2s ease',
    sm: { width: "1/2" },
    _hover: {
      transform: 'translateY(-2px)'
    },
    _disabled: {
      color: 'gray.500',
      borderColor: 'gray.500',
      transform: ''
    }
  }
})
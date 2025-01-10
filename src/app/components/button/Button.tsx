import { css } from "../../../../styled-system/css";

type button = {
  btnText: string,
}

export default function Button({btnText} :button) {
  return (
    <button
      type="submit"
      className={css({
        color: "#00BB77",
        border: "1px solid #00BB77",
        cursor: "pointer",
        p: 2,
        px: 3,
        rounded: "md",
        fontSize: "xl",
        fontWeight: "bold",
        width: "full",
        transition: 'transform .2s ease',
        sm: { width: "1/2" },
        _hover: {
          transform: 'translateY(-2px)'
        }
      })}
    >
      {btnText}
    </button>
  );
}

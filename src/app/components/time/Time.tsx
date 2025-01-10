import { ReactNode } from "react";
import { timeRecipe } from "./TimeStyle";
import { flex } from "../../../../styled-system/patterns";
import { css, cx } from "../../../../styled-system/css";
import Image from "next/image";

type Time = {
  description: string;
  minutes: number;
  style?: "primary" | "secondary" | "terciary";
};

export default function Time({ description, minutes, style }: Time) {
  const timeClasses = timeRecipe({ style });
  return (
    <div className={timeClasses.root}>
      <p><b>[{minutes}]</b> {description}</p>
      <a href="" className={timeClasses.close}>
        <Image
          src={"/assets/icons/close.png"}
          alt="Cross icon"
          width={24}
          height={24}
        />
      </a>
    </div>
  );
}

type TimeWrapper = {
  children: ReactNode;
};

export function TimeWrapper({ children }: TimeWrapper) {
  return (
    <div
      className={cx(
        flex({ gap: "1", direction: "column" }),
        css({ mt: "4", borderTop: " 1px solid #00BB77", py: "2" })
      )}
    >
      {children}
    </div>
  );
}

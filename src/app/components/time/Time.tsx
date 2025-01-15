"use client";
import { ReactNode, useActionState } from "react";
import { timeRecipe } from "./TimeStyle";
import { flex } from "../../../../styled-system/patterns";
import { css, cx } from "../../../../styled-system/css";
import Image from "next/image";
import { deleteTime } from "@/app/libs/actions";
import { Time as TimeTypes } from "@prisma/client";

type TimeWithoutDates = Omit<TimeTypes, "createAt" | "updateAt">;

export default function Time({
  id,
  description,
  minutesAmount,
}: TimeWithoutDates) {
  const [state, formAction, pending] = useActionState(deleteTime, {
      success: false,
      message: "",
    });
  // Set styling.
  let style: "primary" | "secondary" | "terciary" = "primary";
  if (minutesAmount < 60) {
    style = "primary";
  }
  if (minutesAmount >= 60 && minutesAmount <= 120) {
    style = "secondary";
  }
  if (minutesAmount > 120) {
    style = "terciary";
  }

  const timeClasses = timeRecipe({ style });

  if (state.success) {
    return null;
  }

  return (
    <div className={timeClasses.root}>
      <p>
        <b>[{minutesAmount}]</b> {description}
      </p>
      {!state.success && <p className={css({fontWeight:'bolder'})}>{state.message}</p>}
      <form action={formAction}>
        <button
          name="time-id"
          value={id}
          type="submit"
          disabled = {pending}
          className={timeClasses.close}
        >
          <Image
            src={"/assets/icons/close.png"}
            alt="Cross icon"
            width={24}
            height={24}
          />
        </button>
      </form>
    </div>
  );
}

type TimeWrapper = {
  title: string;
  children: ReactNode;
};

export function TimeWrapper({ children, title }: TimeWrapper) {
  return (
    <>
      <h2
        className={css({
          fontSize: "xl",
          color: "#00BB77",
          mt: "2",
          fontWeight: "bold",
        })}
      >
        {title}
      </h2>
      <div
        className={cx(
          flex({ gap: "1", direction: "column" }),
          css({ mt: "4", borderTop: " 1px solid #00BB77", py: "2" })
        )}
      >
        {children}
      </div>
    </>
  );
}

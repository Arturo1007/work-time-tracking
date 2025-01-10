import React from "react";
import { flex } from "../../../../styled-system/patterns";
import { css, cx } from "../../../../styled-system/css";
import Image from "next/image";

export default function TopSection() {
  // Calculate Current Date.
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  if (dd < 10) dd = 0 + dd;
  if (mm < 10) mm = 0 + mm;
  const formattedToday = dd + "/" + mm + "/" + yyyy;
  return (
    <div className={flex({ direction: "row", justify: "space-between" })}>
      <div>
        <h2
          className={css({
            fontWeight: "bold",
            fontSize: "2xl",
            color: "#00BB77",
          })}
        >
          Hi Arturo
        </h2>
        <p className={css({ fontSize: "xl", color: "black" })}>
          Log your work hours:
        </p>
      </div>
      <div
        className={cx(
          css({
            fontSize: "xl",
            fontWeight: "bold",
            color: "#00BB77",
          }),
          flex({ align: "center" })
        )}
      >
        <Image
          src={"/assets/icons/calendar.png"}
          alt="Clock icon"
          width={24}
          height={24}
          className={css({ mr: "1" })}
        />
        {formattedToday}
      </div>
    </div>
  );
}

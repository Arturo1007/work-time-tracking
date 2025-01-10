import { css, cx } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";
import Image from "next/image";
import InputField, { HoursField } from "./components/input-field/InputField";
import Button from "./components/button/Button";

export default function Home() {
  // Calculate Current Date.
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  if (dd < 10) dd = 0 + dd;
  if (mm < 10) mm = 0 + mm;
  const formattedToday = dd + "/" + mm + "/" + yyyy;

  return (
    <>
      {/* Top section */}
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
      {/* Middle section */}
      <form className={css({ pt: "8", fontSize: "xl", width:'full', sm: {width: '1/2'} })}>
        <InputField
          description="Task description:"
          placeholder="Type your description here"
        />
        <HoursField
          description="Amount of hours:"
          placeholder="30m, 1h, 1h 30m"
        />
        <Button btnText="Submit"/>
      </form>
    </>
  );
}

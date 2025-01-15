import Time, { TimeWrapper } from "./components/time/Time";
import FormNewTime from "./components/form-new-time/FormNewTime";
import TopSection from "./components/top-section/TopSection";
import { fetchTime } from "./libs/data";

export default async function Home() {
  let times = await fetchTime();
  return (
    <>
      <TopSection />
      <FormNewTime/>
      <TimeWrapper title="Today: ">
        {times.map((time)=> {
          return <Time id={time.id} description={time.description} minutesAmount={time.minutesAmount} key={time.id} />
        })}
      </TimeWrapper>
    </>
  );
}

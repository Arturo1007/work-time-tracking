import Time, { TimeWrapper } from "./components/time/Time";
import FormNewTime from "./components/form-new-time/FormNewTime";
import TopSection from "./components/top-section/TopSection";

export default function Home() {
  return (
    <>
      <TopSection />
      <FormNewTime/>
      <TimeWrapper title="Today: ">
        <Time description="Daily" minutes={60} style="primary" />
        <Time description="Working on ticket #7664" minutes={120} style="secondary"/>
        <Time description="Overflow" minutes={180} style="terciary" />
      </TimeWrapper>
    </>
  );
}

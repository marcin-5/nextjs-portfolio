import moment from "moment-timezone";
import {FC, useEffect, useState} from "react";

interface LiveClockProps {
  timeZone: string;
}

const TIME_DISPLAY_DURATION = 1000; /* milliseconds */

const getCityNameFromTimeZone = (timeZone: string) => timeZone.split("/").pop();

const LiveClock: FC<LiveClockProps> = ({timeZone}) => {
  const [timeDisplay, setTimeDisplay] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const currentTime = moment().tz(timeZone).format("HH:mm");
      setTimeDisplay(currentTime);
    };

    const intervalId = setInterval(updateClock, TIME_DISPLAY_DURATION);

    return () => clearTimeout(intervalId);    // Cleanup interval on component unmount
  }, [timeZone]);

  return (
    <div className={"text-3xl text-secondary-foreground"}>
      {
        timeDisplay ? (
          <div className={"flex items-center justify-center font-semibold gap-[0.5vw]"}>
            <span>{getCityNameFromTimeZone(timeZone)},&nbsp;</span>
            <span>{timeDisplay}</span>
          </div>
        ) : (
          <div className={"font-oswald text-center"}>loading...</div>
        )
      }
    </div>
  );
};

export default LiveClock;

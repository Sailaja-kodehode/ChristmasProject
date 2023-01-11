import React from "react";
import { Countdown } from "./Countdown.jsx";
import DateTimeDisplay from "./DateTimeDisplay";
import "../Countdown/countdown.css";
const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = Countdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
const ExpiredNotice = () => {
  return (
    <div className="expired_notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};
const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="timer_container">
      <div className="timer">
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
      </div>
      <div className="timer">
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
      </div>
      <div className="timer">
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      </div>
      <div className="timer">
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </div>
    </div>
  );
};
export default CountdownTimer;

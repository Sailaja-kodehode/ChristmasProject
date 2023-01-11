import React from "react";

const DateTimeDisplay = ({ value, type, ending }) => {
  return (
    <div className={ending ? "countdown end" : "countdown"}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};
export default DateTimeDisplay;

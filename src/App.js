//import logo from "./logo.svg";
import React from "react";

import CountdownTimer from "./Components/Countdown/CountdownTimer";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Greetings from "./Components/Greeting/Greetings";
import Gallery from "./Components/Gallery/Gallery";
import "./App.css";
function App() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <div>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      <Home />
      <Greetings />
      <Gallery />
      <Footer />
    </div>
  );
}
export default App;

import React from "react";
import { useState } from "react";

function Header() {
  var [time, setTime] = useState(
    new Date().toLocaleTimeString().substring(0, 8)
  );

  setInterval(() => {
    setTime(new Date().toLocaleTimeString().substring(0, 8));
  }, 1000);

  return (
    <header>
      <h1>
        Types of programmers <span className="time">{time}</span>
      </h1>
    </header>
  );
}

export default Header;

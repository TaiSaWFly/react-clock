import React from "react";
import { useState, useEffect } from "react";
import * as utils from "../utils/utils";

const Clock = () => {
  // const body = document.querySelector("body");
  // body.style.background = utils.randomColor();

  const [date, setDate] = useState({
    day: utils.parseDay(new Date().getDay()),
    hours: utils.parseStr(new Date().getHours()),
    minutes: utils.parseStr(new Date().getMinutes()),
    seconds: utils.parseStr(new Date().getSeconds()),
  });

  useEffect(() => {
    apdateDate();
  }, [date]);

  const apdateDate = () => {
    setInterval(() => {
      const newDate = {
        day: utils.parseDay(new Date().getDay()),
        hours: utils.parseStr(new Date().getHours()),
        minutes: utils.parseStr(new Date().getMinutes()),
        seconds: utils.parseStr(new Date().getSeconds()),
      };
      setDate(newDate);
    }, 1000);
  };

  return (
    <div className="conteiner">
      <div className="clock">
        <div className="clock-item">
          {Object.keys(date).map((item) => (
            <div key={item} className="item">
              <div className="title-item">{date[item]}</div>
              <div className="title-description">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clock;

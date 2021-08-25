import { useEffect, useState } from 'react';
import { days, months } from './data/time';
import scale from './lib/scale';
import './App.scss';

function App() {
  const [time, setTime] = useState({});

  useEffect(() => {
    setDateAndTime();

    setInterval(setDateAndTime, 1000);
  }, []);

  const setDateAndTime = () => {
    setTime({
      month: new Date().getMonth(),
      day: new Date().getDay(),
      date: new Date().getDate(),
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
    });
  };

  const hoursForClock = time.hours % 12;
  const zeroAddedMinutes =
    time.minutes < 10 ? `0${time.minutes}` : time.minutes;
  const ampm = time.hours <= 12 ? 'AM' : 'PM';

  return (
    <div className="App">
      <button className="toggle">Dark mode</button>
      <div className="clock-container">
        <div className="clock">
          <div
            className="needle hour"
            style={{
              transform: `translate(-50%,-100%) rotate(${scale(
                hoursForClock,
                0,
                11,
                0,
                360
              )}deg)`,
            }}
          />
          <div
            className="needle minute"
            style={{
              transform: `translate(-50%,-100%) rotate(${scale(
                time.minutes,
                0,
                59,
                0,
                360
              )}deg)`,
            }}
          />
          <div
            className="needle second"
            style={{
              transform: `translate(-50%,-100%) rotate(${scale(
                time.seconds,
                0,
                59,
                0,
                360
              )}deg)`,
            }}
          />
          <div className="center-point" />
        </div>
        <div className="time">
          {hoursForClock}:{zeroAddedMinutes} {ampm}
        </div>
        <div className="date">
          {days[time.day]}, {months[time.month]}{' '}
          <span className="circle">{time.date}</span>
        </div>
      </div>
    </div>
  );
}

export default App;

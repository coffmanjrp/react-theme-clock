import './App.scss';

function App() {
  return (
    <div className="App">
      <button className="toggle">Dark mode</button>
      <div className="clock-container">
        <div className="clock">
          <div className="needle hour"></div>
          <div className="needle minute"></div>
          <div className="needle second"></div>
          <div className="center-point"></div>
        </div>
        <div className="time"></div>
        <div className="date"></div>
      </div>
    </div>
  );
}

export default App;

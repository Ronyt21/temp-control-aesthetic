import "./styles.css";
import { useState } from "react";

export default function App() {
  let [temprature, setTemprature] = useState(25);
  let [red, setRed] = useState(232);
  let [blue, setBlue] = useState(15);
  let baseRed = 107,
    baseBlue = 255;
  return (
    <div
      className="App"
      style={{ background: "rgb(" + red + ",195," + blue + ")" }}
    >
      <div className="container">
        <div className="card text-center mb-3" style={{ border: "none" }}>
          <div
            className="card-body r-card-body"
            style={{ background: "rgb(" + red + ",195," + blue + ")" }}
          >
            <h5 className="card-title">Control Your Temprature </h5>
            <p className="card-text r-text">{temprature}°c</p>

            <input
              type="range"
              className="form-range"
              value={temprature}
              onChange={(e) => {
                setTemprature(Number(e.target.value));
                setRed(baseRed + e.target.value * 5);
                setBlue(baseBlue - e.target.value * 9);
              }}
              min="0"
              max="30"
              id="customRange2 "
            />
            <button
              href="#"
              className="btn btn-primary r-cold-btn"
              onClick={() => {
                if (temprature > 0) {
                  setRed(red - 5);
                  setBlue(blue + 9);
                  setTemprature(temprature - 1);
                }
              }}
            >
              -
            </button>
            <button
              href="#"
              className="btn btn-primary r-warm-btn"
              onClick={() => {
                if (temprature < 30) {
                  setRed(red + 5);
                  setBlue(blue - 9);
                  setTemprature(temprature + 1);
                }
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

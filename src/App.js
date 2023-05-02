import "./App.css";
import React from "react";
import { useState } from "react";
import { HiUser } from "react-icons/hi";

function App() {
  const [bill, setBill] = useState("");
  const [nosPeople, setNosPeople] = useState("");

  //setting bill value
  const billValue = (event) => {
    setBill(event.target.value);
  };

  // setting number of people
  const numberOfPeople = (event) => {
    setNosPeople(event.target.value);
  };

  return (
    <div className="App">
      <div>
        <div className="tittle">
          <h1>SPLI</h1>
          <h1>TTER</h1>
        </div>
        <div className="whole-calc">
          <div>
            <h2>Bill</h2>
            <form>
              <div className="bill-input">
                <input
                  placeholder="0"
                  type="number"
                  value={bill}
                  onChange={billValue}
                  className="input-field input-field-1"
                />
                <p className="top-input-fake-placeholder">$</p>
              </div>
            </form>
            <div className="tips-section">
              <h2>Select Tip %</h2>
              <div className="btn-discounts">
                <button className="tip-btn">5%</button>
                <button className="tip-btn">10%</button>
                <button className="tip-btn">15%</button>
                <button className="tip-btn">25%</button>
                <button className="tip-btn">50%</button>
                <button className="tip-btn custom-btn">Custom</button>
              </div>
            </div>
            <h2>Number of People</h2>

            <form>
              <div className="bill-input">
                <input
                  placeholder="0"
                  type="number"
                  value={nosPeople}
                  onChange={numberOfPeople}
                  className="input-field field-2"
                />
                <p className="top-input-fake-placeholder">
                  <HiUser />
                </p>
              </div>
            </form>
          </div>
          <div className="calc-right">
            <div>
              <div className="tipping tip-space">
                <div className="tip-amount">
                  <h2>Tip Amount</h2>
                  <p>/ person</p>
                </div>
                <p className="fig-amounts">$0.00</p>
              </div>
              <div className="tipping">
                <div className="tip-amount">
                  <h2>Total</h2>
                  <p>/ person</p>
                </div>
                <p className="fig-amounts">$0.00</p>
              </div>
            </div>
            <button className="btn-reset">RESET</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

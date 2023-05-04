import "./App.css";
import React from "react";
import { useState } from "react";
import { HiUser } from "react-icons/hi";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

function App() {
  // states

  const [bill, setBill] = useState("");
  const [nosPeople, setNosPeople] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [activebtn, setActiveBtn] = useState(false);

  ////////////////////dynamic buttons//////////////////////////////
  const buttons = [
    { id: 1, text: 5 },
    { id: 2, text: 10 },
    { id: 3, text: 15 },
    { id: 4, text: 25 },
    { id: 5, text: 50 },
  ];

  //when a button is clicked and is active

  const [clickedBtnId, setClickedBtnId] = useState(null);

  //when a button is clicked and is active
  const btnclick = (id) => {
    setClickedBtnId(id);
  };
  const workingButtons = buttons.map((BTN) => {
    const BTNText = BTN.text;

    return (
      <button
        onClick={() => btnclick(BTN.id)}
        key={BTN.id}
        //when a button is clicked and is active
        className={BTN.id === clickedBtnId ? "active-btn" : "tip-btn"}
      >
        {BTNText}%
      </button>
    );
  });

  /////////////////////Form validations/////////////////////////////

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form1Submit = (data) => {
    console.log(data);
    console.log("form1");
  };

  //setting bill value
  const billValue = (event) => {
    setBill(event.target.value);
  };

  // setting number of people
  const numberOfPeople = (event) => {
    setNosPeople(event.target.value);
  };

  //setting custom tip
  const customingTip = (event) => {
    setCustomTip(event.target.value);
  };

  // const btnclick1 = () => {
  //   console.log("clicked 1 ");
  //   const clickedButton = document.querySelector(".btn-1");
  //   clickedButton.classList.toggle("active-btn");
  // };
  // const btnclick2 = () => {
  //   console.log("clicked 2 ");
  //   const clickedButton = document.querySelector(".btn-2");
  //   clickedButton.classList.toggle("active-btn");
  // };
  // const btnclick3 = () => {
  //   console.log("clicked 3 ");
  //   const clickedButton = document.querySelector(".btn-3");
  //   clickedButton.classList.toggle("active-btn");
  // };
  // const btnclick4 = () => {
  //   console.log("clicked 4 ");
  //   const clickedButton = document.querySelector(".btn-4");
  //   clickedButton.classList.toggle("active-btn");
  // };
  // const btnclick5 = () => {
  //   console.log("clicked 5 ");
  //   const clickedButton = document.querySelector(".btn-5");
  //   clickedButton.classList.toggle("active-btn");
  // };

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
            <form onSubmit={handleSubmit(form1Submit)}>
              <div className="bill-input">
                <input
                  {...register("billValue")}
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
                {workingButtons}

                <div>
                  <input
                    className="input-field custom-btn"
                    placeholder="Custom"
                    onChange={customingTip}
                  />
                </div>
              </div>
            </div>
            <h2>Number of People</h2>

            <form onSubmit={handleSubmit(form1Submit)}>
              <div className="bill-input">
                <input
                  {...register("peopleNum")}
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

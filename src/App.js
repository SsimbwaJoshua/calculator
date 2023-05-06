import "./App.css";
import React from "react";
import { useState } from "react";
import { HiUser } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function App() {
  // states

  const [bill, setBill] = useState("");
  const [nosPeople, setNosPeople] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [generalTipAmount, setGeneralTipAmount] = useState("0.00");
  const [totalPerPerson, setTotalPerperson] = useState("0.00");

  ////////////////////dynamic buttons//////////////////////////////
  const buttons = [
    { id: 1, text: 5, percentage: 0.05 },
    { id: 2, text: 10, percentage: 0.1 },
    { id: 3, text: 15, percentage: 0.15 },
    { id: 4, text: 25, percentage: 0.25 },
    { id: 5, text: 50, percentage: 0.5 },
  ];

  //when a button is clicked and is active

  const [clickedBtnId, setClickedBtnId] = useState(null);

  //when a button is clicked and is active
  const btnclick = (id, percentage) => {
    setClickedBtnId(id);

    // Tip amount
    const tipAmount = bill * percentage;

    //tip Amount per person
    const tipPerPerson = (tipAmount / nosPeople).toFixed(1);
    setGeneralTipAmount(tipPerPerson);

    //total per person

    const totalPaid = +bill + +tipAmount;
    const totalPaidPersonally = (totalPaid / nosPeople).toFixed(1);
    setTotalPerperson(totalPaidPersonally);
  };
  const workingButtons = buttons.map((BTN) => {
    const BTNText = BTN.text;

    return (
      <button
        onClick={() => btnclick(BTN.id, BTN.percentage)}
        key={BTN.id}
        //when a button is clicked and is active
        className={BTN.id === clickedBtnId ? "active-btn" : "tip-btn"}
      >
        {BTNText}%
      </button>
    );
  });

  //////////////////////Form validations//////////////////////////////////

  const schema = Yup.object().shape({
    billValue: Yup.number().positive().required("please enter amount"),
    peopleNum: Yup.number()
      .positive()
      .integer()
      .min(1)
      .required("Can't be zero"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const form1Submit = (data) => {
    console.log(data);
    console.log("form1");
  };

  ///////////////////////////////////////////////////////////////////////////
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

  //////////////////////////////////////////////////////////////////

  //customFormSubmit
  const customFormSubmit = (event) => {
    event.preventDefault();
    setClickedBtnId(null);

    const custPercent = customTip / 100;

    // Tip amount
    const tipAmount = bill * custPercent;

    //tip Amount per person
    const tipPerPerson = (tipAmount / nosPeople).toFixed(1);
    setGeneralTipAmount(tipPerPerson);

    //total per person

    const totalPaid = +bill + +tipAmount;
    const totalPaidPersonally = (totalPaid / nosPeople).toFixed(1);
    setTotalPerperson(totalPaidPersonally);

    //resting the input filed
  };

  /////////////////////////////////////////////////////////////////////////

  // reset everything
  const reset = () => {
    setBill("");
    setNosPeople("");
    setCustomTip("");
    setGeneralTipAmount("0.00");
    setTotalPerperson("0.00");
    setClickedBtnId(null);
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
            <form onSubmit={handleSubmit(form1Submit)}>
              {/* <p>{errors.billValue?.message}</p> */}
              <div className="bill-input">
                <input
                  {...register("billValue")}
                  placeholder="0"
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
                  <form onSubmit={customFormSubmit}>
                    <input
                      value={customTip}
                      className="input-field custom-btn"
                      placeholder="Custom"
                      onChange={customingTip}
                      type="number"
                    />
                  </form>
                </div>
              </div>
            </div>
            <h2>Number of People</h2>

            <form onSubmit={handleSubmit(form1Submit)}>
              <div className="bill-input">
                {/* <p>{errors.peopleNum?.message}</p> */}
                <input
                  {...register("peopleNum")}
                  placeholder="0"
                  value={nosPeople}
                  onChange={numberOfPeople}
                  className="input-field field-2"
                  required
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
                <p className="fig-amounts">${generalTipAmount}</p>
              </div>
              <div className="tipping">
                <div className="tip-amount">
                  <h2>Total</h2>
                  <p>/ person</p>
                </div>
                <p className="fig-amounts">${totalPerPerson}</p>
              </div>
            </div>
            <button
              className={totalPerPerson === "0.00" ? "btn-reset" : "active-btn"}
              onClick={reset}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

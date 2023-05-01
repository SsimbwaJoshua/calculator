import "./App.css";

function App() {
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
              <input placeholder="$" className="input-field" />
            </form>
            <h2>select Tip %</h2>
            <div>
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>25%</button>
              <button>50%</button>
              <button>Custom</button>
            </div>
            <form>
              <input placeholder="##" className="input-field" />
            </form>
          </div>
          <div>
            <div>
              <div>
                <h2>Tip Amount</h2>
                <p>/ person</p>
              </div>
              <p>$ 0.00</p>
            </div>
            <div>
              <div>
                <h2>Total</h2>
                <p>/ person</p>
              </div>
              <p>$ 0.00</p>
            </div>
            <button>RESET</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

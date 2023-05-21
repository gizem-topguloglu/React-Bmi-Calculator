import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");


  const calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter weight and height.");
    } else {
      const calculatedBmi = weight / ((height / 100) * (height / 100));
      setBmi(calculatedBmi.toFixed());

      if (calculatedBmi <= 18) {
        setMessage("Underweight.");
      } else if (calculatedBmi <= 25) {
        setMessage("Healthy weight");
      } else if (calculatedBmi <= 30) {
        setMessage("Overweight");
      } else {
        setMessage("Obesity");
      } 
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (cm)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="button" onClick={reload}>
              Delete
            </button>
          </div>
        </form>
        <div className="center">
          <h3>YOUR BMI IS: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

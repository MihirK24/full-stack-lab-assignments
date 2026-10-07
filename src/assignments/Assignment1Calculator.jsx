import { useState } from "react";

function Assignment1Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  // JavaScript functions for arithmetic operations
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  function calculate() {
    const a = Number(num1);
    const b = Number(num2);

    // Check for valid numbers
    if (num1 === "" || num2 === "") {
      setResult("Please enter both numbers.");
      return;
    }

    // Switch statement to select the operation
    switch (operator) {
      case "+":
        setResult(add(a, b));
        break;

      case "-":
        setResult(subtract(a, b));
        break;

      case "*":
        setResult(multiply(a, b));
        break;

      case "/":
        if (b === 0) {
          setResult("Cannot divide by zero.");
        } else {
          setResult(divide(a, b));
        }
        break;

      default:
        setResult("Invalid operation.");
    }
  }

  function clearCalculator() {
    setNum1("");
    setNum2("");
    setOperator("+");
    setResult("");
  }

  return (
    <div className="assignment-container">
      <h2>Assignment 1: JavaScript Calculator</h2>

      <p className="assignment-description">
        Calculator using JavaScript functions and a switch statement
        for basic arithmetic operations.
      </p>

      <div className="calculator">
        <div className="input-group">
          <label>First Number</label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
          />
        </div>

        <div className="input-group">
          <label>Operation</label>
          <select
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
          >
            <option value="+">Addition (+)</option>
            <option value="-">Subtraction (-)</option>
            <option value="*">Multiplication (×)</option>
            <option value="/">Division (÷)</option>
          </select>
        </div>

        <div className="input-group">
          <label>Second Number</label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
          />
        </div>

        <div className="button-group">
          <button onClick={calculate}>Calculate</button>
          <button onClick={clearCalculator} className="clear-button">
            Clear
          </button>
        </div>

        <div className="result-box">
          <strong>Result:</strong>{" "}
          {result === "" ? "—" : result}
        </div>
      </div>
    </div>
  );
}

export default Assignment1Calculator;
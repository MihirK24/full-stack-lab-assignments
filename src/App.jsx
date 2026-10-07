import { useState } from "react";
import "./App.css";

import LabDashboard from "./LabDashboard";

import Assignment1Calculator from "./assignments/Assignment1Calculator";
import Assignment2Todo from "./assignments/Assignment2Todo";
import Assignment3Validation from "./assignments/Assignment3Validation";
import Assignment4Profile from "./assignments/Assignment4Profile";
import Assignment5ControlledForm from "./assignments/Assignment5ControlledForm";
import Assignment6Counter from "./assignments/Assignment6Counter";

function App() {
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  function openAssignment(id) {
    setSelectedAssignment(id);
  }

  function goBack() {
    setSelectedAssignment(null);
  }

  if (selectedAssignment === null) {
    return <LabDashboard onSelectAssignment={openAssignment} />;
  }

  return (
    <div className="assignment-page">
      <button className="back-button" onClick={goBack}>
        ← Back to Assignments
      </button>

      {selectedAssignment === 1 && <Assignment1Calculator />}

      {selectedAssignment === 2 && <Assignment2Todo />}

      {selectedAssignment === 3 && <Assignment3Validation />}

      {selectedAssignment === 4 && <Assignment4Profile />}

      {selectedAssignment === 5 && <Assignment5ControlledForm />}

      {selectedAssignment === 6 && <Assignment6Counter />}
    </div>
  );
}

export default App;
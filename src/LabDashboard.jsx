function LabDashboard({ onSelectAssignment }) {
  const assignments = [
    {
      id: 1,
      title: "JavaScript Calculator",
      description:
        "Basic arithmetic operations using JavaScript functions.",
    },
    {
      id: 2,
      title: "DOM-based To-Do List",
      description:
        "Add, complete and delete tasks dynamically.",
    },
    {
      id: 3,
      title: "JavaScript Form Validation",
      description:
        "Validate name, email, phone and password.",
    },
    {
      id: 4,
      title: "React Profile Card",
      description:
        "Display profile information using React Props.",
    },
    {
      id: 5,
      title: "Controlled React Form",
      description:
        "Display user input in real time using React state.",
    },
    {
      id: 6,
      title: "React Counter App",
      description:
        "Increment, decrement and reset using useState.",
    },
  ];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Full Stack Development Lab</h1>

          <p>React + Vite | Assignments 1–6</p>
        </div>
      </header>

      <main className="assignment-section">
        <div className="section-title">
          <span>LAB WORK</span>
          <h2>Assignments</h2>
          <p>
            Select an assignment to view and run the practical.
          </p>
        </div>

        <div className="assignment-grid">
          {assignments.map((assignment) => (
            <div
              className="assignment-card"
              key={assignment.id}
            >
              <div className="assignment-number">
                0{assignment.id}
              </div>

              <h2>{assignment.title}</h2>

              <p>{assignment.description}</p>

              <button
                onClick={() =>
                  onSelectAssignment(assignment.id)
                }
              >
                Open Assignment →
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="dashboard-footer">
        <span>React + Vite</span>
        <span>Full Stack Development Lab</span>
        <span>Assignments 01–06</span>
      </footer>
    </div>
  );
}

export default LabDashboard;
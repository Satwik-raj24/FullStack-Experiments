import Student from "./models/Student";
import Teacher from "./models/Teacher";

function App() {
  // Creating class instances
  const people = [
    new Student("Satwik", 19, "Computer Science"),
    new Teacher("Kundan", 45, "Data Structures"),
    new Student("Nani", 20, "AI & ML"),
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h1>OOP in React – Inheritance & Polymorphism</h1>

      {people.map((person, index) => (
        <div
          key={index}
          style={{
            marginBottom: "15px",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <h3>Role: {person.getRole()}</h3>
          <p>{person.getDetails()}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form style={styles.formStyle}>
        <h3 style={styles.heading}>Sign Up</h3>
        <input style={styles.inputStyle} placeholder="Username" />
        <input style={styles.inputStyle} placeholder="Email" />
        <input style={styles.inputStyle} placeholder="Password" />
        <div style={styles.divStyle}>
          <button style={styles.buttons}>Cancel</button>
          <button style={styles.buttons}>Login</button>
        </div>
      </form>
    </div>
  );
}
const styles = {
  formStyle: {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  heading: {
    fontSize: "2rem",
    letterSpacing: 2
  },
  inputStyle: {
    padding: 10
  },
  divStyle: {
    display: "flex",
    justifyContent: "center",
    gap: 20
  },
  buttons: {
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }
}
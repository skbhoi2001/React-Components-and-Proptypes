import React from "react";
import InputBoxes from "./Components/InputBoxes";
import "./styles.css";

export default function App() {
  const [value, setValue] = React.useState("");
  return (
    <>
      <div className="App">
        <InputBoxes length={4} perBox={4} label={"debit card number"} onChange={(val) => setValue(val)} />
      </div>
    </>
  );
}

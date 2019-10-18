import React, { useState } from "react";
import Redux from "./Redux";

function App() {
  const [active, setActive] = useState();
  return (
    <div className="app">
      <h1>No Lib</h1>
      <p>
        Just a personal implementation of common React libraries....without the
        actual libraries
      </p>
      <br />
      <h2>React Redux</h2>
      <button onClick={() => setActive("Redux")}>Display Redux</button>
      <div className="active">{active === "Redux" && <Redux />}</div>
    </div>
  );
}

export default App;

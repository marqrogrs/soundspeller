import React from "react";
import "./App.css";

import HOC from "./components/layout/HOC";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <HOC />
      </div>
    </React.Fragment>
  );
}

export default App;

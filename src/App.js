import React from "react";
import Bucky from "./Bucky";
import Counter from "./Counter";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Counter count={10} />
      </div>
    </div>
  );
}

export default App;

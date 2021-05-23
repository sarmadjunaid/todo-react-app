import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  function increment() {
    count < props.count ? setCount(count + 1) : alert("max glass reached");
  }

  function decrement() {
    count > 0 ? setCount(count - 1) : alert("cannot be negative");
  }

  return (
    <div>
      <p>
        Today i will Drink {props.count} glass of water
        <button className="btn btn-primary" onClick={increment}>
          :thumbsup
        </button>
        <button className="btn btn-danger" onClick={decrement}>
          :thumbsdown
        </button>
      </p>
      <p>I have drink {count} </p>
      <div className="progress">
        <div className="progress-bar" style={{ width: count * 10 + "%" }}>
          Remaing Glass {props.count - count}
        </div>
      </div>
    </div>
  );
}

export default Counter;

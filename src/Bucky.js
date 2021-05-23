import React from "react";

function Bucky(props) {
  return (
    <div>
      <h3>
        The sum of {props.num1} and {props.num2} = {props.num1 + props.num2}
      </h3>
    </div>
  );
}

export default Bucky;

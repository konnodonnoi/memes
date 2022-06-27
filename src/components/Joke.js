import React from "react";

const Joke = (props) => {
  return (
    <div>
      {props.number}
      <h3>{props.setup} (drumrolls)...</h3>
      <p>{props.punchline}</p>
      <hr></hr>
    </div>
  );
};

export default Joke;

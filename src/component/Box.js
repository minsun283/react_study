import React from "react";

const Box = (props) => {
  let result;
  if (
    props.title === "컴퓨터" &&
    props.result !== "" &&
    props.result !== "TIE"
  ) {
    result = props.result == "WIN" ? "LOSE" : "WIN";
  } else {
    result = props.result;
  }


  return (
    <div className = {`box-deco ${result}`}>
      <h3>{props.title}</h3>
      <img
        className="img-size" src={props.item && props.item.img}
      ></img>
      <h3>{result}</h3>
    </div>
  );
};

export default Box;

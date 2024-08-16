import React, { Component } from "react";

export default class BoxClass extends Component {
  constructor() {
    super();
    this.result = "";
     
    }

    getResult =()=>{
    if (
        this.props.title === "컴퓨터" &&
        this.props.result !== "" &&
        this.props.result !== "TIE"
    ) {
      this.result = this.props.result == "WIN" ? "LOSE" : "WIN";
    } else {
        this.result = this.props.result;
    }
  }
  
  render() {
    this.getResult()
    return (
      <div className={`box-deco ${this.result}`}>
        <h3>{this.props.title}</h3>
        <img className="img-size" src={this.props.item && this.props.item.img}></img>
        <h3>{this.result}</h3>
      </div>
    );
  }
}

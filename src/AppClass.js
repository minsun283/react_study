import React, { Component } from 'react'
import "./App.css";
import BoxClass from "./component/BoxClass";



const choice = {
    rock :{
      name:"Rock",
      img :"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg"
    },
    scissors :{
      name:"Scissors",
      img :"https://cafe24.poxo.com/ec01/bibon1/jy78sT5iv9X+V5IHQBaKwrjoUZw7/nGXjx58SNFF4bK6NrHp9v6yW73e7/DyTNtncYBJmFI45IbmtzNo91A3rQ==/_/web/product/big/202101/833fa88eae073a583699cc737f0b8a91.jpg"
    
    },
    paper:{
      name:"Paper",
      img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfAj6mQwx4OrtR0e6cO9VGfDHSBN900tkOaw&usqp=CAU"
    }
    }

    

export default class AppClass extends Component {

    constructor(){
        super();
        this.state ={
            userSelect:null,
            comSelect:null,
            gameResult:""
        }
    }

    play=(pick)=>{
        let comChoice=this.computerPick()
        this.setState({
            userSelect:choice[pick],
            comSelect:comChoice,
            gameResult:this.judgment(choice[pick],comChoice)

        })
        
      }

    
computerPick=()=>{
    let arrayGame = Object.keys(choice);
    let randomNum = Math.floor(Math.random() * arrayGame.length);
    let final = arrayGame[randomNum]; 
    return choice[final]; 
  }
  
  
  judgment=(a,b)=>{
    if(a.name == b.name){
      return "TIE";
    }else if (a.name=="Rock") return b.name =="Scissors" ? "WIN" : "LOSE";
    else if (a.name=="Paper") return b.name =="Rock" ? "WIN" : "LOSE";
    else if (a.name=="Scissors") return b.name =="Paper" ? "WIN" : "LOSE"
  
  }
  
  render() {
    return (
        <div className="main"><div className="box-two">
        <BoxClass title="컴퓨터" item={this.state.comSelect} result={this.state.gameResult}/>
        <BoxClass title="나" item={this.state.userSelect} result={this.state.gameResult}/>
        </div>
      
        <button onClick={()=>this.play("scissors")}>가위</button>
        <button onClick={()=>this.play("rock")}>바위</button>
        <button onClick={()=>this.play("paper")}>보</button>
        </div>
    )
  }
}

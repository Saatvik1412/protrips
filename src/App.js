import './App.css';
import React, { createElement } from 'react'


class FoodBox extends React.Component {

  constructor() {
    super()
    this.state = {
      "apple": 0,
      "orange": 0,
      "noodles": 0,
      "pizza": 0,
      "chocolate": 0,

      "appleC": 100,
      "orangeC": 160,
      "noodlesC": 300,
      "pizzaC": 400,
      "chocolateC": 200,

      foodList : ["apple", "orange", "pizza", "chocolate", "noodles"],
      searchTerm : "",
      "totalCalories" : 0
  }
}

  addQtyAndCal(name, cal, val){
    val = parseInt(val)
    cal = parseInt(cal)
    this.setState({[name]: parseInt(this.state[name])+val})
    cal = cal*val
    this.setState({totalCalories: parseInt(this.state.totalCalories)+cal})
  }

  deleteThis(foodname){
    let foodCal = foodname+"C"
    this.setState({totalCalories: parseInt(this.state.totalCalories)-parseInt(this.state[foodCal])*parseInt(this.state[foodname])})
    this.setState({[foodname] : 0})
  }

  foodObject = {
    "apple": 
          <div className="box">
            <div className="image">
              <img src="https://freepngimg.com/thumb/apple/8-2-apple-fruit-transparent.png" height="100" width="100" />
            </div>
          <div className="info">
            <p>Apple<br/>
              100 cal
            </p>
          </div>
          <div className="quantity">
            <input className="input" id='apple' type="number" defaultValue="1"/>
            <button className="button" onClick={() => this.addQtyAndCal("apple", 100, document.querySelector("#apple").value)}>+</button>
          </div>
        </div>,

    "orange": 
            <div className="box">
              <div className="image">
                <img src="https://cdn.pixabay.com/photo/2016/02/23/17/42/orange-1218158_1280.png" height="80" width="80" />
              </div>
              <div className="info">
                <p>Orange<br/>
                  160 cal
                </p>
              </div>
              <div className="quantity">
              <input className="input" type="number" defaultValue="1"  id="orange"/>
              <button className="button" onClick={() => this.addQtyAndCal("orange", 160, document.querySelector("#orange").value)}>+</button>
              </div>
            </div>,
    "pizza":
          <div className="box">
                <div className="image">
                  <img src="https://i.imgur.com/eTmWoAN.png" height="100" width="100" />
                </div>
                <div className="info">
                  <p>Pizza<br/>
                    400 cal
                  </p>
                </div>
                <div className="quantity">
                  <input className="input" type="number" defaultValue="1" id="pizza"/>
                  <button className="button" onClick={() => this.addQtyAndCal("pizza", 400, document.querySelector("#pizza").value)}>+</button>
                </div>
              </div>,
    "chocolate":
              <div className="box">
              <div className="image">
                <img src="https://www.freeiconspng.com/thumbs/chocolate-png/chocolate-png-31.png" height="100" width="100" />
              </div>
              <div className="info">
                <p>Chocolate<br/>
                  200 cal
                </p>
              </div>
              <div className="quantity">
                <input className="input" type="number" defaultValue="1" id="chocolate"/>
                <button className="button" onClick={() => this.addQtyAndCal("chocolate", 200, document.querySelector("#chocolate").value)}>+</button>
              </div>
            </div>,

    "noodles":
          <div className="box">
                <div className="image">
                  <img src="https://www.pngall.com/wp-content/uploads/5/Noodles-PNG-Image.png" height="110" width="110" />
                </div>
                <div className="info">
                  <p>Noodles<br/>
                    300 cal
                  </p>
                </div>
                <div className="quantity">
                  <input className="input" type="number" defaultValue="1"  id="noodles"/>
                  <button className="button" onClick={() => this.addQtyAndCal("noodles", 300, document.querySelector("#noodles").value)}>+</button>
                </div>
              </div>
  }

  DynamicSearch = (str) => {
    return this.state.foodList.filter(ele => ele.toLowerCase().includes(str.toLowerCase()))
  }

  render() {
    let found = []
    found = this.DynamicSearch(this.state.searchTerm)
  console.log(this.state)
    return <>

  <div className="parent">
    <div>
        <input type="text" className="search" placeholder="Enter food" onChange={(e) => {this.setState({searchTerm: e.target.value}) } } />
    {found.map(ele => (
        this.foodObject[ele]
      ))}
    </div>

    <div>
    <h2>Today's Food</h2>
    <span>{this.state.totalCalories}</span> Cal
      {
      this.state.foodList.map(ele =>{
        let calories = ele + "C"
        if(parseInt(this.state[ele])>0)
        return <div>{this.state[ele]} {ele} {parseInt(this.state[calories])*parseInt(this.state[ele])} <button onClick={()=>this.deleteThis(ele)}>X</button></div>
      }
      )
    }
    </div>  
  </div>
    </>
  }
  }

export default FoodBox;


// let visible = this.found.reduce(function(res, current){return res+current})

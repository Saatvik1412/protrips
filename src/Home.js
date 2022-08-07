import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      tripsArr: JSON.parse(localStorage.getItem("tripList")) === null ? [] : JSON.parse(localStorage.getItem("tripList"))
    }
  }

  counting(arr) {
    let count = 0
    for (let e of arr) {
      if (e.type === "Tropic")
        count++
    }
    return count;
  }

  render() {
    let typeArr = this.state.tripsArr.map(ele => ele.type)
    return <>
      <div className='parent'>
        <div className='totalTrips'><span>Total: </span>{(this.state.tripsArr).length}</div>
        <div className='tripDetails'>

          <div>
          <span>Tropic: </span>
          {
            typeArr.reduce((total, ele) => {
              if (ele === "Tropic")
                total++
              return total
            }, 0)
          }
          </div>

          <div>
          <span>Trek: </span>
          {
            typeArr.reduce((total, ele) => {
              if (ele === "Trek")
                total++
              return total
            }, 0)
          }
          </div>

          <div>
          <span>Club: </span>
          {
            typeArr.reduce((total, ele) => {
              if (ele === "Club")
                total++
              return total
            }, 0)
          }
          </div>

        </div>
      </div>
      <div className='links'>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/add">Add</Link></div>
        <div><Link to="/list">Trips</Link></div>
      </div>
    </>
  }
}

export default Home;
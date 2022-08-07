import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class ListTrip extends React.Component {
    constructor() {
        super()
        this.state = {
            tripsArr: JSON.parse(localStorage.getItem("tripList")) === null ? [] : JSON.parse(localStorage.getItem("tripList")),
            title: "All Trips",
            list: JSON.parse(localStorage.getItem("tripList")) === null ? [] : JSON.parse(localStorage.getItem("tripList")).map(ele => {
                return <>
                    <div>{ele.date}</div>
                    <div>{ele.place}</div>
                    <div>{ele.type}</div>
                </>
            }
            )
        }
    }

    filterTrips(type) {
        if (type === "All")
            this.setState({
                title: type + " Trips",
                list: this.state.tripsArr.map(ele =>
                    <>
                        <div>{ele.date}</div>
                        <div>{ele.place}</div>
                        <div>{ele.type}</div>
                    </>
                )
            })
        else 
            this.setState({
            title: type + " Trips",
            list: this.state.tripsArr.map(ele => {
                if (ele.type === type)
                    return <>
                        <div>{ele.date}</div>
                        <div>{ele.place}</div>
                        <div>{ele.type}</div>
                    </>
            })
        })
    }

    render() {
        console.log(this.state.tripsArr)
        return <>
            <div className='parent'>
                <div className='Header'>{this.state.title}</div>
                <div className='tripList'>
                    <div>Date</div>
                    <div>Place</div>
                    <div>Type</div>
                    {
                        this.state.list
                        // this.state.tripsArr.map(ele => {
                        //     return <>
                        //         <div>{ele.date}</div>
                        //         <div>{ele.place}</div>
                        //         <div>{ele.type}</div>
                        //     </>
                        // }
                        // )
                    }
                </div>
                <div className='radioButtons' onChange={(e) => this.filterTrips(e.target.value)}>
                    <span>Filter By &emsp;</span>
                    <input type="radio" value="Tropic" name="type" /> Tropic
                    <input type="radio" value="Trek" name="type" /> Trek
                    <input type="radio" value="Club" name="type" /> Club
                    <input type="radio" value="All" name="type" /> None
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

export default ListTrip;
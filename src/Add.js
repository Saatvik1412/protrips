import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class AddTrip extends React.Component {
    constructor() {
        super()
        this.state = {
            // currentTrip : 
            // {
            date: "",
            place: "",
            type: "",
            // },

            tripsArr: JSON.parse(localStorage.getItem("tripList")) === null ? [] : JSON.parse(localStorage.getItem("tripList"))
        }
    }

    submitInfo(date, place, type) {
        let TripObj = {
            date: date,
            place: place,
            type: type
        }
        this.setState(prevState => ({
            tripsArr: [...prevState.tripsArr, TripObj],
            date: "",
            place: "",
            type: "Trek"
        }))
        // localStorage.setItem("tripList", JSON.stringify(this.state.tripsArr));
        // this.setState({
        //     date: "",
        //     place: "",
        //     type: "Trek"
        // })
    }

    render() {
        // console.log(Array.isArray(this.state.tripsArr))
        // console.log(this.state);
        // JSON.stringify() and JSON.parse() to convert Arrays to String and vice versa.
        localStorage.setItem("tripList", JSON.stringify(this.state.tripsArr));

        return <>
            <div className='parent'>
                <div className='Header'>Add a trip</div>
                <div className='form'>
                    <div className='date'>
                        <div>Date</div>
                        <div><input type="date" id='date' value={this.state.date} onChange={(e) => this.setState({ date: e.target.value })}></input></div>
                    </div>
                    <div>
                        <div>Place</div>
                        <div><input type="text" id='place' value={this.state.place} onChange={(e) => this.setState({ place: e.target.value })}></input></div>
                    </div>
                    <div>
                        <div>Type</div>
                        <div>
                            <select id='type' value={this.state.type} onChange={(e) => this.setState({ type: e.target.value })}>
                                <option value="Trek">Trek</option>
                                <option value="Tropic">Tropic</option>
                                <option value="Club">Club</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => this.submitInfo(this.state.date, this.state.place, this.state.type)}>Submit</button>
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

export default AddTrip;
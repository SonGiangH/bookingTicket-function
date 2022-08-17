import React, { Component, Fragment } from 'react'
import './ExerciseBookingTicket.css'
import SeatInformation from './SeatInformation'
import dataSeat from '../data/danhSachGhe.json'
import RowTitle from './RowTitle'

export default class ExerciseBookingTicket extends Component {

    // Render list of seat
    renderSeatRow = () => {
        return (
            dataSeat.map((row, index) => {
                return (
                    <div key={index} >
                        <RowTitle row={row} rowNumber={index} />
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div style={{
                backgroundImage: 'url("http://SonGiangH.github.io/bookingTicket-function/img/bgmovieAvenger.png")', backgroundSize: "100%",
                width: "100%", height: "100%"
            }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.5', width: "100%", height: "100%", postion: "fixed" }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8">
                                <h1 className="text-light mt-3" style={{ marginLeft: '20%' }}>BOOKING MOVIE TICKET</h1>
                                <div className="mt-5 text-light" style={{ fontSize: 25, marginLeft: '35%' }}>Screen</div>
                                <div className='mt-2' style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                    <div className="screen"></div>
                                    {/* Render list of seat row */}
                                    {this.renderSeatRow()}
                                </div>
                            </div>
                            <div className="col-4">
                                <h3 className='text-light text-center'>Your Selected Seat</h3>
                                <SeatInformation />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

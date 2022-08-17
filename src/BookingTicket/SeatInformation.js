import React, { Component } from 'react'
import { connect } from 'react-redux'

class SeatInformation extends Component {

    // function render Seat information
    renderSeatInformation = () => {
        return (this.props.seatList.map((seat, index) => {
            return (
                <tr key={index} >
                    <th style={{ fontSize: 25, color: 'orange', fontWeight: 100 }}>{seat.soGhe}</th>
                    <th style={{ fontSize: 25, color: 'orange', fontWeight: 100 }}>{seat.gia.toLocaleString()}</th>
                    <th className='text-center' style={{ fontSize: 25, color: 'orange', fontWeight: 100 }}>
                        <button className='btn btn-danger' onClick={() => { this.props.removing(seat) }}>Cancel</button>
                    </th>
                </tr>
            )
        })
        )
    }

    // function calculate total price
    totalPriceCalculation = () => {
        return (
            this.props.seatList.reduce((total, seat) => {
                return total += seat.gia
            }, 0).toLocaleString()
        )
    }

    render() {
        return (
            <div>
                <div className="text-light d-flex flex-column mt-5">
                    <div className="btn-seat">
                        <button className='selectedSeat'></button>
                        <span style={{ fontSize: 20, paddingLeft: 10 }}>Selected Seat</span>
                    </div>
                    <div className="btn-seat">
                        <button className='processingSeat'></button>
                        <span style={{ fontSize: 20, paddingLeft: 10 }}>Processing Seat</span>
                    </div>
                    <div className="btn-seat">
                        <button className='seat' style={{ marginLeft: 0 }}></button>
                        <span style={{ fontSize: 20, paddingLeft: 10 }}>Empty Seat</span>
                    </div>
                </div>

                <div className="mt-5">
                    <table className='table table-bordered' border={{ borderColor: 'white' }}>
                        <thead>
                            <tr className='text-light' style={{ fontSize: 28 }}>
                                <th>Seat Number</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderSeatInformation()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td className='text-light' style={{ fontSize: 25 }}>
                                    Total Price</td>
                                <td className='text-light' style={{ fontSize: 25 }}>{this.totalPriceCalculation()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
        )
    }
}

// Get state data for render the seat number information
const mapStateToProps = (state) => {
    return {
        // props name 
        seatList: state.BookingTicketReducer.seatList
    }
}

// Set state for remove existing selected seat
const mapDispatchToProps = (dispatch) => {
    return {
        //props name
        removing: (seat) => {
            dispatch({
                type: 'REMOVE_SEAT',
                seat
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeatInformation)
import React, { Component } from 'react'
import { act } from 'react-dom/test-utils';
import { connect } from 'react-redux';

class RowTitle extends Component {

    // Render seat
    renderSeat = () => {

        return (
            this.props.row.danhSachGhe.map((seat, index) => {
                let cssSelectedSeat = '';
                let disabled = false;
                // Ghế đã đặt ( màu vàng)
                if (seat.daDat) {
                    cssSelectedSeat = 'selectedSeat'
                    disabled = true;
                }

                // Ghế đang đặt (màu xanh)
                let cssSeatProcessing = ''
                let indexSeatProcessing = this.props.seatList.findIndex(item => item.soGhe === seat.soGhe)
                if (indexSeatProcessing !== -1) {
                    cssSeatProcessing = 'processingSeat'
                }

                return (
                    <button key={index} disabled={disabled}
                        className={`seat ${cssSelectedSeat} ${cssSeatProcessing}`}
                        onClick={() => { this.props.booking(seat) }}>
                        {seat.soGhe}
                    </button>
                )
            })
        )
    }

    renderNumber = () => {
        return (this.props.row.danhSachGhe.map((row, index) => {
            return (
                <button className='rowNumber' key={index}>
                    {row.soGhe}
                </button>
            )
        })
        )
    }

    renderRow = () => {
        if (this.props.rowNumber === 0) {
            return (
                <div className="ms-4">
                    {this.props.row.hang} {this.renderNumber()}
                </div>
            )
        } else {
            return (
                <div>
                    {this.props.row.hang} {this.renderSeat()}
                </div>
            )
        }
    }

    render() {
        return (
            <div className='text-light text-start mt-4 ms-5' style={{ marginLeft: 30, fontSize: 30 }}>
                {this.renderRow()}
            </div>
        )
    }
}


// Láy giá trị state về để so sánh
const mapStateToProps = (state) => {
    return {
        seatList: state.BookingTicketReducer.seatList
    }
}

// Hàm thay đổi giá trị state khi click chọn ghế
const mapDispatchToProps = (dispatch) => {
    return {
        //props name booking
        booking: (seat) => {
            dispatch({
                type: 'BOOK_SEAT',
                seat
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RowTitle)
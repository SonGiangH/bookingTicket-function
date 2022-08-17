
const stateDefault = {
    seatList: [
        // { "soGhe": "A1", "gia": 1000 },
        // { "soGhe": "B2", "gia": 1000 },
        // { "soGhe": "C3", "gia": 1000 }
    ]
}

const BookingTicketReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'BOOK_SEAT': {
            let tempSeatList = [...state.seatList];
            let index = tempSeatList.findIndex(item => item.soGhe === action.seat.soGhe)
            if (index !== -1) {
                // khi người dùng click vô chọn, nếu tồn tại sẵn trong mảng (chọn rồi) thì remove ra khỏi mảng
                tempSeatList.splice(index, 1);
            } else {
                // nếu chưa có thì chọn, add vô mảng
                tempSeatList.push(action.seat)
            }

            // update state or setState, render lại giao diện
            state.seatList = tempSeatList;
            return { ...state }
        }

        case 'REMOVE_SEAT': {

            let tempSeatList = [...state.seatList];
            let index = tempSeatList.findIndex(item => item.soGhe === action.seat.soGhe)
            tempSeatList.splice(index, 1)

            state.seatList = tempSeatList;
            return { ...state }
        }
        default: return { ...state }
    }
}

export default BookingTicketReducer
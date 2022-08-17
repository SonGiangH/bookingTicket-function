import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import RollingDiceReducer from './RollingDiceReducer';
import BookingTicketReducer from './BookingTicketReducer';


const rootReducer = combineReducers({ // store tổng của ứng dụng
    stateCart: CartReducer,         // state giỏ hàng
    RollingDiceReducer,              // state bai rolling dice, kiểu viết nâng cấp không cần khai báo
    BookingTicketReducer            // state bai Booking movie ticket
})

export default rootReducer;
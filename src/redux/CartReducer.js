/* eslint-disable default-case */
// set up State giỏ hàng trên store

const stateCart = {
    cart: [
        // {
        //     "maSP": 0,
        //     "tenSP": "",
        //     "manHinh": "",
        //     "heDieuHanh": "",
        //     "cameraTruoc": "",
        //     "cameraSau": "",
        //     "ram": "",
        //     "rom": "",
        //     "giaBan": 0,
        //     "hinhAnh": ""
        // }
    ]
}

const CartReducer = (state = stateCart, action) => {

    // Xử lý data từ component gửi lên
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let index = state.cart.findIndex(item => item.maSP === action.product.maSP);
            if (index !== -1) {
                state.cart[index].soLuong += 1;
            } else {
                state.cart.push(action.product)
            }
            // Set state, bằng cách tạo 1 state mới (refer tới 1 vùng bộ nhớ mới thì nó mới thay đổi giao diện)
            state.cart = [...state.cart];   // copy giá trị tới vùng bộ nhớ mới

            return { ...state };
        };

        case 'XOA_GIO_HANG': {
            let tempCart = [...state.cart];
            let index = tempCart.findIndex(item => item.maSP === action.id);
            if (index !== -1) {
                tempCart.splice(index, 1)
            }
            // set state lại state mới để component render lại giao diện
            state.cart = tempCart;
            return { ...state };
        };
        case 'TANG_GIAM_SO_LUONG': {
            let tempCart = [...state.cart];
            let index = tempCart.findIndex(item => item.maSP === action.id);
            if (index !== -1) {
                if (action.st) {
                    tempCart[index].soLuong += 1;
                } else {
                    if (tempCart[index].soLuong > 1)
                        tempCart[index].soLuong -= 1;
                    else alert('Minimum quantity of item is 1')
                }
            }
            state.cart = tempCart;
            return { ...state };
        };

        default: return { ...state };
    }
}

export default CartReducer;
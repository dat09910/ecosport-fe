const VoucherReducer = (state,action) =>{
    switch(action.type){
       case 'SET_VOUCHER':
         return {...state,vouchers:action.payload};
       case 'ADD_VOUCHER':
        return {...state,vouchers:[...state.vouchers,action.payload]};
       case 'UPDATE_VOUCHER':
        return {...state,vouchers:state.vouchers.map((voucher)=>(voucher.id === action.payload.id ? action.payload : voucher))}  ;
       case 'DELETE_VOUCHER':
        return {...state,vouchers:state.vouchers.filter(voucher=>voucher.id !== action.payload)}  ;
    }
}
export default VoucherReducer;
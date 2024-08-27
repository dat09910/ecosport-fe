const CategoryReducer = (state,action) =>{
    switch(action.type){
       case 'SET_CATEGORY':
         return {...state,category:action.payload};
       case 'ADD_CATEGORY':
        return {...state,category:[...state.category,action.payload]};
       case 'UPDATE_CATEGORY':
        return {...state,category:state.category.map((categories)=>(categories.id === action.payload.id ? action.payload : categories))}  ;
       case 'DELETE_CATEGORY':
        return {...state,category:state.category.filter(categories=>categories.id !== action.payload)}  ;
    }
}
export default CategoryReducer;
const PostReducer = (state, action) => {
    switch (action.type) {
      case 'SET_POSTS': 
        return { ...state, posts: action.payload }; 
  
      case 'ADD_POST': 
        return { ...state, posts: [...state.posts, action.payload] };
      case 'UPDATE_POST':
        return {
          ...state,
          posts: state.posts.map((post) =>
            post.id === action.payload.id ? action.payload : post
          ),
        }; 
  
      case 'DELETE_POST': 
        return {
          ...state,
          posts: state.posts.filter((post) => post.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default PostReducer;
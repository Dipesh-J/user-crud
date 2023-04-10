export const initialState = {
    users: [],
  };
  
  export const ADD_USER = "ADD_USER";
  export const UPDATE_USER = "UPDATE_USER";
  export const DELETE_USER = "DELETE_USER";
  
  export const userReducer = (state, action) => {
    switch (action.type) {
      case ADD_USER:
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      case UPDATE_USER:
        return {
          ...state,
          users: state.users.map((user) =>
            user.id === action.payload.id ? action.payload : user
          ),
        };
      case DELETE_USER:
        return {
          ...state,
          users: state.users.filter((user) => user.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
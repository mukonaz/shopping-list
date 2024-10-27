import { FETCH_ITEMS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
  items: []
};

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
      case DELETE_ITEM:
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload), // Filter out the deleted item
        };
  
    default:
      return state;
  }
};

export default shoppingReducer;

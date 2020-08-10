import { FETCH_RESTAURANTS, FETCH_RESTAURANT_BY_ID,FETCH_MENU_ITEMS_BY_ID, REGISTER } from '../actions/types';


const initialState = {
  users:[],
  restaurants: [],
  restaurant: {},
  menuItems: [],
  cart:[]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      let user=[]
      Object.assign(user,state.users)
      user.push(action.payload)
      return {
        ...state,
        users:user
      };
    case FETCH_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload
      };

    case FETCH_RESTAURANT_BY_ID:
      return {
        ...state,
        restaurant: action.payload
      };
    case FETCH_MENU_ITEMS_BY_ID:
      return {
        ...state,
        menuItems: action.payload
      };
    default:
      return state;
  }
};


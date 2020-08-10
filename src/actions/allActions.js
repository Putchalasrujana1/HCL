import { FETCH_RESTAURANTS, FETCH_RESTAURANT_BY_ID, FETCH_MENU_ITEMS_BY_ID, REGISTER } from './types';
import axios from 'axios';

export const userRegister = newUser => dispatch => {

  axios.get("http://localhost:8082/user/signup" + newUser)
    .then(user => {
      dispatch({
        type: REGISTER,
        payload: user.data
      })
      console.log(user.data)
    })
};

 

export const fetchRestaurants = () => dispatch => {

  axios.get("http://localhost:8082/restaurants/all")
    .then(res => {
      dispatch({
        type: FETCH_RESTAURANTS,
        payload: res.data
      })
    })
};

export const fetchRestaurantById = (restaurantId) => dispatch => {

  axios.get("http://localhost:8082/restaurants/find/" + restaurantId)
    .then(res => {
      dispatch({
        type: FETCH_RESTAURANT_BY_ID,
        payload: res.data
      })
    })
};

export const fetchMenuItemsById = (restaurantId) => dispatch => {

  axios.get("http://localhost:8082/menu/find/" + restaurantId)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: FETCH_MENU_ITEMS_BY_ID,
        payload: res.data
      })
    })
}; 
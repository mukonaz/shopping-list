import axios from 'axios';
import { FETCH_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from './types';

// Fetch all items
export const fetchItems = (query = '') => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:5000/items`);
        const filteredItems = response.data.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );
        dispatch({ type: FETCH_ITEMS, payload: filteredItems });
    } catch (error) {
        console.error('Error fetching items:', error);
    }
};


// Add a new item
export const addItem = (item) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:5000/items', item);
        dispatch({ type: ADD_ITEM, payload: response.data });
    } catch (error) {
        console.error('Error adding item:', error);
    }
};

// Update an existing item
export const updateItem = (item) => async (dispatch) => {
    try {
        const response = await axios.put(`http://localhost:5000/items/${item.id}`, item);
        dispatch({ type: UPDATE_ITEM, payload: response.data });
    } catch (error) {
        console.error('Error updating item:', error);
    }
};

// Delete an item
export const deleteItem = (id) => async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3000/items/${id}`); // Adjust this URL as needed
      dispatch({ type: DELETE_ITEM, payload: id });
    } catch (error) {
      console.error('Error deleting item:', error);
      throw error; // Rethrow the error to be caught in the calling function
    }
  };
  

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions/shoppingActions';

const AddItemForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && quantity) {
      const newItem = { id: Date.now(), name, quantity, category };
      dispatch(addItem(newItem));
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add Item</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default AddItemForm;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateItem } from '../redux/actions/shoppingActions';

const EditItemForm = ({ item, onClose }) => {
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && quantity) {
      const updatedItem = { ...item, name, quantity };
      dispatch(updateItem(updatedItem));
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditItemForm;

import React, { useState } from 'react';
import EditItemForm from './EditItemForm'; 

const ShoppingListItem = ({ item, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <li>
      {isEditing ? (
        <EditItemForm item={item} onClose={toggleEdit} />
      ) : (
        <>
          <span>{item.name} - {item.quantity} ({item.category})</span>
          <button onClick={toggleEdit}>Edit</button>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default ShoppingListItem; // Ensure this line is present

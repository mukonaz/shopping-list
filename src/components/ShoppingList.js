import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, deleteItem } from '../redux/actions/shoppingActions';
import ShoppingListItem from './ShoppingListItem';
import AddItemForm from './AddItemForm';
import SearchBar from './SearchBar';

const ShoppingList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.shopping.items);

  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const handleAddItem = () => {
    setShowAddItemForm(true);
  };

  const handleCloseForm = () => {
    setShowAddItemForm(false);
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteItem(id)); // Ensure you're awaiting if it's an async function
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <button onClick={handleAddItem}>Add Item</button>
      {showAddItemForm && <AddItemForm onClose={handleCloseForm} />}
      
      <SearchBar />
      <ul>
    {items.map((item) => (
      <ShoppingListItem key={item.id} item={item} onDelete={handleDelete} />
    ))}
  </ul>
    </div>
  );
};

export default ShoppingList;

import React, { useState } from 'react';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems(prevItems => [...prevItems, newItem]);
      setNewItem('');
    }
  };

  const deleteItem = index => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>Shopping List</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          placeholder="Enter an item"
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={addItem}>
            Add Item
          </button>
        </div>
      </div>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <button className="btn btn-danger" onClick={() => deleteItem(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;

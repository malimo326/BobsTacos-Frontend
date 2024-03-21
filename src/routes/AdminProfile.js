import React, { useState, useEffect } from 'react';
import { fetchRestaurantData, addMenuItem, updateMenuItem, deleteMenuItem } from '../api'; 
import Navbar from '../components/header/Navbar';

function AdminProfile() {
  const [menuItems, setMenuItems] = useState([]);
  const [newMenuItemData, setNewMenuItemData] = useState({
    name: '',
    price: '',
    // Add other properties of your menu item here
  });

  useEffect(() => {
    async function fetchMenuItems() {
      try {
        const data = await fetchRestaurantData(); // Corrected the function name here
        setMenuItems(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    }
    fetchMenuItems();
  }, []);

  const handleAddMenuItem = async () => {
    try {
      const addedMenuItem = await addMenuItem(newMenuItemData);
      setMenuItems([...menuItems, addedMenuItem]);
      // Clear input fields after successful addition
      setNewMenuItemData({
        name: '',
        price: '',
      });
    } catch (error) {
      console.error('Error adding menu item:', error);
    }
  };

  const handleUpdateMenuItem = async (menuItemId, updatedMenuItemData) => {
    try {
      const updatedMenuItem = await updateMenuItem(menuItemId, updatedMenuItemData);
      setMenuItems(menuItems.map(item => (item.id === menuItemId ? updatedMenuItem : item)));
    } catch (error) {
      console.error('Error updating menu item:', error);
    }
  };

  const handleDeleteMenuItem = async (menuItemId) => {
    try {
      await deleteMenuItem(menuItemId);
      setMenuItems(menuItems.filter(item => item.id !== menuItemId));
    } catch (error) {
      console.error('Error deleting menu item:', error);
    }
  };

  return (
    <>
     <Navbar/>
    <div className="admin-profile">      
      <h1 className="admin-profile__heading">Admin Profile</h1>
      <div className="admin-profile__add-item">
        <h2>Add New Menu Item</h2>
        <input
          type="text"
          placeholder="Name"
          value={newMenuItemData.name}
          onChange={e => setNewMenuItemData({ ...newMenuItemData, name: e.target.value })}
          className="admin-profile__input"
        />
        <input
          type="text"
          placeholder="Price"
          value={newMenuItemData.price}
          onChange={e => setNewMenuItemData({ ...newMenuItemData, price: e.target.value })}
          className="admin-profile__input"
        />
        <button onClick={handleAddMenuItem} className="admin-profile__button">Add Menu Item</button>
      </div>
      <div className="admin-profile__menu-items">
        <h2>Menu Items</h2>
        <ul className="admin-profile__menu-list">
          {menuItems.map(item => (
            <li key={item.id} className="admin-profile__menu-item">
              {item.name} - Price{item.price}$ - FoodType: {item.foodType} - Rating: {item.rating}
              <div>
               <button onClick={() => handleUpdateMenuItem(item.id, { name: 'Updated Name', price: 'Updated Price' })} className="admin-profile__button">
                Update
              </button>
              <button onClick={() => handleDeleteMenuItem(item.id)} className="admin-profile__button">Delete</button>
            </div>
            </li>
            
            
          ))}
        </ul>
      </div>
    </div>
    </>
   
  );
}

export default AdminProfile;

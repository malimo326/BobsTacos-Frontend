/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import Navbar from "../components/header/Navbar";
import { addMenuItem, deleteMenuItem, updateMenuItem } from "../api";

const AdminProfile = () => {
    const [newMenuItemData, setNewMenuItemData] = useState({
        // State for new menu item data
        // Initialize with default values or leave empty
        name: "",
        price: 0,
        // Add other properties as needed
      });
      const dispatch = useDispatch();

  const handleAddMenuItem = async () => {
    try {
      const addedMenuItem = await addMenuItem(newMenuItemData);
      toast.success("Menu Item added successfully!");
      // Optionally, you can update state or perform any additional actions upon successful addition
    } catch (error) {
      toast.error("Error adding menu item");
    }
  };

  const handleUpdateMenuItem = async (menuItemId, updatedMenuItemData) => {
    try {
      const updatedMenuItem = await updateMenuItem(menuItemId, updatedMenuItemData);
      toast.success("Menu Item updated successfully!");
      // Optionally, you can update state or perform any additional actions upon successful update
    } catch (error) {
      toast.error("Error updating menu item");
    }
  };

  const handleDeleteMenuItem = async (menuItemId) => {
    try {
      await deleteMenuItem(menuItemId);
      toast.success("Menu Item deleted successfully!");
      // Optionally, you can update state or perform any additional actions upon successful deletion
    } catch (error) {
      toast.error("Error deleting menu item");
    }
  };
  return (
    <>
      <Navbar />
      <div className="admin-profile">
        <h1>Welcome Admin!</h1>
        <h2>Product List</h2>
        <div>
          <h2>Add New Menu Item</h2>
          <input
            type="text"
            placeholder="Name"
            value={newMenuItemData.name}
            onChange={(e) =>
              setNewMenuItemData({ ...newMenuItemData, name: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Price"
            value={newMenuItemData.price}
            onChange={(e) =>
              setNewMenuItemData({ ...newMenuItemData, price: e.target.value })
            }
          />
          {/* Add other fields for additional properties */}
          <button onClick={handleAddMenuItem}>Add Menu Item</button>
        </div>
        {/* Add buttons for update and delete operations */}
        <div>
          <h2>Update Menu Item</h2>
          <button onClick={() => handleUpdateMenuItem(menuItemId, updatedMenuItemData)}>
            Update Menu Item
          </button>
        </div>
        <div>
          <h2>Delete Menu Item</h2>
          <button onClick={() => handleDeleteMenuItem(menuItemId)}>Delete Menu Item</button>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
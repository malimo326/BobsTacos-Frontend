import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Navbar from "../components/header/Navbar";
import { addMenuItem, deleteMenuItem, updateMenuItem } from "../api";

const Profile = () => {
  const [newMenuItemData, setNewMenuItemData] = useState({
    name: "",
    price: 0,
  });
  const [deleteMenuItemId, setDeleteMenuItemId] = useState(""); // State to store the ID of the menu item to delete

  const { role } = useSelector((state) => state.user); // Assuming user's role is stored in Redux state

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

  const handleDeleteMenuItem = async () => {
    try {
      await deleteMenuItem(deleteMenuItemId);
      toast.success("Menu Item deleted successfully!");
      // Optionally, you can update state or perform any additional actions upon successful deletion
    } catch (error) {
      toast.error("Error deleting menu item");
    }
  };

  return (
    <>
      <Navbar />
      <div className="profile">
        <h1>Welcome!</h1>
        {/* Conditionally render buttons based on user role */}
        {role === "Admin" && (
          <>
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
            <button onClick={handleAddMenuItem}>Add Menu Item</button>
          </>
        )}
        {/* Add input field and button for deleting menu item */}
        <div>
          <h2>Delete Menu Item</h2>
          <input
            type="text"
            placeholder="Enter Menu Item ID to delete"
            value={deleteMenuItemId}
            onChange={(e) => setDeleteMenuItemId(e.target.value)}
          />
          <button onClick={handleDeleteMenuItem}>Delete Menu Item</button>
        </div>
      </div>
    </>
  );
};

export default Profile;

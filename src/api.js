export async function fetchRestaurantData() {
    try {
      const response = await fetch('https://localhost:7027/MenuItem/MenuItems');
      const data = await response.json();
      return data; //
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
      throw error; 
    }
  }

  export async function addMenuItem(menuItemData) {
    try {
      const response = await fetch('https://localhost:7027/MenuItem/MenuItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(menuItemData)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error adding menu item:', error);
      throw error;
    }
  }

  export async function updateMenuItem(menuItemId, updatedMenuItemData) {
    try {
      const response = await fetch(`https://localhost:7027/MenuItem/MenuItems/${menuItemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedMenuItemData)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating menu item:', error);
      throw error;
    }
  }

  export async function deleteMenuItem(menuItemId) {
    try {
      const response = await fetch(`https://localhost:7027/MenuItem/MenuItems/${menuItemId}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error deleting menu item:', error);
      throw error;
    }
  }
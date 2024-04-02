const todoModal = require("../modals/todo");

async function getAllItems() {
  try {
    const items = await todoModal.find();
    return { success: true, status: 200, data: items };
  } catch (error) {
    console.error("Error fetching items:", error.message);
    return { success: false, status: 500, message: "Internal Server Error" };
  }
}

async function findItem(id) {
  try {
    const item = await todoModal.findById(id);
    if (item) {
      return { success: true, status: 200, data: item };
    } else {
      return { success: false, status: 404, message: "Item not found" };
    }
  } catch (error) {
    console.error("Error finding item:", error.message);
    return { success: false, status: 500, message: "Internal Server Error" };
  }
}

async function addItem(item) {
  try {
    const newItem = await todoModal.create({ taskDescription: item });
    return { success: true, status: 201, data: newItem };
  } catch (error) {
    console.error("Error adding item:", error.message);
    return { success: false, status: 500, message: "Internal Server Error" };
  }
}

async function deleteItem(id) {
  try {
    const deletedItem = await todoModal.findByIdAndDelete(id);
    if (deletedItem) {
      return {
        success: true,
        status: 200,
        message: "Item deleted successfully",
      };
    } else {
      return { success: false, status: 404, message: "Item not found" };
    }
  } catch (error) {
    console.error("Error deleting item:", error.message);
    return { success: false, status: 500, message: "Internal Server Error" };
  }
}

async function updateItem(id, newItem) {
  try {
    const updatedItem = await todoModal.findByIdAndUpdate(
      id,
      { taskDescription: newItem },
      { new: true }
    );
    if (updatedItem) {
      return { success: true, status: 200, data: updatedItem };
    } else {
      return { success: false, status: 404, message: "Item not found" };
    }
  } catch (error) {
    console.error("Error updating item:", error.message);
    return { success: false, status: 500, message: "Internal Server Error" };
  }
}

module.exports = {
  getAllItems,
  findItem,
  addItem,
  deleteItem,
  updateItem,
};

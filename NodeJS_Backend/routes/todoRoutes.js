const { Router } = require("express");
const {
  getAllItemsController,
  findItemController,
  addItemController,
  deleteItemController,
  updateItemController,
} = require("./../controllers/todo");

const router = Router();

router.get("/", getAllItemsController); // Get All Items
router.get("/:id", findItemController); // Find Item
router.post("/", addItemController); // Add new Item
router.delete("/:id", deleteItemController); // Delete Item
router.patch("/:id", updateItemController); // Update Item

module.exports = router;

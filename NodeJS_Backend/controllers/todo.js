const {
  getAllItems,
  findItem,
  addItem,
  deleteItem,
  updateItem,
} = require("./../services/todo");

async function getAllItemsController(_req, res) {
  const result = await getAllItems();
  res.status(result.status).json(result);
}

async function findItemController(req, res) {
  const id = req.params.id;
  const result = await findItem(id);
  res.status(result.status).json(result);
}

async function addItemController(req, res) {
  const item = req.body.taskDescription;
  const result = await addItem(item);
  res.status(result.status).json(result);
}

async function deleteItemController(req, res) {
  const id = req.params.id;
  const result = await deleteItem(id);
  res.status(result.status).json(result);
}

async function updateItemController(req, res) {
  console.log("1111111111111111111");
  const id = req.params.id;
  console.log(id, req.body);
  const newItem = req.body.taskDescription;
  console.log(id, newItem);
  const result = await updateItem(id, newItem);
  res.status(result.status).json(result);
}

module.exports = {
  getAllItemsController,
  findItemController,
  addItemController,
  deleteItemController,
  updateItemController,
};

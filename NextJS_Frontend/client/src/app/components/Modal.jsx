import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import useUpdateTask from "../hooks/useUpdateTask";

export default function ModalComponent({ open, onClose, data: modalData }) {
  const mutation = useUpdateTask();
  const [updatedTask, setUpdatedTask] = useState(
    modalData.taskDescription || ""
  );

  const handleEdit = (e) => {
    setUpdatedTask(e.target.value);
  };

  const handleUpdate = () => {
    mutation.mutate({ id: modalData._id, taskDescription: updatedTask });
    console.log("end");
    onClose(); // Close the modal after updating the task
  };

  return (
    <Modal open={open} onClose={onClose} center>
      <h2>Update Task</h2>
      <input
        type="text"
        placeholder={modalData.taskDescription}
        onChange={handleEdit}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <button
        onClick={handleUpdate}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Update
      </button>
    </Modal>
  );
}

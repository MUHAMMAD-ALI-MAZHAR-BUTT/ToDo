// components/ToDos.tsx
import React, { useState } from "react";
import showToast from "../Toast";

import { Task } from "../types/todo";
import useGetAllTasks from "../hooks/useGetAllTasks";
import usePostTask from "../hooks/usePostTask";
import useDeleteTask from "../hooks/useDeleteTask";

import ModalComponent from "../components/Modal";

export default function ToDos() {
  const { data, isLoading, isError } = useGetAllTasks();
  const { mutate: deleteTaskFunction } = useDeleteTask();

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [task, setTask] = useState("");
  const [modalData, setmodalData] = useState({});
  const {
    mutate,
    isPending: isPostingPending,
    error: postError,
  } = usePostTask();
  if (isError || postError) {
    return <h1>Error fetching or posting tasks</h1>;
  }

  if (isLoading || isPostingPending) {
    return <h1>Loading...</h1>;
  }

  const handleInput = (input: React.ChangeEvent<HTMLInputElement>) => {
    setTask(input.target.value);
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      taskDescription: task,
    });
  };

  const handleEdit = (task: any) => {
    console.log(task);
    setmodalData(task);
    onOpenModal();
  };

  const handleDelete = (taskID: any) => {
    console.log(taskID);
    deleteTaskFunction(taskID);
  };

  return (
    <>
      <h1>Tasks</h1>
      <form onSubmit={handleSubmitForm}>
        <div className="grid gap-2 ">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Task"
              value={task}
              onChange={handleInput}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={!task}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </form>

      <ul>
        {data?.map((task: Task) => (
          <>
            <li key={task._id}>{task.taskDescription}</li>
            <button
              className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleEdit(task)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleDelete(task._id)}
            >
              Delete
            </button>
          </>
        ))}
      </ul>
      <ModalComponent open={open} onClose={onCloseModal} data={modalData} />
    </>
  );
}

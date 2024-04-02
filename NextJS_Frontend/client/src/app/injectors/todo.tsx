import { AxiosInstance } from "axios";

import { Task } from "./../types/todo";

const injectTodo = (ApiCaller: AxiosInstance) => {
  const fetchTasks = async (signal: AbortSignal) => {
    try {
      const response = await ApiCaller.get("/", { signal });
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  //Post API request : Add new Task
  const postTask = async (newTask: Task) => {
    try {
      const response = await ApiCaller.post("/", newTask);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error posting task:", error);
      throw error;
    }
  };

  const updateTask = async ({ id, taskDescription }) => {
    try {
      const response = await ApiCaller.patch(`/${id}`, {taskDescription});
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  const deleteTask = async (id: any) => {
    try {
      const response = await ApiCaller.delete(`/${id}`);
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  // const findTask = async (searchKey: string) => {
  //   try {
  //     const response = await ApiCaller.get(`/${searchKey}`);
  //     console.log(response);
  //     return response;
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     throw error;
  //   }
  // };

  return {
    fetchTasks,
    updateTask,
    deleteTask,
    // findTask,
    postTask,
  };
};

export default injectTodo;

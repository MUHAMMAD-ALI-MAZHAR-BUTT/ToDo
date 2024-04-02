import { useContext } from "react";
import { APIContext } from "@/app/apiContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Task } from "./../types/todo";
import showToast from "../Toast";

function usePostTask() {
  const { allApis } = useContext(APIContext);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (task: Task) => allApis.toDo.postTask(task),
    onSuccess: () => {
      showToast("New Task successfully added", "success");
      queryClient.invalidateQueries("getAllTasks");
    },
    onError: (error: any) => {
      showToast(`Error posting task: ${error.message}`, "error");
    },
  });
}

export default usePostTask;

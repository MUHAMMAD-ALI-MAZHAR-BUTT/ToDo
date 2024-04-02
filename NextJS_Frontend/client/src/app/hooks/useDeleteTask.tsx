import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { APIContext } from "../apiContext";

const useDeleteTask = () => {
  const { allApis } = useContext(APIContext);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (taskID: any) => allApis.toDo.deleteTask(taskID),
    onSuccess: () => {
      alert("successfully deleted");
      queryClient.invalidateQueries("getAllTasks");
    },
    onError: () => {console.log("Error")},
  });
};

export default useDeleteTask;

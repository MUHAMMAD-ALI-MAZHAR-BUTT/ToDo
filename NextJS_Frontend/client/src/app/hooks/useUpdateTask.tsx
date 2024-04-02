import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { APIContext } from "../apiContext";

const useUpdateTask = () => {
  const { allApis } = useContext(APIContext);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ id, taskDescription }) =>
      allApis.toDo.updateTask({id, taskDescription }),
    onSuccess: () => {
      alert("Query executed");
      queryClient.invalidateQueries("getAllTasks");
    },
    onError: () => {
      console.log("Error");
    },
  });
  return mutation;
};

export default useUpdateTask;

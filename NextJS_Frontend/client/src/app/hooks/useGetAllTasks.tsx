// hooks/useGetAllTasks.ts
import { useContext, useEffect } from "react";
import { APIContext } from "@/app/apiContext";
import { useQuery } from "@tanstack/react-query";

function useGetAllTasks() {
  const { allApis } = useContext(APIContext);

  const controller = new AbortController();
  const signal = controller.signal;

  const query = useQuery({
    queryKey: ["getAllTasks"],
    queryFn: () => allApis?.toDo?.fetchTasks(signal),
    enabled: Boolean(allApis?.toDo?.fetchTasks),
  });

  // Abort the request when the component unmounts
  useEffect(() => {
    return () => controller.abort();
  }, []);

  return query;
}

export default useGetAllTasks;

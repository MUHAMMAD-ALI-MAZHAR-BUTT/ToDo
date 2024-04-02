import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import injectTodo from "./injectors/todo";

type APIContextType = {
  allApis: any;
};

const APIContext = createContext<APIContextType>({
  allApis: {},
});

const APIContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [apis, setApis] = useState<any>({});

  useEffect(() => {
    const apiHeader = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    setApis({
      todo: injectTodo(apiHeader),
    });
  }, []); // Empty dependency array ensures this runs once on mount

  const allApis = {
    toDo: apis?.todo,
  };
 
  return (
    <APIContext.Provider value={{ allApis }}>{children}</APIContext.Provider>
  );
};

export { APIContext, APIContextProvider };

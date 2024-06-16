import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    //Properties
    {
      id: 1,
      todo: "Todo Mssg",
      completed: false,
    },
  ],
  addTodo: (todo) => {}, //functionalities
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};
export const TodoProvider = TodoContext.Provider;

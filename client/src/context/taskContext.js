import { createContext, useReducer } from "react";
import { taskReducer } from "./taskReducer";
import { getMonday } from "../utils/dateFunctions";

// ? dates
const date = new Date().setHours(0, 0, 0);

// ? initial state
export const initialState = {
  date: {
    current: date,
    from: getMonday(date),
    to: getMonday(date, 6),
  },
  tasks: [],
  taskModel: {
    // set in modal
    task: "",
    date: "",
    type: "",
    completed: false,
    // return from POST
    _id: "",
  },
  displayModal: false,
  loading: true,
  success: [null, ""],
};

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={[state, dispatch]}>
      {children}
    </TaskContext.Provider>
  );
};

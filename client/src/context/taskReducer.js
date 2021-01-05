import { initialState } from "./taskContext";
import { getMonday } from "../utils/dateFunctions";

export const taskReducer = (prevState, action) => {
  switch (action.type) {
    case "POPULATE_TASKS":
      return {
        ...prevState,
        tasks: action.payload,
      };
    case "DISPLAY_MODAL":
      return {
        ...prevState,
        taskModel: {
          task: "",
          date: action.payload ? new Date(action.date).toISOString() : "",
          type: action.payload ? action.taskType : "",
        },
        displayModal: action.payload,
      };
    case "CREATE_TASK":
      return {
        ...prevState,
        taskModel: {
          ...prevState.taskModel,
          [action.key]: action.value,
        },
      };
    case "SUBMIT_TASK":
      const task = {
        ...prevState.taskModel,
        _id: action.payload,
        createAt: new Date().toISOString(),
        complete: false,
      };
      if (!task)
        return {
          ...prevState,
          success: [false, "Task must include text."],
        };
      return {
        ...prevState,
        taskModel: {
          task: "",
          date: "",
        },
        tasks: [...prevState.tasks, task],
        displayModal: false,
      };
    case "DELETE_TASK":
      const newArr = prevState.tasks.filter(
        (task) => task._id !== action.payload
      );
      return {
        ...prevState,
        tasks: newArr,
      };
    case "TOGGLE_COMPLETE":
      const toggledArr = prevState.tasks.map((task) => {
        return task._id === action.payload
          ? {
              ...task,
              complete: !task.complete,
            }
          : task;
      });
      return {
        ...prevState,
        tasks: toggledArr,
      };
    case "INCREMENT_WEEK":
      return {
        ...prevState,
        date: {
          ...prevState.date,
          from: prevState.date.from + 1000 * 60 * 60 * 24 * 7,
          to: prevState.date.to + 1000 * 60 * 60 * 24 * 7,
        },
      };
    case "DECREMENT_WEEK":
      return {
        ...prevState,
        date: {
          ...prevState.date,
          from: prevState.date.from - 1000 * 60 * 60 * 24 * 7,
          to: prevState.date.to - 1000 * 60 * 60 * 24 * 7,
        },
      };
    case "CURRENT_WEEK":
      return {
        ...prevState,
        date: {
          ...prevState.date,
          from: getMonday(new Date().setHours(0, 0, 0)),
          to: getMonday(new Date().setHours(0, 0, 0), 6),
        },
      };
    case "SET_SUCCESS":
      return {
        ...prevState,
        success: [action.bool, action.message],
      };
    case "RESET_STATE":
      return initialState;
    default:
      return prevState;
  }
};

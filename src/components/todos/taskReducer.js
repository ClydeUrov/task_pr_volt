import {
  ADD_TASK,
  UPDATE_TASK_DESCRIPTION,
  UPDATE_TASK_TITLE,
  UPDATE_COMPLETED_STATE,
  FILTER_TASKS
} from "./taskActionTypes";

const initialState = {
  tasks: [],
  taskTitle: "",
  taskDescription: "",
  currentId: 1,
  completedCount: 0,
  incompletedCount: 0,
  filteredTasks: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        ...action.payload,
        id: state.currentId,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        taskTitle: "",
        taskDescription: "",
        currentId: state.currentId + 1,
        incompletedCount: state.incompletedCount + 1,
      };
    case UPDATE_TASK_TITLE:
      return {
        ...state,
        taskTitle: action.payload,
      };
    case UPDATE_TASK_DESCRIPTION:
      return {
        ...state,
        taskDescription: action.payload,
      };
    case UPDATE_COMPLETED_STATE:
      const updatedTasks = state.tasks.map(task =>
        task.id === action.payload.id ? { ...task, isCompleted: action.payload.isCompleted } : task
      );

      const completedCount = updatedTasks.filter(task => task.isCompleted).length;
      const incompletedCount = updatedTasks.length - completedCount;

      return {
        ...state,
        tasks: updatedTasks,
        completedCount,
        incompletedCount,
      };
    case FILTER_TASKS:
      console.log("action.payload", action.payload);
      console.log(state.tasks.filter(task => task.isCompleted === action.payload));
      return {
        ...state,
        filteredTasks: state.tasks.filter(task => task.isCompleted === action.payload)
      }
    default:
      return state;
  }
};

export default taskReducer;

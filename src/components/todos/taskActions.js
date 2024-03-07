import {
  ADD_TASK,
  FILTER_TASKS,
  UPDATE_COMPLETED_STATE,
  UPDATE_TASK_DESCRIPTION,
  UPDATE_TASK_TITLE,
} from "./taskActionTypes";

export const addTask = (task) => {
  console.log(task);
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const updateTaskTitle = (value) => {
  return {
    type: UPDATE_TASK_TITLE,
    payload: value,
  };
};

export const updateTaskDescription = (value) => {
  return {
    type: UPDATE_TASK_DESCRIPTION,
    payload: value,
  };
};

export const updateCompletedState = (value) => {
  return {
    type: UPDATE_COMPLETED_STATE,
    payload: value,
  };
};

export const filterTasksBy = (value) => {
  console.log("value", value);
  return {
    type: FILTER_TASKS,
    payload: value,
  };
};

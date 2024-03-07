import { useState } from "react";
import css from "./TodoList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addTask, filterTasksBy, updateCompletedState, updateTaskDescription, updateTaskTitle } from "./taskActions";
import InputForm from "../inputForm/InputForm";
import Filters from "../filters/Filters";
import TaskList from "../taskList/TaskList";

function AddTasks() {
  const dispatch = useDispatch();
  const taskTitle = useSelector((state) => state.task.taskTitle);
  const taskDescription = useSelector((state) => state.task.taskDescription);
  const completedCount = useSelector((state) => state.task.completedCount);
  const incompletedCount = useSelector((state) => state.task.incompletedCount);
  const allTasks = useSelector((state) => state.task.tasks);
  const filteredTasks = useSelector((state) => state.task.filteredTasks);
  const [useFilter, setUseFilter] = useState(false);

  const onAddTask = (e) => {
    e.preventDefault();
    const task = {
      title: taskTitle,
      description: taskDescription,
      isCompleted: false,
    };
    console.log(task);
    dispatch(addTask(task));
  };
  const onTaskTitleChange = (e) => dispatch(updateTaskTitle(e.target.value));
  const onTaskDescriptionChange = (e) => dispatch(updateTaskDescription(e.target.value));

  const updateCompletedStateHandler = (id, isCompleted) => {
    dispatch(updateCompletedState({ id, isCompleted }));
  };

  const filter = (val) => dispatch(filterTasksBy(val))

  const tasks = filteredTasks.length || useFilter ? filteredTasks : allTasks

  return (
    <div className={css['main-container']}>
      <h1>Todo List</h1>
      <div className={css['task-container']}>
        <div className={css['flex-around']}>
          <InputForm
            onAddTask={onAddTask} 
            onTaskTitleChange={onTaskTitleChange} 
            onTaskDescriptionChange={onTaskDescriptionChange} 
            taskTitle={taskTitle}
            taskDescription={taskDescription}
          />

          <div>
            <Filters filter={filter} setUseFilter={setUseFilter} />
            <div className={css.counter}>
              <p>Completed: {completedCount}</p>
              <p>Incompleted: {incompletedCount}</p>
            </div>
          </div>
        </div>
        <TaskList tasks={tasks} updateCompletedStateHandler={updateCompletedStateHandler} />
      </div>
    </div>
  );
}

export default AddTasks;

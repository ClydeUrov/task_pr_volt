import css from "./InputForm.module.scss";

function InputForm({onAddTask, onTaskTitleChange, onTaskDescriptionChange, taskTitle, taskDescription}) {
  return (
    <form onSubmit={onAddTask} className={css}>
      <input
        type="text"
        placeholder="Task Title"
        onChange={onTaskTitleChange}
        value={taskTitle}
        maxLength={30}
        required
      />
      <textarea
        type="text"
        maxLength={200}
        placeholder="Task Description"
        onChange={onTaskDescriptionChange}
        value={taskDescription}
        required
      />
      <button type="submit">
        Add Task
      </button>
    </form>
  )
}

export default InputForm;
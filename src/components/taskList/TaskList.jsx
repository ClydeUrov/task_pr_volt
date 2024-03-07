import Card from "../Card";
import css from "./TaskList.module.scss"

const TaskList = ({tasks, updateCompletedStateHandler}) => {
  return (
    <div className={css['task-list-block']}>
      <ul>
        {tasks.map((task) => (
          <Card task={task} updateCompletedStateHandler={updateCompletedStateHandler} />
        ))}
      </ul>
    </div>
  )
}

export default TaskList;
const Card = ({task, updateCompletedStateHandler}) => {
  return (
    <li key={task.id}>
      <div>
        <h3
          onClick={() => updateCompletedStateHandler(task.id, !task.isCompleted)}
        >
          {task.id}. {task.title}
        </h3>
        <p>{task.description}</p>
      </div>
      <div>
        <p style={{backgroundColor: task.isCompleted ? 'darkseagreen' : 'lightcoral'}}>
          {task.isCompleted ? 'Completed' : 'Incompleted'}
        </p>
      </div>
    </li>
  )
}

export default Card;
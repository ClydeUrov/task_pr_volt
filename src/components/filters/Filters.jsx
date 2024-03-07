import css from "./Filters.module.scss";

function Filters ({filter, setUseFilter}) {
  return (
    <div className={css.filters}>
      <button onClick={() => {setUseFilter(false); filter('all')}}>All</button>
      <button onClick={() => {setUseFilter(true); filter(true)}}>Completed</button>
      <button onClick={() => {setUseFilter(true); filter(false)}}>Incompleted</button>
    </div>
  )
} 

export default Filters;
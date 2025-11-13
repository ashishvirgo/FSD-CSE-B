import React from 'react'

const Task = ({task}) => {
  return (
    <div className='card'>
     <img src={task.image} width="200" height="200" alt="" />
     <h2>Task:{task.task}</h2>
      <button>{task.task}</button>
    </div>
  )
}

export default Task

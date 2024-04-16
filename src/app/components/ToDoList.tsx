import React from 'react'

type Props = {}

const ToDoList = (props: Props) => {
  return (
    <div>
    <ul style={{ listStyleType: "none", padding: 0}}>
      <li style={{ padding: "5px 0"}}>Todo 1</li>
      <li style={{ padding: "5px 0"}}>Todo 2</li>
      <li style={{ padding: "5px 0"}}>Todo 3</li>
    </ul>
  </div>
  )
}

export default ToDoList
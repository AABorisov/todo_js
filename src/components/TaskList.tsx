import * as React from "react";
import Task from "./Task";
import {Task as ITask, TaskList as ITaskList} from "../store/taskList/types"

interface TaskListProps {
  taskList: ITaskList
  startTask: (task: ITask) => void
  completeTask: (task: ITask) => void
  removeTask: (task: ITask) => void
}
const TaskList = ( { taskList, startTask, completeTask, removeTask } : TaskListProps ) => {
  return <div>
    {
      taskList.map( task => {
        return (
          <Task
            key={ task.addDate }
            task={ task }
            startTask={ startTask }
            completeTask={ completeTask }
            removeTask={ removeTask }
          />)
      })
    }
  </div>
}

export default TaskList


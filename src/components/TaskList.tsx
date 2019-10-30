import * as React from 'react';
import Task from './Task';
import { Task as ITask, TaskList as ITaskList } from '../store/taskList/types';

import style = require('./style.scss');

interface TaskListProps {
  taskList: ITaskList;
  startTask: (task: ITask) => void;
  completeTask: (task: ITask) => void;
  removeTask: (task: ITask) => void;
}
const TaskList: React.FC<TaskListProps> = ({ taskList, startTask, completeTask, removeTask }) => {
  return (
    <div className={style.taskList}>
      {taskList.map(task => {
        return (
          <Task
            key={task.addDate}
            task={task}
            startTask={startTask}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
};

export default TaskList;

import * as React from 'react';
import TaskButton from './TaskButton';
import { Task as ITask } from '../store/taskList/types';

import style = require('./style.scss');

interface TaskProps {
  task: ITask;
  startTask: (task: ITask) => void;
  completeTask: (task: ITask) => void;
  removeTask: (task: ITask) => void;
}

const Task: React.FC<TaskProps> = ({ task, startTask, completeTask, removeTask }) => {
  const { title, description, importance, startDate, completeDate } = task;
  function onStartClick(event: React.MouseEvent): void {
    event.preventDefault();
    startTask(task);
  }
  function onCompleteClick(event: React.MouseEvent): void {
    event.preventDefault();
    completeTask(task);
  }
  function onRemoveClick(event: React.MouseEvent): void {
    event.preventDefault();
    removeTask(task);
  }
  return (
    <div className={style.task}>
      <TaskButton
        startDate={startDate}
        completeDate={completeDate}
        onStartClick={onStartClick}
        onCompleteClick={onCompleteClick}
      />
      <div
        className={style.startDate}
        title={`Started: ${startDate ? new Date(startDate).toLocaleString() : 'not started yet'}`}
      >
        {startDate ? new Date(startDate).toLocaleTimeString() : 'Not started'}
      </div>
      <div className={style.title} title={`Title: ${title}`}>
        {title}
      </div>
      <div className={style.importance} title={`Priority: ${importance}`}>
        {importance}
      </div>
      <div className={style.description} title={`Description: ${description}`}>
        {description}
      </div>
      <button
        type="button"
        onClick={onRemoveClick}
        className={style.removeButton}
        title="Remove task"
      >
        X
      </button>
    </div>
  );
};

export default Task;

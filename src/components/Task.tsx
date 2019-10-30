import * as React from 'react';
import TaskButton from './TaskButton';
import { Task as ITask } from '../store/taskList/types';

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
    <div>
      <TaskButton
        startDate={startDate}
        completeDate={completeDate}
        onStartClick={onStartClick}
        onCompleteClick={onCompleteClick}
      />
      <div>{startDate}</div>
      <div>{title}</div>
      <div>{importance}</div>
      <div>{description}</div>
      <button type="button" onClick={onRemoveClick}>
        X
      </button>
    </div>
  );
};

export default Task;

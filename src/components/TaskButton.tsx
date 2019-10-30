import * as React from 'react';

import style = require('./style.scss');

interface TaskButtonProps {
  startDate: number;
  completeDate: number;
  onStartClick: (event: React.MouseEvent<HTMLElement>) => void;
  onCompleteClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const TaskButton: React.FC<TaskButtonProps> = ({
  startDate,
  completeDate,
  onStartClick,
  onCompleteClick,
}) => {
  if (completeDate) {
    return (
      <div className={style.done} title={`Completed: ${new Date(completeDate).toLocaleString()}`}>
        Done
      </div>
    );
  }
  if (startDate) {
    return (
      <button
        type="button"
        onClick={onCompleteClick}
        className={style.completeButton}
        title="Complete task"
      >
        Complete
      </button>
    );
  }
  return (
    <button type="button" onClick={onStartClick} className={style.startButton} title="Start task">
      Start
    </button>
  );
};

export default TaskButton;

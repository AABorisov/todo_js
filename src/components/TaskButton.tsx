import * as React from 'react';

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
    return <div>Done</div>;
  }
  if (startDate) {
    return (
      <button type="button" onClick={onCompleteClick}>
        Complete
      </button>
    );
  }
  return (
    <button type="button" onClick={onStartClick}>
      Start
    </button>
  );
};

export default TaskButton;

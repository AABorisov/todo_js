import * as React from "react";

interface TaskButtonProps {
  startDate: number
  completeDate: number
  onStartClick: (event: React.MouseEvent<HTMLElement>) => void
  onCompleteClick: (event: React.MouseEvent<HTMLElement>) => void
}

const TaskButton: React.FC<TaskButtonProps> = ( {  startDate, completeDate, onStartClick, onCompleteClick } ) => {
  if ( !!completeDate ) {
    return <div>Done</div>
  } else if ( !!startDate ) {
    return <button onClick={ onCompleteClick } >Complete</button>
  } else {
    return <button onClick={ onStartClick } >Start</button>
  }
}

export default TaskButton
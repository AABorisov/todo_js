import * as React from "react";
import Filter from "../components/Filter";
import TaskList from "../components/TaskList";
import {Task as ITask, TaskList as ITaskList} from "../store/taskList/types";
import {AppState} from "../store";
import {TaskFilterState} from "../store/taskFilter/types";
import {connect} from "react-redux";
import {completeTask, startTask, removeTask} from "../store/taskList/actions";
import {AnyAction, Dispatch} from "redux";
import {setTaskFilter} from "../store/taskFilter/actions";

interface TasksStateProps {
  taskList: ITaskList
  taskFilter: TaskFilterState
}

interface TasksDispatchProps {
  startTask: (task: ITask) => void
  completeTask: (task: ITask) => void
  removeTask: (task: ITask) => void
  setTaskFilter: (taskFilter: TaskFilterState) => void
}

type TasksProps = TasksStateProps & TasksDispatchProps

class Tasks extends React.Component<TasksProps> {

  render() {
    const { taskList, taskFilter, setTaskFilter, startTask, completeTask, removeTask } = this.props
    return <div>
      <Filter
        taskFilter={taskFilter}
        setTaskFilter={ setTaskFilter }
      />
      <TaskList
        taskList={ taskList }
        startTask={ startTask }
        completeTask={ completeTask }
        removeTask={ removeTask }
      />
    </div>
  }
}

const filterTasks = (taskList: ITaskList, { titleFilter, importanceFilter } : TaskFilterState) : ITaskList => {
  return taskList.filter((task: ITask) => {
    const matchTitle = !titleFilter || task.title.toLowerCase().includes(titleFilter)
    const matchImportance = importanceFilter === 0 || importanceFilter === task.importance
    return matchTitle && matchImportance
  })
}

const mapStateToProps = (state: AppState) : TasksStateProps => ({
  taskList: filterTasks(state.taskList, state.taskFilter),
  taskFilter: state.taskFilter
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) : TasksDispatchProps => ({
  startTask: (task: ITask) => dispatch(startTask(task)),
  completeTask: (task: ITask) => dispatch(completeTask(task)),
  removeTask: (task: ITask) => dispatch(removeTask(task)),
  setTaskFilter: (taskFilter: TaskFilterState) => dispatch(setTaskFilter(taskFilter)),
})

export default connect<TasksStateProps, TasksDispatchProps>(mapStateToProps, mapDispatchToProps)(Tasks)
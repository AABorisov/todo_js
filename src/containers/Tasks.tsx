import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import Filter from '../components/Filter';
import TaskList from '../components/TaskList';
import { Task as ITask, TaskList as ITaskList } from '../store/taskList/types';
import { AppState } from '../store';
import { TaskFilterState } from '../store/taskFilter/types';
import {
  completeTask as completeTaskAction,
  startTask as startTaskAction,
  removeTask as removeTaskAction,
} from '../store/taskList/actions';
import { setTaskFilter as setTaskFilterAction } from '../store/taskFilter/actions';

interface TasksStateProps {
  taskList: ITaskList;
  taskFilter: TaskFilterState;
}

interface TasksDispatchProps {
  startTask: (task: ITask) => void;
  completeTask: (task: ITask) => void;
  removeTask: (task: ITask) => void;
  setTaskFilter: (taskFilter: TaskFilterState) => void;
}

type TasksProps = TasksStateProps & TasksDispatchProps;

const Tasks: React.FC<TasksProps> = props => {
  const { taskList, taskFilter, setTaskFilter, startTask, completeTask, removeTask } = props;
  return (
    <div>
      <Filter taskFilter={taskFilter} setTaskFilter={setTaskFilter} />
      <TaskList
        taskList={taskList}
        startTask={startTask}
        completeTask={completeTask}
        removeTask={removeTask}
      />
    </div>
  );
};

const filterTasks = (
  taskList: ITaskList,
  { filterTitle, filterImportance }: TaskFilterState
): ITaskList => {
  return taskList.filter((task: ITask) => {
    const matchTitle = !filterTitle || task.title.toLowerCase().includes(filterTitle);
    const matchImportance = filterImportance === 0 || filterImportance === task.importance;
    return matchTitle && matchImportance;
  });
};

const mapStateToProps = (state: AppState): TasksStateProps => ({
  taskList: filterTasks(state.taskList, state.taskFilter),
  taskFilter: state.taskFilter,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): TasksDispatchProps =>
  bindActionCreators(
    {
      startTask: startTaskAction,
      completeTask: completeTaskAction,
      removeTask: removeTaskAction,
      setTaskFilter: setTaskFilterAction,
    },
    dispatch
  );

export default connect<TasksStateProps, TasksDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);

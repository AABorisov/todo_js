export interface Task {
  title: string;
  description?: string;
  importance: number;

  addDate: number;
  startDate?: number;
  completeDate?: number;
}

export type TaskList = Array<Task>;

export interface TaskListState {
  taskList: TaskList;
}

export const ADD_TASK = 'ADD_TASK';
export const START_TASK = 'START_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

export interface StartTaskAction {
  type: typeof START_TASK;
  payload: Task;
}

export interface CompleteTaskAction {
  type: typeof COMPLETE_TASK;
  payload: Task;
}

export interface RemoveTaskAction {
  type: typeof REMOVE_TASK;
  payload: Task;
}

export type TaskListActionTypes =
  | AddTaskAction
  | StartTaskAction
  | CompleteTaskAction
  | RemoveTaskAction;

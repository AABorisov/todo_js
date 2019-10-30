/* eslint-disable import/prefer-default-export */

export interface TaskFilterState {
  filterTitle: string;
  filterImportance: number;
}

export const SET_TASK_FILTER = 'SET_TASK_FILTER';

export interface SetTaskFilterAction {
  type: typeof SET_TASK_FILTER;
  payload: TaskFilterState;
}

export type TaskFilterActionTypes = SetTaskFilterAction;

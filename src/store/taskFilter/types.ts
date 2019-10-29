export interface TaskFilterState {
  titleFilter: string
  importanceFilter: number
}

export const SET_TASK_FILTER = 'SET_TASK_FILTER'


export interface SetTaskFilterAction {
  type: typeof SET_TASK_FILTER
  payload: TaskFilterState
}

export type TaskFilterActionTypes = SetTaskFilterAction
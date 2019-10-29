import {TaskFilterActionTypes, TaskFilterState} from "./types";

export const setTaskFilter = (taskFilter: TaskFilterState) : TaskFilterActionTypes => ({
  type: 'SET_TASK_FILTER',
  payload: taskFilter
})
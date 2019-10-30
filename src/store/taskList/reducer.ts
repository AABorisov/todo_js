/* eslint-disable import/prefer-default-export */

import {
  ADD_TASK,
  COMPLETE_TASK,
  REMOVE_TASK,
  START_TASK,
  TaskList,
  TaskListActionTypes,
} from './types';

const initialState: TaskList = [];

export function taskListReducer(state = initialState, action: TaskListActionTypes): TaskList {
  switch (action.type) {
    case ADD_TASK:
      return [
        {
          ...action.payload,
        },
        ...state,
      ];
    case START_TASK:
    case COMPLETE_TASK:
      return state.map(task => {
        if (task.addDate === action.payload.addDate) {
          return {
            ...action.payload,
          };
        }
        return task;
      });
    case REMOVE_TASK:
      return state.filter(task => task.addDate !== action.payload.addDate);
    default:
      return state;
  }
}

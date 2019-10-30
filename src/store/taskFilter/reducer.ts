/* eslint-disable import/prefer-default-export */

import { SET_TASK_FILTER, TaskFilterActionTypes, TaskFilterState } from './types';

const initialState: TaskFilterState = {
  titleFilter: '',
  importanceFilter: 0,
};

export function taskFilterReducer(
  state = initialState,
  action: TaskFilterActionTypes
): TaskFilterState {
  switch (action.type) {
    case SET_TASK_FILTER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

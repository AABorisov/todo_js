import {
  ADD_TASK,
  AddTaskAction,
  COMPLETE_TASK,
  CompleteTaskAction,
  REMOVE_TASK, RemoveTaskAction,
  START_TASK,
  StartTaskAction,
  Task
} from "./types";

export function addTask(task: Task): AddTaskAction {
  return {
    type: ADD_TASK,
    payload: {
      ...task
    }
  }
}

export function startTask(task: Task): StartTaskAction {
  return {
    type: START_TASK,
    payload: {
      ...task,
      startDate: Date.now()
    }
  }
}

export function completeTask(task: Task): CompleteTaskAction {
  return {
    type: COMPLETE_TASK,
    payload: {
      ...task,
      completeDate: Date.now()
    }
  }
}

export function removeTask(task: Task): RemoveTaskAction {
  return {
    type: REMOVE_TASK,
    payload: {
      ...task,
      completeDate: Date.now()
    }
  }
}
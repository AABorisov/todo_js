import * as React from 'react';
import { debounce } from 'lodash-es';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addTask as addTaskAction } from '../store/taskList/actions';
import { Task } from '../store/taskList/types';

import style = require('./style.scss');

interface AddTaskDispatchProps {
  addTask: (task: Task) => void;
}

type AddTaskProps = AddTaskDispatchProps;

const AddTask: React.FC<AddTaskProps> = props => {
  const titleRef = React.useRef<HTMLInputElement>(null);
  const descriptionRef = React.useRef<HTMLTextAreaElement>(null);
  const importanceRef = React.useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!titleRef.current.value.trim()) {
      // not valid
      return;
    }

    const { addTask } = props;
    const titleValue = titleRef.current.value.trim();
    const descriptionValue = descriptionRef.current.value.trim();
    const importanceValue = +importanceRef.current.value;

    addTask({
      title: titleValue,
      description: descriptionValue,
      importance: importanceValue,
      addDate: Date.now(),
    });

    const target: HTMLFormElement = event.target as HTMLFormElement;
    target.reset();
  };

  const onImportanceChange = debounce(() => {
    const value = Math.min(Math.max(+importanceRef.current.value, 1), 5);
    importanceRef.current.value = value.toString();
  }, 500);

  return (
    <form onSubmit={onSubmit} className={style.form}>
      <input
        ref={titleRef}
        type="text"
        id="title"
        placeholder="Title"
        title="Title"
        className={style.titleInput}
      />
      <textarea
        ref={descriptionRef}
        rows={5}
        id="description"
        placeholder="Description"
        title="Description"
        className={style.descriptionTextarea}
      />
      <input
        ref={importanceRef}
        type="number"
        id="importance"
        title="Priority"
        min={1}
        max={5}
        defaultValue={3}
        onChange={onImportanceChange}
        className={style.importanceInput}
      />
      <div className={style.submitButtonWrapper}>
        <button type="submit" className={style.submitButton}>
          Add Task
        </button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): AddTaskDispatchProps =>
  bindActionCreators(
    {
      addTask: addTaskAction,
    },
    dispatch
  );

export default connect<null, AddTaskDispatchProps>(
  null,
  mapDispatchToProps
)(AddTask);

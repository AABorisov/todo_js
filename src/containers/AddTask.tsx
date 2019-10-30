import * as React from 'react';
import { debounce } from 'lodash-es';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addTask as addTaskAction } from '../store/taskList/actions';
import { Task } from '../store/taskList/types';

interface AddTaskDispatchProps {
  addTask: (task: Task) => void;
}

type AddTaskProps = AddTaskDispatchProps;

class AddTask extends React.Component<AddTaskProps> {
  titleRef: { value: string } | null = null;

  descriptionRef: { value: string } | null = null;

  importanceRef: { value: string } | null = null;

  onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!this.titleRef.value.trim()) {
      return;
    }

    const { addTask } = this.props;

    addTask({
      title: this.titleRef.value.trim(),
      description: this.descriptionRef.value.trim(),
      importance: +this.importanceRef.value,
      addDate: Date.now(),
    });

    this.resetFormValues();
  };

  onImportanceChange = debounce(() => {
    const value = Math.min(Math.max(+this.importanceRef.value, 1), 5);
    this.importanceRef.value = value.toString();
  }, 500);

  setTitleRef = (node: { value: string }): void => {
    this.titleRef = node;
  };

  setDescriptionRef = (node: { value: string }): void => {
    this.descriptionRef = node;
  };

  setImportanceRef = (node: { value: string }): void => {
    this.importanceRef = node;
  };

  resetFormValues = (): void => {
    this.titleRef.value = '';
    this.descriptionRef.value = '';
    this.importanceRef.value = '3';
  };

  render(): JSX.Element {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input ref={this.setTitleRef} type="text" id="title" placeholder="Title" />
          <textarea
            ref={this.setDescriptionRef}
            rows={5}
            id="description"
            placeholder="Description"
          />
          <input
            ref={this.setImportanceRef}
            type="number"
            id="importance"
            min={1}
            max={5}
            defaultValue={3}
            onChange={this.onImportanceChange}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}

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

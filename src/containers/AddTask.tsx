import * as React from "react";
import {debounce} from "lodash-es";
import {addTask} from "../store/taskList/actions";
import {Dispatch} from "redux";
import {Task} from "../store/taskList/types";
import {connect} from "react-redux";

interface AddTaskDispatchProps {
    addTask: (task: Task) => void
}

type AddTaskProps = AddTaskDispatchProps

class AddTask extends React.Component<AddTaskProps> {
    titleRef : { value: string } | null = null
    descriptionRef : {value: string} | null = null
    importanceRef: {value: string} | null = null

    resetFormValues = () => {
        this.titleRef.value = ""
        this.descriptionRef.value = ""
        this.importanceRef.value = "3"
    }

    onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!this.titleRef.value.trim()) {
            return
        }
        this.props.addTask({
            title: this.titleRef.value.trim(),
            description: this.descriptionRef.value.trim(),
            importance: +this.importanceRef.value,
            addDate: Date.now()
        })

        this.resetFormValues()
    }
    setTitleRef = (node: {value: string}) => {
        this.titleRef = node
    }
    setDescriptionRef = (node: {value: string}) => {
        this.descriptionRef = node
    }
    setImportanceRef = (node: {value: string}) => {
        this.importanceRef = node
    }

    onImportanceChange = debounce(() => {
        const value = Math.min(Math.max(+this.importanceRef.value, 1), 5)
        this.importanceRef.value = value.toString()
    }, 500)

    render() {
        return <div>
            <form
              onSubmit={ this.onSubmit }
            >
                <input
                  ref={ this.setTitleRef }
                  type="text"
                  id="title"
                  placeholder="Title"
                />
                <textarea
                  ref={ this.setDescriptionRef }
                  rows = { 5 }
                  id="description"
                  placeholder="Description"
                />
                <input
                  ref={ this.setImportanceRef }
                  type= "number"
                  id="importance"
                  min={1}
                  max={5}
                  defaultValue={3}
                  onChange={ this.onImportanceChange }
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : AddTaskDispatchProps => ({
    addTask: (task: Task) => dispatch( addTask(task) )
})

export default connect<null, AddTaskDispatchProps>(null, mapDispatchToProps)(AddTask)
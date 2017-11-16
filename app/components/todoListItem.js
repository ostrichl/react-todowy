import React, { Component } from 'react'


class TodoListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            error: null
        }
    }

    renderActionSection() {
        if(this.state.isEditing) {
            return (
                <td style={{textAlign: 'center'}}>
                    <button className="btn btn-small" onClick={this.onSave.bind(this)}>save</button>
                    <button className="btn btn-small" onClick={this.onCancel.bind(this)}>cancel</button>
                </td>
            )
        }

        return (
            <td style={{textAlign: 'center'}}>
                <button className="btn btn-small" onClick={this.onEdit.bind(this)}>edit</button>
                <button className="btn btn-small" onClick={this.onDelete.bind(this)}>delete</button>
            </td>
        )
    }

    renderTaskSection() {
        if(this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.onSave.bind(this)}>
                        <input className="form-input" type="text" defaultValue={this.props.task} ref="editInput"/>
                        {this.renderError()}
                    </form>
                </td>
            )
        }

        const taskStyle = {
            color: this.props.isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        }

        if(this.props.isCompleted) {
            return <td onClick={this.onToggle.bind(this)} style={taskStyle}>{this.props.task}</td>
        }

        return <td onClick={this.onToggle.bind(this)} style={taskStyle}><strike>{this.props.task}</strike></td>
    }

    onSave(event) {
        event.preventDafult()

        const oldTask = this.props.task
        const newTask = this.refs.editInput.value
        const error = this.props.validateTask(newTask)

        if(error) {
            this.state({error: error})
        }

        this.props.saveTask(oldTask, newTask)
        this.setState({isEditing: false})
    }

    onCancel() {
       this.setState({isEditing: false})
    }

    onToggle() {
        this.props.toggleTask(this.props.task)
    }

    onEdit() {
        this.setState({isEditing: true})
    }

    onDelete() {
        const currentTask = this.props.task
        this.props.deleteTask(currentTask)
    }

    renderError() {
        if(this.state.error) {
            return <div className="alert alert-error">{this.state.error}</div>
        }
        return null
    }

    render() {
        return (
            <tr key={this.props.index}>
                {this.renderTaskSection()}
                {this.renderActionSection()}
            </tr>
        )
    }
}

export default TodoListItem
import React, { Component } from 'react'

class TodoCreate extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: null
        }
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.handleCreate.bind(this)}>
                    <div className="col-8">
                        <input type="text" className="form-input" placeholder="input something" ref="createInput" />
                        {this.renderError()}
                    </div>
                    <div className="col-4">
                        <button className="btn">Create</button>
                    </div>
                </form>
            </div>
        )
    }

    handleCreate(event) {
        event.preventDefault();
        const task = this.refs.createInput.value
        //props???
        const error = this.props.validateTask(task)

        if(error) {
            this.setState({error: error})
            return
        }

        this.props.createTask(task)
        this.refs.createInput.value = ''
        this.setState({error: null})
    }

    renderError() {
        if(this.state.error) {
            return <div className="alert alert-error">{this.state.error}</div>
        }
        return null
    }
}

export default TodoCreate
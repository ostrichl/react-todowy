import React from 'react'
import TodoList from 'components/todoList'
import TodoCreate from 'components/todoCreate'

const todos = [
    {
        task: 'action todo one',
        isCompleted: true
    },
    {
        task: 'action todo two',
        isCompleted: false
    },
    {
        task: 'action todo three',
        isCompleted: false
    }
]

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: todos
        }
    }

    render() {
        return(
            <div className='row'>
                <div className='col-3'>
                </div>
                <div className='col-6'>
                    <h1>React TodoList</h1>
                    <TodoCreate todos={this.state.todos}
                        validateTask={this.validateTask.bind(this)}
                        createTask={this.createTask.bind(this)}/>
                    <TodoCreate todos={this.state.todos}
                        validateTask={this.state.todos.bind(this)}
                        deleteTask={this.state.todos.bind(this)}
                        toggle={this.state.todos.bind(this)}
                        saveTask={this.state.todos.bind(this)}/>
                </div>
                <div className='col-3'>
                </div>
            </div>
        )
    } 
}

export default App
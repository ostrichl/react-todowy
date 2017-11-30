import React, { Component } from 'react'
import _ from 'lodash'
import TodoListHeader from 'components/todoListHeader'
import TodoListItem from 'components/todoListItem'

class TodoList extends Component  {
    renderItem() {
        const props = _.omit(this.props, 'todos');
        return _.map(this.props.todos, (todos, index) => {
            return <TodoListItem key={index} {...todos} {...props} />
        })
    }

    render() {
        return (
            <table className="tabel table-striped">
                <TodoListHeader />
                <tbody>
                    {this.renderItem()}
                </tbody>
            </table>
        )
    }
}

export default TodoList
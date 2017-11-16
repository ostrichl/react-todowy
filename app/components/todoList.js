import React, { Component } from 'react'
import _ from 'lodash'
import TodoListHeader from 'components/todoListHeader'
import TodoListItem from 'components/todoListItem'
import default from './todoCreate';

class TodoList extends Component  {
    renderItem() {
        const props = _.omit(this.props, 'todos')
        return _.map(this.props.todos, (todo, index) => {
            return <TodoListItem key={index} {...todos} {...props} />>
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
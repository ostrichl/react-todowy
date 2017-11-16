import React, { Component } from 'react'
import default from '../../../../Library/Caches/typescript/2.6/node_modules/@types/utils-merge';

class TodoListHeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Action</th>
                </tr>  
            </thead>
        )
    }
}

export default TodoListHeader
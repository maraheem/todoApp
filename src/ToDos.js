import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ToDos extends Component {
    render() {
        return (
            <ul>
               {
                    this.props.todos.map((todo, i) => {
                        return (
                            <li key={i}>
                                <span>{todo}</span>
                                <button 
                                    onClick={(e) => {this.props.deleteToDo(todo)}}
                                >
                                x</button>
                            </li>
                        );
                    })
                }
            </ul>    
        );
    }
}
export default ToDos;
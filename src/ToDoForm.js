import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ToDoForm extends Component {    
    render() {
        return (
            <div>
                <form onSubmit={this.props.addToDo} >
                    <input type="text" name="todo" />
                    <button>Add ToDo</button>
                </form>
            </div>
        );
    }
}

export default ToDoForm;
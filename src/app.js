import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ToDoApp from './ToDoApp';
class ToDoList extends Component {
    render() {
        return (
            <div>
                <ToDoApp/>
            </div>    
        );
    }
}
ReactDOM.render(<ToDoList />,document.getElementById('root'));
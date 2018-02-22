import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import ToDoForm from './ToDoForm';
import ToDos from './ToDos';
class ToDoApp extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            todos: []            
        }
        this.addToDo = this.addToDo.bind(this);
        this.deleteToDo = this.deleteToDo.bind(this);
    }  
    addToDo(e) {
        e.preventDefault();
        const todo = e.target.todo.value;        
        if ( todo ) {            
            if (!this.state.todos.includes(todo)) {
                this.setState((prevState) => ({
                    todos: prevState.todos.concat(todo)         
                }));
            } else {
                console.log('duplicate entered');
            }
        }
        e.target.todo.value = "";
    }
    deleteToDo(todoToDelete) {       
        console.log("inside delete") ;
        let prevState = this.state;
        let newToDos = prevState.todos.filter((todo) => {
            return todo !== todoToDelete
        });       
        this.setState((prevState) => {
            return {
                todos: newToDos
            }
        })
    }
    render() {
        return (
            <div>
                <Header />
                <ToDoForm addToDo={this.addToDo}/>
                <ToDos todos={this.state.todos} deleteToDo={this.deleteToDo}/>
            </div>    
        );
    }
}
export default ToDoApp;
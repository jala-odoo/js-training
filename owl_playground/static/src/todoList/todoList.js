/** @odoo-module */

import { Component ,useState} from "@odoo/owl";
import { Todo } from "../todo/todo";
import { Counter } from "../counter/counter";
import { useAutofocus } from "../util";

export class TodoList extends Component{
    static components = { Counter,Todo  };
    static template = "owl_playground.TodoList";

    setup(){
        this.todoList = [];
        this.nextId = 1;
        this.todoList = useState([]);
        useAutofocus("todoListInput");    
    }
    addTodo(ev){

        if (ev.keyCode === 13 && ev.target.value != ''){
            this.todoList.push({ id:this.nextId++, description : ev.target.value , done:false});
            ev.target.value ='';
            Counter.increment;
            
        }
    }
    toggleDone(todoId){
        const todo = this.todoList.find((todo) => todo.id === todoId);
        if(todo){
            todo.done = !todo.done;
        }
    }
    removeTodo(todoId){
        const index = this.todoList.findIndex((todo) => todo.id === todoId);
        if(index >= 0 ){
            this.todoList.splice(index,1);
        }
    }
}

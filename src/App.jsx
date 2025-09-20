import './app.css';
import { useState } from 'react';
import AddTODOForm from './components/addTodoForm';
import TodoList from './components/todoList';

function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a To-Do App', completed: false },
        { id: 3, text: 'Master Next.js', completed: false },
    ]);

    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([
                ...todos,
                { id: Date.now(), text: newTodo, completed: false },
            ]);
            setNewTodo('');
        }
    };

    return (
        <div className="todo-app">
            <h1 className="todo-label">My To-Do List</h1>
            <AddTODOForm
                newTodo={newTodo}
                setNewTodo={setNewTodo}
                addTodo={addTodo}
            />
            <TodoList todos={todos} />
        </div>
    );
}

export default TodoApp;

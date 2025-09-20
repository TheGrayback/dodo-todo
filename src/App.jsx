import './app.css';
import { useState } from 'react';
import AddTODOForm from './components/addTodoForm';

function TodoList() {
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
            <ul className="todo-list custom-scrollbar">
                {todos.map((todo, index) => (
                    <li key={todo.id} className="todo-item">
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;

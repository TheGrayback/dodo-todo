import './app.css';
import { useState } from 'react';
import AddTODOForm from './components/AppTodoForm/AddTodoForm';
import TodoList from './components/TodoList/TodoList';
import Modal from './components/Modal/Modal';

function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a To-Do App', completed: false },
        { id: 3, text: 'Master Next.js', completed: false },
    ]);
    const [newTodo, setNewTodo] = useState('');
    const [editingTodo, setEditingTodo] = useState(false);

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([
                ...todos,
                { id: Date.now(), text: newTodo, completed: false },
            ]);
            setNewTodo('');
        }
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const editTodo = (id, newText) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="todo-app">
            <h1 className="todo-label">My To-Do List</h1>
            {editingTodo && (
                <Modal
                    editingTodo={editingTodo}
                    setEditingTodo={setEditingTodo}
                    editTodo={editTodo}
                />
            )}
            <AddTODOForm
                newTodo={newTodo}
                setNewTodo={setNewTodo}
                addTodo={addTodo}
            />
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
                setEditingTodo={setEditingTodo}
            />
        </div>
    );
}

export default TodoApp;

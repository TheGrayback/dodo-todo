import './app.css';
import { useState } from 'react';
import AddTODOForm from './components/AppTodoForm/AddTodoForm';
import TodoList from './components/TodoList/TodoList';
import Modal from './components/Modal/Modal';
import EmptyListPlaceholder from './components/EmptyListPlaceholder/EmptyListPlaceholder';
import SortControll from './components/SortControll/SortControll';

function TodoApp() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    // Sync todos with localStorage
    useState(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    const [newTodo, setNewTodo] = useState('');
    const [editingTodo, setEditingTodo] = useState(false);
    const [filter, setFilter] = useState('all');
    const [sortCompletedOnTop, setSortCompletedOnTop] = useState(false);

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

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'active') return !todo.completed;
        return true;
    });

    const sortedTodos = [...filteredTodos].sort((a, b) => {
        if (!sortCompletedOnTop) return a.completed - b.completed; // completed внизу
        return b.completed - a.completed; // completed сверху
    });

    return (
        <div className="todo-app">
            <h1 className="todo-label">Dodo To-Do</h1>
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
                filter={filter}
                setFilter={setFilter}
            />
            <SortControll
                filter={filter}
                setFilter={setFilter}
                sortCompletedOnTop={sortCompletedOnTop}
                setSortCompletedOnTop={setSortCompletedOnTop}
            />
            {sortedTodos.length === 0 ? (
                <EmptyListPlaceholder />
            ) : (
                <TodoList
                    todos={sortedTodos}
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                    setEditingTodo={setEditingTodo}
                />
            )}
        </div>
    );
}

export default TodoApp;

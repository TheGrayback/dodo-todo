import './app.css';
import { useEffect, useState } from 'react';
import AddTODOForm from './components/AppTodoForm/AddTodoForm';
import TodoList from './components/TodoList/TodoList';
import Modal from './components/Modal/Modal';
import EmptyListPlaceholder from './components/EmptyListPlaceholder/EmptyListPlaceholder';
import SortControll from './components/SortControll/SortControll';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';

function TodoApp() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const [newTodo, setNewTodo] = useState('');
    const [editingTodo, setEditingTodo] = useState(false);
    const [filter, setFilter] = useState('all');
    const [sortCompletedOnTop, setSortCompletedOnTop] = useState('default');

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

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedTodos = Array.from(todos);
        const [movedTodo] = reorderedTodos.splice(result.source.index, 1);
        reorderedTodos.splice(result.destination.index, 0, movedTodo);

        setTodos(reorderedTodos);
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'active') return !todo.completed;
        return true;
    });

    let visibleTodos = filteredTodos;
    if (sortCompletedOnTop === 'top') {
        visibleTodos = [...filteredTodos].sort(
            (a, b) => b.completed - a.completed
        );
    } else if (sortCompletedOnTop === 'bottom') {
        visibleTodos = [...filteredTodos].sort(
            (a, b) => a.completed - b.completed
        );
    }

    return (
        <div className='todo-app'>
            <h1 className='todo-label'>Dodo To-Do</h1>
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
            {visibleTodos.length === 0 ? (
                <EmptyListPlaceholder />
            ) : (
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId='todos'>
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <TodoList
                                    todos={visibleTodos}
                                    toggleTodo={toggleTodo}
                                    editTodo={editTodo}
                                    deleteTodo={deleteTodo}
                                    setEditingTodo={setEditingTodo}
                                />
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            )}
        </div>
    );
}

export default TodoApp;

import { useReducer, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Trash2 } from 'lucide-react';

const checkFromLocalStorage = () => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
};

const tasksReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK': {
            return [...state, action.payload];
        }
        case 'TOGGLE_TASK': {
            return state.map((task) =>
                task.id === action.payload
                    ? { ...task, completed: !task.completed }
                    : task
            );
        }
        case 'EDIT_TASK': {
            return state.map((task) =>
                task.id === action.payload.id
                    ? { ...task, text: action.payload.text }
                    : task
            );
        }
        case 'DELETE_TASK': {
            return state.filter((task) => task.id !== action.payload);
        }
        case 'REORDER_TASKS': {
            return action.payload;
        }
        default:
            return state;
    }
};

export const useTodos = () => {
    const [todos, dispatch] = useReducer(
        tasksReducer,
        [],
        checkFromLocalStorage
    );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        if (!text.trim()) return;

        const newTask = {
            id: Date.now(),
            text: text.trim(),
            completed: false,
        };

        dispatch({ type: 'ADD_TASK', payload: newTask });
        toast.success('Task added!');
    };

    const toggleTodo = (id) => {
        dispatch({ type: 'TOGGLE_TASK', payload: id });
    };

    const editTodo = (id, text) => {
        dispatch({ type: 'EDIT_TASK', payload: { id, text } });
        toast.success('Task updated!');
    };

    const deleteTodo = (id) => {
        dispatch({ type: 'DELETE_TASK', payload: id });
        toast(
            <div className='flex items-center gap-2'>
                <Trash2 className='text-red-500' size={24} />
                <span>Task deleted!</span>
            </div>
        );
    };

    const reorderTodo = (newTodos) => {
        dispatch({ type: 'REORDER_TASKS', payload: newTodos });
    };

    return {
        todos,
        addTodo,
        deleteTodo,
        reorderTodo,
        editTodo,
        toggleTodo,
    };
};

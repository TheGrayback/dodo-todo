import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

function TodoList({ todos, toggleTodo, editTodo, deleteTodo, setEditingTodo }) {
    return (
        <ul className={`${styles.list} custom-scrollbar`}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                    setEditingTodo={setEditingTodo}
                />
            ))}
        </ul>
    );
}

export default TodoList;

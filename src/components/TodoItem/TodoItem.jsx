import { Trash2, Edit2 } from 'lucide-react'; // импорт иконок
import styles from './TodoItem.module.css';

function TodoItem({ todo, toggleTodo, deleteTodo, setEditingTodo }) {
    return (
        <li key={todo.id} className={styles.item}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className={styles.checkbox}
            />

            <span className={`${styles.itemText} ${todo.completed ? styles.completed : ''}`}>
                {todo.text}
            </span>

            <div className={styles.btnContainer}>
                <button
                    className={styles.changeBtn}
                    onClick={() => setEditingTodo(todo)}
                >
                    <Edit2 size={16} />
                </button>
                <button
                    className={styles.deleteBtn}
                    onClick={() => deleteTodo(todo.id)}
                >
                    <Trash2 size={16} />
                </button>
            </div>
        </li>
    );
}

export default TodoItem;

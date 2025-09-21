import { useState } from 'react';
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

            <span className={styles.itemText}>{todo.text}</span>
            <div className={styles.btnContainer}>
                <button
                    className={styles.changeBtn}
                    onClick={() => setEditingTodo(todo)}
                >
                    C
                </button>
                <button
                    className={styles.deleteBtn}
                    onClick={() => deleteTodo(todo.id)}
                >
                    D
                </button>
            </div>
        </li>
    );
}

export default TodoItem;

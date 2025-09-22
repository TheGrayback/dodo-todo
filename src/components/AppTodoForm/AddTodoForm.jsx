import styles from './AddTodoForm.module.css';

function AddTODOForm({ newTodo, setNewTodo, addTodo }) {
    return (
        <div className={styles.todoInputContainer}>
            <div className={styles.inputWrapper}>
                <input
                    type="text"
                    className={styles.todoInput}
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            addTodo();
                        }
                    }}
                    placeholder="Add a new task"
                />
                <button className={styles.todoBtn} onClick={addTodo}>
                    Add
                </button>
            </div>
        </div>
    );
}

export default AddTODOForm;

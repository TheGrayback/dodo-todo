import styles from './AddTodoForm.module.css';

function AddTODOForm({ newTodo, setNewTodo, addTodo }) {
    return (
        <div className={styles.todoInputContainer}>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <button className={styles.todoBtn} onClick={addTodo}>
                Add
            </button>
        </div>
    );
}

export default AddTODOForm;

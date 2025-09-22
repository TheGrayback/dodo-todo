import styles from './Modal.module.css';

function Modal({ editingTodo, setEditingTodo, editTodo }) {
    const handleSave = () => {
        if (editingTodo.text.trim() !== '') {
            editTodo(editingTodo.id, editingTodo.text);
        }
        setEditingTodo(null);
    };

    return (
        <div className={styles.overlay} onClick={handleSave}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <h2 className={styles.title}>Edit Task</h2>
                <input
                    value={editingTodo.text}
                    onChange={(e) =>
                        setEditingTodo({ ...editingTodo, text: e.target.value })
                    }
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSave();
                        }
                    }}
                    autoFocus
                    className={styles.input}
                />
                <div className={styles.actions}>
                    <button onClick={handleSave} className={styles.saveBtn}>
                        Save
                    </button>
                    <button
                        onClick={() => setEditingTodo(null)}
                        className={styles.cancelBtn}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;

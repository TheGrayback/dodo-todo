function Modal({ editingTodo, setEditingTodo, editTodo }) {
    const handleSave = () => {
        if (editingTodo.text.trim() !== "") {
            editTodo(editingTodo.id, editingTodo.text);
        }
        setEditingTodo(null);
    };

    return (
        <div className="modal-overlay" onClick={handleSave /* закрытие по клику вне модалки */}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>Edit Task</h2>
                <input
                    value={editingTodo.text}
                    onChange={(e) =>
                        setEditingTodo({ ...editingTodo, text: e.target.value })
                    }
                    autoFocus
                />
                <div className="modal-actions">
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setEditingTodo(null)}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;

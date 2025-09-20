function AddTODOForm({ newTodo, setNewTodo, addTodo }) {
    return (
        <div className="todo-input-container">
            <input
                type="text"
                className="todo-input"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <button className="todo-button" onClick={addTodo}>
                Add
            </button>
        </div>
    );
}

export default AddTODOForm;

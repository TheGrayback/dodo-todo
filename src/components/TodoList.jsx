function TodoList({ todos }) {
    return (
        <ul className="todo-list custom-scrollbar">
            {todos.map((todo) => (
                <li key={todo.id} className="todo-item">
                    {todo.text}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
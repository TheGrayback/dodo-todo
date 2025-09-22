import { Draggable } from '@hello-pangea/dnd';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

function TodoList({ todos, toggleTodo, editTodo, deleteTodo, setEditingTodo }) {
    return (
        <ul className={`${styles.list} custom-scrollbar`}>
            {todos.map((todo, index) => (
                <Draggable
                    key={todo.id}
                    draggableId={String(todo.id)}
                    index={index}
                >
                    {(provided) => (
                        <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={styles.listItem}
                        >
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo}
                                deleteTodo={deleteTodo}
                                setEditingTodo={setEditingTodo}
                            />
                        </li>
                    )}
                </Draggable>
            ))}
        </ul>
    );
}

export default TodoList;

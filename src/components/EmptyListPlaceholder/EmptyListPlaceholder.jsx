import { ClipboardList } from 'lucide-react'; // иконки из lucide-react
import styles from './EmptyListPlaceholder.module.css';

function EmptyListPlaceholder() {
    return (
        <div className={styles.container}>
            <ClipboardList className={styles.icon} />
            <p className={styles.text}>
                No tasks available. Please add a task.
            </p>
        </div>
    );
}

export default EmptyListPlaceholder;

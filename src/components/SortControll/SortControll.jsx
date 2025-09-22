import styles from './SortControll.module.css';

function SortControll({ filter, setFilter, sortCompletedOnTop, setSortCompletedOnTop }) {
    return (
        <div className={styles.container}>
            {/* Фильтр */}
            <label className={styles.label}>
                Filter:
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className={styles.select}
                >
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                </select>
            </label>

            {/* Сортировка */}
            <label className={styles.sortLabel}>
                Completed tasks:
                <select
                    value={sortCompletedOnTop ? "top" : "bottom"}
                    onChange={(e) => setSortCompletedOnTop(e.target.value === "top")}
                    className={styles.select}
                >
                    <option value="top">On top</option>
                    <option value="bottom">On bottom</option>
                </select>
            </label>
        </div>
    );
}

export default SortControll;

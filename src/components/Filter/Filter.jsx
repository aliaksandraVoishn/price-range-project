import styles from "../Filter/Filter.module.scss";

export default function Filter() {
  return (
    <div className={styles.card__header}>
      <h2 className={styles.card__title}>Filters</h2>
      <button className={styles.card__close}>x</button>
    </div>
  );
}

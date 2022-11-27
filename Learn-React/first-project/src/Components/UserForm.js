import styles from "./UserForm.module.css";
import Card from "./Card";

function UserForm(props) {
  return (
    <Card>
      <form>
        <h2 className={styles.heading}>User Input Form</h2>
        <label className={styles["form-label"]}>Name</label>
        <input className={styles["form-input-name"]} type="text" />
        <label className={styles["form-label"]}>Age</label>
        <input className={styles["form-input-age"]} type="number" />
        <button className={styles["form-input-button"]} type="submit">Add</button>
      </form>
    </Card>
  );
}

export default UserForm;

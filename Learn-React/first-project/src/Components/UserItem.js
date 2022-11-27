import Card from "./Card";
import styles from "./UserItem.module.css";

function UserItem(props) {
  return (
    <Card>
      <ul>
        <div className={styles.name}>Name: {props.name}</div>
        <div className={styles.age}>Age: {props.age}</div>
      </ul>
    </Card>
  );
}

export default UserItem;

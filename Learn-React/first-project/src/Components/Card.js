import styles from "./Card.module.css";

function Card(props) {
    return (
        <div className={styles.general}>
            {props.children}
        </div>
    );
}

export default Card;
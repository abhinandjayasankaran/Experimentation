import styles from "./Modal.module.css";

function Modal(props) {
  return (
    <div>
      <div className={styles.overlay} onClick={props.close} />
      <div className={styles.modalContainer}>
        <div className={styles.header}>
          <h2>{props.heading}</h2>
        </div>
        <div className={styles.content}>
          <p>{props.content}</p>
        </div>
        <div className={styles.footer}>
          <button onClick={props.close}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

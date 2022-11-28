import styles from "./UserForm.module.css";
import Card from "./Card";
import Modal from "./Modal";
import { useState } from "react";

function UserForm(props) {
  const [showModal, setShowModal] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [modalHeading, setModalHeading] = useState("");
  const [modalContent, setModalContent] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setModalHeading("Invalid Entry");
      setModalContent("Please enter a valid name and age (non-empty values).");
      showModalHandler();
      return;
    }

    if (+enteredAge <= 0) {
      setModalHeading("Invalid Age");
      setModalContent("Please enter a valid age (> 0).");
      showModalHandler();
      return;
    }

    const userData = {
      name: enteredName,
      age: enteredAge
    }

    setEnteredName("");
    setEnteredAge("");

    props.addUser(userData);
  }

  function showModalHandler() {
    setShowModal(true);
  }

  function hideModalHandler() {
    setShowModal(false);
  }

  function getName(event){
    setEnteredName(event.target.value);
    console.log(event.target.value);
  }

  function getAge(event){
    setEnteredAge(event.target.value);
    console.log(event.target.value);
  }

  return (
    <Card>
      {showModal && <Modal heading={modalHeading} content={modalContent} close={hideModalHandler} />}
      <form>
        <h2 className={styles.heading}>User Input Form</h2>
        <label className={styles["form-label"]}>Name</label>
        <input className={styles["form-input-name"]} type="text" value={enteredName} onChange={getName}/>
        <label className={styles["form-label"]}>Age</label>
        <input className={styles["form-input-age"]} type="number" value={enteredAge} onChange={getAge}/>
        <button
          className={styles["form-input-button"]}
          onClick={submitHandler}
          type="submit"
        >
          Add
        </button>
      </form>
    </Card>
  );
}

export default UserForm;

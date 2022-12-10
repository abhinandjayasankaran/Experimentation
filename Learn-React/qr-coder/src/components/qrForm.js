import { useRef, useState } from "react";
import "../components/QRForm.css";

const typeSound = new Audio("/Assets/Sounds/ui_tap-variant-04.wav");
const submitSound = new Audio("/Assets/Sounds/navigation-cancel.wav");

function QRForm(props) {
  const [qrText, updateQrText] = useState("");
  const input = useRef();

  const inputHandler = () => {
    typeSound.play();
    updateQrText(input.current.value);
};

  const formHandler = (e) => {
    e.preventDefault();
    submitSound.play();
    console.log(qrText);
    props.create(qrText);
  };

  return (
    <div className="card">
      <form className="card__form" onSubmit={formHandler}>
        <h3 className="card__form__heading">Create QR Form</h3>
        <div className="card__form__row">
          <label className="card__form__label" htmlFor="name">
            Enter Text:
          </label>
          <input
            className="card__form__input"
            type="text"
            id="name"
            name="name"
            ref={input}
            onChange={inputHandler}
          />
        </div>
        <div className="card__form__row">
          <button type="submit" className="card__form__button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default QRForm;

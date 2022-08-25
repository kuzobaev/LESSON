import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();

  const [isNameValid, setIsNameValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);
  const [name, setName] = useState("");

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setIsNameValid(true);

    const enteredValue = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    if (enteredValue.trim().length < 4) {
      setIsNameValid(false);
      return;
    }
  };

  const nameInputBlurHandler = () => {
    setIsNameValid(true);
    const enteredValue = nameInputRef.current.value;
    if (enteredValue.trim().length < 4) {
      setIsTouched(false);
      setIsNameValid(false);
      return;
    }
    setIsTouched(true);
  };

  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
    setIsNameValid(true);
    isTouched(true);
    if (event.target.value.trim().length < 4) {
      setIsTouched(false);
      setIsNameValid(false);
      return;
    }
  };

  const inputClasses = isNameValid ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameInputChangeHandler}
          ref={nameInputRef}
          onBlur={nameInputBlurHandler}
          type="text"
          id="name"
        />
        {!isNameValid && (
          <p className="error-text">
            Your name shoud containr more than 3 characters
          </p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="email">Your Email</label>
        <input ref={emailInputRef} type="email" id="email" />
      </div>
      <div className="form-actions">
        <button disabled={!isTouched}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

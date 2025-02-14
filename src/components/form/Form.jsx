import { useMultipleForm } from "../../useMultipleForm";
import AttendeeDetail from "../attendeeDetails/AttendeeDetail";
import Ticket from "../ticket/Tickets";
import BookTicket from "../booktickets/BookTicket";
import styles from "./form.module.css";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/Context";

export default function Form() {
  const {
    setFormErrors,
    formErrors,
    formValue,
    validate,
    isSubmit,
    setIsSubmit,
    handleDownload,
  } = useContext(GlobalContext);
  const {
    steps,
    currentStepIndex,
    next,
    back,
    isFirstStep,
    isSecondStep,
    isLastStep,
  } = useMultipleForm(["Ticket Selection", "Attendee Details", "Ready"]);

  const displayStep = (step) => {
    switch (step) {
      case 0:
        return <BookTicket />;
      case 1:
        return <AttendeeDetail />;
      case 2:
        return <Ticket />;
      default:
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    setFormErrors(validate(formValue));
    setIsSubmit(true);
    next();
  }

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formValue).length === 0 && isSubmit) {
      // console.log(formValue);
    }
  }, [formErrors]);

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.subContainer}>
        <div className={styles.header}>
          <p className={styles.step}>{steps[currentStepIndex]} </p>
          <p className={styles.stepno}>
            Step {currentStepIndex + 1}/{steps.length}
          </p>
        </div>
        <div className={styles.progressbar}>
          <div
            className={styles.prog}
            style={{
              width: ` ${((currentStepIndex + 1) / steps.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className={styles.formBody}>
        {isFirstStep && (
          <div className={styles.subhead}>
            <div className={styles.title}>
              <h1>Techember Fest "25</h1>
              <p>
                Join us for an unforgettable experience at Techember Fest "25.
                Secure your spot now.
              </p>
            </div>
            <div>
              <span>📍04 Rumens road,Ikoyi,Lagos</span> <span>| |</span>{" "}
              <span>March 15,2025 | 7:00 PM</span>
            </div>
          </div>
        )}
        {isFirstStep && <hr></hr>}
        {isLastStep && (
          <div className={styles.ticketHead}>
            <h2>Your Ticket is Booked!</h2>
            <p>Check your email for a copy or you can download</p>
          </div>
        )}
        <div>{displayStep(currentStepIndex)}</div>
        <div className={styles.btnContainer}>
          {isFirstStep ? (
            <button type="reset">Cancel</button>
          ) : (
            <button type="button" onClick={back}>
              {isLastStep ? "Get My Free Ticket" : "Buy Another Ticket"}
            </button>
          )}
          {isFirstStep && <button type="submit">Next</button>}
          {isSecondStep && <button type="submit">Get My Free Ticket</button>}
          {isLastStep && (
            <button type="submit" onClick={handleDownload}>
              Download Ticket
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

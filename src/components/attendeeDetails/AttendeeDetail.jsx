import styles from "./attendeedetails.module.css";
import DragAndDrop from "../dragNdrop/DragAndDrop";
import { useContext } from "react";
import { GlobalContext } from "../../context/Context";

export default function AttendeeDetail() {
  const { handleChange, formValue, formErrors } = useContext(GlobalContext);
  return (
    <>
      <div className={styles.uploadcontainer}>
        <p>Upload Profile Picture</p>
        <DragAndDrop />
      </div>
      <hr></hr>

      <div>
        <p>Enter your name:</p>
        <input
          required
          type="text"
          name="fullname"
          onChange={handleChange}
          value={formValue.fullname}
        />
        <p style={{ color: "red", fontSize: "12px" }}>{formErrors.fullname}</p>
      </div>
      <div>
        <p>Enter your email* </p>
        <input
          type="email"
          name="email"
          placeholder="✉️ example@workmail.com"
          value={formValue.email}
          onChange={handleChange}
        />
        <p style={{ color: "red", fontSize: "12px" }}>{formErrors.email}</p>
      </div>
      <div>
        <p>Special request</p>
        <textarea
          rows={4}
          name="comment"
          placeholder="Textarea"
          onChange={handleChange}
          value={formValue.comment}
        />
        <p style={{ color: "red", fontSize: "12px" }}>{formErrors.comment}</p>
      </div>
    </>
  );
}

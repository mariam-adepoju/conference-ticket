import styles from "./bookticket.module.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/Context";

export default function BookTicket() {
  const { handleChange, formValue, formErrors } = useContext(GlobalContext);
  return (
    <>
      <div className={styles.container}>
        <p>Select Ticket Type:</p>
        <div className={styles.imputContainer}>
          <label>
            <input
              type="radio"
              name="tickettype"
              value="free"
              onChange={handleChange}
              checked={formValue.tickettype === "free"}
            />
            <p>Free</p>
            <span>REGULAR ACCESS </span>
            <span>20/52</span>
          </label>

          <label>
            <input
              type="radio"
              name="tickettype"
              value="vip"
              onChange={handleChange}
              checked={formValue.ticketType === "vip"}
            />
            <p>$150</p>
            <span>VIP ACCESS </span>
            <span>20/52</span>
          </label>

          <label>
            <input
              type="radio"
              name="tickettype"
              value="vvip"
              onChange={handleChange}
              checked={formValue.tickettype === "vvip"}
            />
            <p>$150</p>
            <span>VIP ACCESS </span>
            <span>20/52</span>
          </label>
        </div>
        <p style={{ color: "red", fontSize: "12px" }}>
          {formErrors.tickettype}
        </p>
      </div>
      <div>
        <p>Number of Tickets</p>
        <select name="ticketqty" value={"1"} onChange={handleChange}>
          <option value="">select</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <p>{formErrors.ticketqty}</p>
      </div>
    </>
  );
}

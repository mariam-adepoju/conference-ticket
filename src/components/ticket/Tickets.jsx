import styles from "./ticket.module.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import barcode from "../../assets/barcode.png";

export default function Tickets() {
  const { formValue, sectionRef, imageUrl } = useContext(GlobalContext);
  return (
    <div>
      <div ref={sectionRef} className={styles.ticket}>
        <div className={styles.ticketbody}>
          <div className={styles.subhead}>
            <h1>Techember Fest "25</h1>
            <div className={styles.subheadbody}>
              <p>📍04 Rumens road,Ikoyi,Lagos</p>
              <p>📅March 15,2025 | 7:00 PM</p>
            </div>
          </div>
          <div>
            <div>
              <img className={styles.photo} src={imageUrl} />
            </div>
            <div className={styles.details}>
              <div className={styles.userName}>
                <h4>Enter your name</h4>
                <p>{formValue.fullname}</p>
              </div>
              <div className={styles.userEmail}>
                <h4>Enter your email*</h4>
                <p>{formValue.email}</p>
              </div>
              <div className={styles.ticketType}>
                <h4>Ticket Type</h4>
                <p>{formValue.tickettype}</p>
              </div>
              <div className={styles.ticketQty}>
                <h4>Ticket for</h4>
                <p>{formValue.ticketqty}</p>
              </div>
            </div>
            <div className={styles.userRequest}>
              <h4>
                Special request?
                <p>
                  Nil?Or the users sad story they write in there gets this whole
                  space
                </p>
              </h4>
            </div>
          </div>
        </div>
        <div className={styles.ticketfooter}>
          <img src={barcode} alt="barcode" />
        </div>
      </div>
    </div>
  );
}

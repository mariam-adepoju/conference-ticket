import logo from "../../assets/logo.png";
import div from "../../assets/div.png";
import styles from "./header.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" />
      <div className={styles.nav}>
        <p>Events</p>
        <p>My Tickets</p>
        <p>About Project</p>
      </div>
      <div>
        <button className={styles.btn}>
          MY TICKETS
          <span>
            <img src={div} />
          </span>
        </button>
      </div>
    </div>
  );
}

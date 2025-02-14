import styles from "./header.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <img src="src/assets/logo.png " alt="logo" />
      <div className={styles.nav}>
        <p>Events</p>
        <p>My Tickets</p>
        <p>About Project</p>
      </div>
      <div>
        <button className={styles.btn}>
          MY TICKETS
          <span>
            <img src="src\assets\div.png" />
          </span>
        </button>
      </div>
    </div>
  );
}

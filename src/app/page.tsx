import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div>
          <h1>Work in Progress</h1>
          <p>The domain name <b>sulphurdev.co.uk</b> is being reserved for future use.</p>
          <p>You may go to my <Link className={styles.link} href="https://robuxtrex.co.uk">primary site</Link> for more information about me!</p>
        </div>
      </div>
    </div>
  );
}

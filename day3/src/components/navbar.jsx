import styles from "./page.module.css"
import Link from "next/link"
const navbar = () => {
  return (
    <>
      <div className={styles.main}>
        <ul className={styles.ul}>
          <li>
            <Link href={"/"} className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className={styles.link}>
              About Us
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className={styles.link}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default navbar
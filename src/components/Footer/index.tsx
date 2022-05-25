import styles from './styles.module.scss'

export const Footer = () => (
  <footer>
    <div className={styles.container}>
      <img src="/logo.svg" alt="Logo da agência digital Enver" />

      <ul className={styles.links}>
        <li>
          <a href="/">Support</a>
        </li>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        <li>
          <a href="/">Terms and Conditions</a>
        </li>
      </ul>

      <h6>© {new Date().getFullYear()} Enver, All Rights Reserved</h6>
    </div>
  </footer>
)

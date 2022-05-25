import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

export const Header = () => {
  const [activeToggle, setActiveToggle] = useState(false)

  useEffect(() => {
    const valueOverflow = activeToggle ? 'hidden' : 'auto'
    document.body.style.overflow = valueOverflow

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeToggle])

  return (
    <header style={{ zIndex: 10 }}>
      <div className={styles.container}>
        <img src="/logo.svg" alt="Logo da agência Enver" />

        <nav>
          <ul
            className={`${styles.navigation} ${
              activeToggle ? styles.active : ''
            }`}
          >
            <li className={styles.active}>Home</li>
            <li>Services</li>
            <li>Our Project</li>
            <li>About us</li>
          </ul>
        </nav>

        <button type="button" className={styles.contact}>
          Contact us
        </button>

        <button
          type="button"
          onClick={() => setActiveToggle(!activeToggle)}
          className={`${styles.toggle} ${activeToggle ? styles.active : ''}`}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

import styles from './styles.module.scss'

export const Portofolio = () => (
  <section>
    <div>
      <h1 className={styles.title}>Our Awesome Portofolio</h1>

      <div className={styles.projects}>
        <img src="/portofolio/project-1.png" alt="" />
        <img src="/portofolio/project-2.png" alt="" />
        <img src="/portofolio/project-3.png" alt="" />
      </div>
    </div>
  </section>
)

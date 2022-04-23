import Head from 'next/head'

import { Header } from 'components/Header'
import { BannerHero } from 'components/BannerHero'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Digital Agency Enver</title>
      </Head>

      <Header />
      <BannerHero />

      {/* <header>
        <div>
          <h1>header</h1>
        </div>
      </header>

      <section>
        <div>
          <h1>section 1</h1>
        </div>
      </section>

      <section>
        <div>
          <h1>section 2</h1>
        </div>
      </section>

      <footer>
        <div>
          <h1>footer 2</h1>
        </div>
      </footer> */}
    </div>
  )
}

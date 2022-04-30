import Head from 'next/head'

import { Header } from 'components/Header'
import { BannerHero } from 'components/BannerHero'
import { Apresentation } from 'components/Apresentation'
import { Services } from 'components/Services'
import { Portofolio } from 'components/Portofolio'
import { Contact } from 'components/Contact'
import { Footer } from 'components/Footer'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Digital Agency Enver</title>
      </Head>

      <Header />
      <BannerHero />
      <Apresentation />
      <Services />
      {/* <Portofolio />
      <Contact />
      <Footer /> */}
    </div>
  )
}

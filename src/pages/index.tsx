import Head from 'next/head'

import { Header } from 'components/Header'
import { BannerHero } from 'components/BannerHero'
import { Apresentation } from 'components/Apresentation'
import { Services } from 'components/Services'
import { Portofolio } from 'components/Portofolio'

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
      <Portofolio />
    </div>
  )
}

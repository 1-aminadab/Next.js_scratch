import styles from '@/styles/Home.module.css'

import Head from 'next/head'

export default function Home() {
  return (
        <div className={styles.container}>
          <Head>
            <title>next crash course</title>
            <meta property="og:title" content="My page title" key="title" />
          </Head>
          <h1>Hello world</h1>
        </div>
  )
}

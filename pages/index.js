import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Swee Lee</title>
        <meta name="description" content="Asia's Largest Music Store – Musical Instruments | Swee Lee Singapore" />
        <link rel="icon" href="./img/favicon.ico" />
      </Head>
      <Intro/>
       
    </div>
  )
}

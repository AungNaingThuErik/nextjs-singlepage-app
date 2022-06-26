import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import Creators from '../components/Creators'
import Artists from '../components/Artists'
import { data } from '../data'

export default function Home({creators}) {
  return (
    <div>
      <Head>
        <title>Swee Lee</title>
        <meta name="description" content="Asia's Largest Music Store – Musical Instruments | Swee Lee Singapore" />
        <link rel="icon" href="./img/favicon.ico" />
      </Head>
      <Intro/>
      <Creators creators={creators}/>
      <Artists/>
    </div>
  )
}


export const getStaticProps = async () =>{
  const creators = data;
  return{
    props: {creators},
  }
}
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {leaguesResponseType} from '../types'


const Home: NextPage = () => {
  const [data,setData] = useState<leaguesResponseType>([]);
  useEffect(() => {
    axios.get('/api/getSummoners').then(res => res.data).then(data => { console.log(data);setData(data) })
  },[])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        {data.map(summoner => <p key={summoner.summonerName}>name:{summoner.summonerName} LP:{summoner.leaguePoints} winrate:{(summoner.losses / summoner.wins) * 100}</p>)} 
      </main>
    </div>
  )
}

export default Home

import type { NextPage } from 'next'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [messages, setMessages] = useState<Data[]>([])
  const [id, setId] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(function () {
    window
      .fetch('/api/hello')
      .then((res) => res.json())
      .then((res) => {
        setMessages(res)
        setLoading(false)
      })
  }, [])

  const msg = messages.find((msg) => msg.id === id)

  return (
    <div className={styles.container}>
      <Head>
        <title>Mensajitos para Vale ✨</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <nav className="h-12 w-full p-6 font-bold">
        <Link href="/">
          <a>Mensajitos</a>
        </Link>
      </nav>
      <main className="py-8 text-center">
        {loading ? (
          'Loading...'
        ) : (
          <Image key={msg?.id} alt={msg?.title} height={500} src={msg?.url as string} width={500} />
        )}
        <div className="flex justify-around ">
          <button
            className={`${id === 0 ? 'text-gray-500' : 'font-bold'}`}
            disabled={id === 0}
            type="button"
            onClick={() => setId(id - 1)}
          >
            {'Anterior'}
          </button>

          <button
            className={`${id === messages.length - 1 ? 'text-gray-500' : 'font-bold'}`}
            disabled={id === messages.length - 1}
            type="button"
            onClick={() => setId(id + 1)}
          >
            {'Próximo'}
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home

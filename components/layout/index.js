import React from 'react'
import Footer from '../footer'
import Header from '../header'
import styles from './Layout.module.css'
import Head from 'next/head'

export default function Layout({children, pageTitle}) {

  return (
    <>
      <Head>
        <title>Basic Next JS - {pageTitle}</title>
        <meta name="description" content="Website Basic Next JS" />
      </Head>
      <div className={styles.container}>
        <Header />
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>Made With <span className={styles.love}>❤</span> By <a className={styles.a} href="https://www.facebook.com/Jamal.Pebisnis.Sukses" target="_blank">Jamal</a></p>
    </footer>
  )
}

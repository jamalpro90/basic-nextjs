import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.ul}>
        <li className={styles.li}><Link href='/'>Home</Link></li>
        <li className={styles.li}><Link href='/blog'>Blog</Link></li>
        <li className={styles.li}><Link href='/users'>User</Link></li>
      </ul>
    </header>
  )
}

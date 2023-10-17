import Link from 'next/link'
import React from 'react'
import styles from "./logo.module.css"

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>HEXSHOP</Link>

  )
}

export default Logo

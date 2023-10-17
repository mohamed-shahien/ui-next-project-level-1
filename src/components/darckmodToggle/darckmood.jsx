"use client"
import { useContext } from 'react'
import styles from './darckmode.module.css'
import { ThemeContext } from '@/context/ThemeContexe'

const Darckmood = () => {

    const {mode ,toggle} = useContext(ThemeContext)
    return (
        <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🌚</div>
        <div 
        className={styles.switcher}
        style={mode === "light" ? {left:"2px"}:{right:"2px"}}
        />
        </div>
    )
}

export default Darckmood

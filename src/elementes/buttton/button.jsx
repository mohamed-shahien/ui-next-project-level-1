"use client"
import styles from "./button.module.css"
const Button = () => {
    return (
        <button className={styles.logout}
                onClick={()=>{console.log("ff");}}
                >log out</button>
    )
}

export default Button

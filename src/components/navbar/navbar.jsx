
import Link from "next/link"
import styles from "./navbar.module.css"
import { linkes } from "./data"
import Button from "../../elementes/buttton/button"
import Logo from "@/elementes/logo/logo"
import Darckmood from "../darckmodToggle/darckmood"
const Navbar = () => {
  return (
    <div className={styles.container}>
        <Logo/>
        <div className={styles.linkes}>
          <Darckmood/>
            {linkes.map((cur)=>(
                <Link href={cur.url} key={cur.id}>{cur.title}</Link>
            ))}
            
        <Button/>
        </div>
    </div>
  )
}

export default Navbar

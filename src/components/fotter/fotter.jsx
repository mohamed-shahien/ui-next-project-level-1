import Image from "next/image"
import styles from "./fotter.module.css"
import { icons } from "./data"
const Fotter = () => {
  return (
    <div className={styles.container}>
      <div className="">© 2023 Hexashop. all right reserved</div>
      <div className={styles.social}>
        {icons.map(item =>

        <Image
        key={item.id}
        src={item.url}
        width={20}
        height={20}
        className={styles.icon}
        alt={item.name}
        />
        )}


      </div>
    </div>
  )
}

export default Fotter

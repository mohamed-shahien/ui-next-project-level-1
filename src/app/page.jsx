import Image from 'next/image'
import hero from '../../public/images/hero.svg'
import styles from './global.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>sit amet consectetur adipisicing.</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quae, obcaecati eum molestias sapiente ratione?
        </p>
        <button className={styles.button}>shop now</button>
      </div>
      <div className={styles.col}>
        <Image src={hero} alt='hexa' className={styles.img}/>
      </div>
      
    </div>
  )
}

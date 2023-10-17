import Link from 'next/link'
import styles from './product.module.css'
import Image from 'next/image'
export const metadata = {
    title: 'HexaStor - Blog',
    description: 'An apple mobile which is nothing like apple',
}
async function getData(){
    const res = await fetch('https://dummyjson.com/products')
    if(!res.ok){
        throw new Error('failed to fetch data')
    }
    return res.json()
}
async function Prouduct(){
    const data = await getData()
    const product = data.products;
    return (
        <div className={styles.main_container}>
            {
                product.map(prou =>(
                    <Link href={`/blog/${prou.id}`} className={styles.post} key={prou.id}>
                        <div className={styles.img_container}>
                            <Image 
                                className={styles.image}
                                src={prou.thumbnail}
                                width={350}
                                height={350}
                                alt='post image'
                            />
                        </div>
                        <div className={styles.content}>
                            <h1 className={styles.title}>{prou.title}</h1>
                            <p className={styles.text}>{prou.description}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Prouduct

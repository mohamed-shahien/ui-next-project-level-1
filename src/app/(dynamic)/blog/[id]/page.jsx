import React from 'react';
import styles from './page.module.css'
import Image from 'next/image'
// call items from API
async function getData(id){
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  if(!res.ok){
      throw new Error('failed to fetch data')
  }
  return res.json()
}
// metadata
export async function generateMetadata({params}){
  const product = await getData(params.id)
  return{
    title:product.title,
    description: product.description
  }
} 
async function Post ({params}){
  const product = await getData(params.id)
  
  return (
    <div>
      <div className={styles.container}>
        <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src={product.thumbnail}
          alt='post img'
          fill={true}/>
          <span className={styles.outher}>{product.category}</span>
        </div>
        </header>
        <div className={styles.content}>
          <div className={styles.gallary}>
            {product.images.map(imag => (
              <Image
              key={product.id}
              src={imag}
              alt={product.title}
              width={100}
              height={100}
              />
            ))}
          </div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sequi assumenda recusandae facilis labore molestias voluptate quisquam nostrum, eaque reiciendis dolore libero, distinctio aperiam aliquam! Iste eos exercitationem eveniet itaque sunt, non esse qui dicta eligendi et perferendis excepturi commodi dignissimos eius nostrum soluta nulla. Quis vitae expedita libero fugit!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Post

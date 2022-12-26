import React from 'react'
import Image from 'next/image'
import styles from "../styles/judgesCarousel.module.css"
import photo from "../public/model.png"

const JudgesCarousel = () => {
  return (
    <section className={styles.container}>
        <div className={styles.slider}>
           <div className={styles.slide_track}>

           <div className={styles.slide}>
                <Image  className={styles.images} src={photo}/>
              </div>
              <div className={styles.slide}>
                <Image  className={styles.images} src={photo}/>
              </div>
              <div className={styles.slide}>
                <Image  className={styles.images} src={photo}/>
              </div>
              <div className={styles.slide}>
                <Image  className={styles.images} src={photo}/>
              </div>
              <div className={styles.slide}>
                <Image  className={styles.images} src={photo}/>
              </div>
              <div className={styles.slide}>
                <Image  className={styles.images} src={photo}/>
              </div>
              <div className={styles.slide}>
                <Image  className={styles.images} src={photo}/>
              </div>
              <div className={styles.slide}>
                <Image  className={styles.images} src={photo}/>
              </div>
              <div className={styles.slide}>
                <Image  className={styles.images} src={photo}/>
              </div>
              <div className={styles.slide}>
                <Image  className={styles.images} src={photo}/>
              </div>
              <div className={styles.slide}>
                <Image  className={styles.images} src={photo}/>
              </div>
              <div className={styles.slide}>
                <Image  className={styles.images} src={photo}/>
              </div>
              <div className={styles.slide}>
                <Image  className={styles.images} src={photo}/>
              </div>
              <div className={styles.slide}>
                <Image  className={styles.images} src={photo}/>
              </div>
              <div className={styles.slide}>
                <Image  className={styles.images} src={photo}/>
              </div>
              <div className={styles.slide}>
                <Image  className={styles.images} src={photo}/>
              </div>
              <div className={styles.slide}>
                <Image  className={styles.images} src={photo}/>
              </div>
              <div className={styles.slide}>
                <Image  className={styles.images} src={photo}/>
              </div>
              

           </div>
        </div>
    </section>
  )
}

export default JudgesCarousel

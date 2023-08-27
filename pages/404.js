import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "/styles/components/four_four.module.css"

const NotFound = () => {
  return (

    <div className={styles.bg}>

    <div className={styles.four__four_whole}>
      <div className={styles.four__four_whole_wrapper}>

      <div className={styles.top}>
        <ul className={styles.top_left_list}>

          <ul className={styles.logo_and_webdev}>
          <li className={styles.logo_item}>
          <Link alt href="/">
            <Image
            className={styles.logo_black_image}
              alt='logo'
              width={100}
              height={100}
              src={"/logo.png"}
            ></Image>
             </Link>
          </li>
          <li className={styles.name_item}>
          <Link alt href="/">
            <p className={styles.web_dev}>Astrum Stellar</p>
            </Link>


          </li>
          </ul>

          <ul className={styles.pink_and_four_four}>
          <li className={styles.sorry_message_item}>
            <p className={styles.sorry_message_p}>Aww sorry, pretty sure this page is still under construction, it might work next time!</p>
          </li>
          <li className={styles.four_oh_four_errors_item}>
            <p className={styles.four_oh_four_errors_item_p}>404 Error</p>
          </li>
          </ul>
        </ul>
      </div>

      <div className={styles.bottom}>
        <ul className={styles.bottom_list}>
          <li className={styles.my_name_item}>
            <p className={styles.my_name_p}>Deodatus Singiza</p>
          </li>
          <li className={styles.designer_tag_item}>
            <p className={styles.designer_tag_p}>HTML, CSS, JS, SQL, MongoDb </p>
          </li>
        </ul>


        <ul className={styles.icons_list}>
          <button 
          className={styles.return_button}>
            <Link
            alt='home_link'
            href='/'
            className={styles.button_link}>
            Return to Index
            </Link>
          </button>

        </ul>
        </div>
      </div>
    </div>

    </div>
  )
}

export default NotFound
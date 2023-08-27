import React from "react";
import styles from "../../styles/components/services.module.css"
import Image from "next/image";

function Services() {
    return (
        <>
        <div className={styles.services_parent}>
        <div className={styles.services_wrapper}>

            <div className={styles.black_box}>

                <ul className={styles.black_box_list}>

                    <li className={styles.black_box_item_1}>
                        <Image
                        alt="thumbnail"
                        width={100}
                        height={100}
                        className={styles.black_box_image_1}
                        src={"/bgwhole6.jpg"}
                        >
                        </Image>
                        <p>BRANDING</p>
                    </li>
                    <li className={styles.black_box_item_1}>
                    <Image
                        alt="thumbnail"
                        width={100}
                        height={100}
                        className={styles.black_box_image_1}
                        src={"/bgwhole6.jpg"}
                        >
                        </Image>
                        <p>FRONT END/BACK END</p>
                    </li>
                    <li className={styles.black_box_item_1}>
                    <Image
                        alt="thumbnail"
                        width={100}
                        height={100}
                        className={styles.black_box_image_1}
                        src={"/bgwhole6.jpg"}
                        >
                        </Image>
                        <p>UI /UX</p>
                    </li>
                    <li className={styles.black_box_item_1}>
                    <Image
                        alt="thumbnail"
                        width={100}
                        height={100}
                        className={styles.black_box_image_1}
                        src={"/bgwhole6.jpg"}
                        >
                        </Image>
                        <p>UI /UX</p>
                    </li>
                    <li className={styles.black_box_item_1}>
                    <Image
                        alt="thumbnail"
                        width={100}
                        height={100}
                        className={styles.black_box_image_1}
                        src={"/bgwhole6.jpg"}
                        >
                        </Image>
                        <p>AUDIO</p>
                    </li>
                    <li className={styles.black_box_item_1}>
                    <Image
                        alt="thumbnail"
                        width={100}
                        height={100}
                        className={styles.black_box_image_1}
                        src={"/bgwhole6.jpg"}
                        >
                        </Image>
                        <p>HOSTING</p>
                    </li>
                    <li className={styles.black_box_item_1}>
                    <Image
                        alt="thumbnail"
                        width={100}
                        height={100}
                        className={styles.black_box_image_1}
                        src={"/bgwhole6.jpg"}
                        >
                        </Image>
                        <p>LOGOS</p>
                    </li>
                    


                </ul>
            </div>
        </div>
        </div>
        </>
    )
}

export default Services;
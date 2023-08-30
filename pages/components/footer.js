import React from "react";
import Image from "next/image";
import styles from "../../styles/components/footer.module.css";

function Footer() {
  return (


    <div className={styles.footer}>
      <div className={styles.wrapper}>

      <div className={styles.separatorLine1}></div>

        <ul className={styles.sections}>
          <li className={styles.section}>
            <div className={styles.avatarContact}>
              <Image
                alt="Astrum Stellar"
                className={styles.avatar}
                width={44}
                height={44}
                src={"/logored.png"}
              />
              <p className={styles.astrumBottomName}>Astrum Stellar</p>
              <button className={styles.contactButton}>
                <p className={styles.contactParagraph}>Contact</p>
              </button>
            </div>
          </li>

          <ul className={styles.list_sections}>
          <li className={styles.section}>
            <div className={styles.pagesLinksServices}>
              <div className={styles.sectionTitle}>Pages</div>
              <ul className={styles.list}>
                <li className={styles.item}>Open Ai</li>
                <li className={styles.item}>Blender 3D</li>
                <li className={styles.item}>Visual Studio</li>
                <li className={styles.item}>Fl Studio</li>
              </ul>
            </div>
          </li>
          <li className={styles.section}>
            <div className={styles.pagesLinksServices}>
              <div className={styles.sectionTitle}>Helpful Links</div>
              <ul className={styles.list}>
                <li className={styles.item}>Open Ai</li>
                <li className={styles.item}>Blender 3D</li>
                <li className={styles.item}>Visual Studio</li>
                <li className={styles.item}>Fl Studio</li>
              </ul>
            </div>
          </li>
          <li className={styles.section}>
            <div className={styles.pagesLinksServices}>
              <div className={styles.sectionTitle}>Services</div>
              <ul className={styles.list}>
                <li className={styles.item}>Open Ai</li>
                <li className={styles.item}>Blender 3D</li>
                <li className={styles.item}>Visual Studio</li>
                <li className={styles.item}>Fl Studio</li>
              </ul>
            </div>
          </li>
        </ul>
        </ul>

        <div className={styles.separatorLine1}></div>

        <ul className={styles.iconsAndCopy}>
          <li className={styles.iconWrapper}>
            <Image
              alt="Upwork"
              className={styles.imageIcon}
              width={44}
              height={44}
              src={"/upwork.jpg"}
            />
            <Image
              alt="Dribbble"
              className={styles.imageIcon}
              width={44}
              height={44}
              src={"/dribble.jpg"}
            />
            <Image
              alt="Indeed"
              className={styles.imageIcon}
              width={44}
              height={44}
              src={"/indeed.jpg"}
            />
            <Image
              alt="SoundCloud"
              className={styles.imageIcon}
              width={44}
              height={44}
              src={"/soundcloud.jpg"}
            />
          </li>
          <li className={styles.copyRight}>
            <p>© Astrumstellar | Stellarspace | Deo Singiza</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

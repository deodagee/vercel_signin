import styles from "../../styles/components/header.module.css";
import Image from "next/image";
import Link from "next/link";

function Header() {

  return (

    <>
      <div className={styles.parent}>

        <div className={styles.parent_wrapper}>



          <ol className={styles.logo_and_info}>

            <li className={styles.sample_logo}>
              <Image
              className={styles.header_logo}
                alt="logo"
                width={50}
                height={50}
                src={"/logored.png"}
              >
              </Image>
            </li>

            <li className={styles.signature}>
              <Image
                className="w-30 h-7"

                aria-label="signature"
                alt="signature"
                width={90}
                height={90}
                src={"/signaturewhite.png"}
              >
              </Image>
            </li>

            <li className={styles.promo_list}>

              <p className={styles.promo1}>
                Private Domains
              </p>
              <p className={styles.promo2}>
                Dall-E Engines
              </p>
              <p className={styles.promo3}>
                3D Renders
              </p>
              <p className={styles.promo4}>
                Wix?
              </p>
              <p className={styles.promo4}>
                Hostgator?
              </p>
            </li>

            <li className={styles.buttons} >
              <button className={styles.register_button}>
                <p className={styles.register}>Register</p>
              </button>
              <button className={styles.login_button}>
                <p className={styles.register}>Login</p>
              </button>
            </li>

          </ol>







          <ol className={styles.menubar}>


            <li className={styles.menulist}>
              <Link legacyBehavior
                href="/"
              >
                <span className={styles.features}> <p> Home </p>
                </span>
              </Link >



              <Link legacyBehavior
                href="/services"
              >
                <span className={styles.features}> <p> Services </p>
                </span>

              </Link>




              <Link legacyBehavior
                href="/pricing"
              >
                <span className={styles.features}> <p> Pricing </p>
                </span>

              </Link>




              <Link legacyBehavior
                href="/projects"
              >
                <span className={styles.features}> <p> Projects </p>
                </span>

              </Link>




              <Link legacyBehavior
                href="/contact"
              >
                <span className={styles.features}> <p> Contact Me </p>
                </span>

              </Link>


              <Link legacyBehavior
                href="https://github.com/deodagee?tab=repositories"
              >
                <span className={styles.features}> <p> Source Code </p>
                </span>

              </Link>
            </li>

          </ol>


        </div>
      </div>
    </>
  )
}

export default Header;
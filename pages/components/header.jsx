import styles from "../../styles/components/header.module.css";
import xsmStyles from "../../styles/components/header_xsm_mobile.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"


function Header() {

  const { data: session } = useSession()
  
  if(session) {
  return (

    <>
      <div className={styles.parent}>

        <div className={styles.parent_wrapper}>

          <ul className={`${styles.logo__signature_and_button_parent} ${xsmStyles.logo__signature_and_button_parent_xsm}`}>

            <li className={styles.logo_item}>
              <Image
                className={`${styles.header_logo} ${xsmStyles.header_logo_xsm}`} alt="logo"
                width={50}
                height={50}
                src={"/logored.png"}
              >
              </Image>
            </li>

            <li className={styles.signature_item}>
              <Image
                className={`${styles.header_signature} ${xsmStyles.header_signature_xsm}`} aria-label="signature"
                alt="signature"
                width={90}
                height={90}
                src={"/signaturewhite.png"}
              >
              </Image>
            </li>

            <ul className={`${styles.buttons} ${xsmStyles.buttons_xsm}`}>
              <li className={styles.register}>

                <button onClick={() => signOut()} className={`${styles.register_button} ${xsmStyles.register_button_xsm}`}>
                  <p>Logout</p>
                </button>
                
              </li>
            </ul>
          </ul>

          <ol className={styles.menu_bars_wrapper}>

            <ul className={`${styles.first_menubar} ${xsmStyles.first_menubar_xsm}`}>
              <li className={styles.first_menubar_item}>
                <p className={styles.promo1}>
                  Private Domains
                </p>
              </li>
              <li className={styles.first_menubar_item}>
                <p className={styles.promo2}>
                  Dall-E Engines
                </p>
              </li>
              <li className={styles.first_menubar_item}>
                <p className={styles.promo3}>
                  3D Renders
                </p>
              </li>
              <li className={styles.first_menubar_item}>
                <p className={styles.promo4}>
                  Wix?
                </p>
              </li>
              <li className={styles.first_menubar_item}>
                <p className={styles.promo4}>
                  Hostgator?
                </p>
              </li>

            </ul>


            <ul className={`${styles.second_menubar} ${xsmStyles.second_menubar_xsm}`}>

              <li className={styles.menuitem}>
                <Link legacyBehavior
                  href="/"
                >
                  <p className={styles.second_menubar_item}>Home</p>
                </Link >
              </li>

              <li className={styles.menuitem}>
                <Link legacyBehavior
                  href="/services"
                >
                  <p className={styles.second_menubar_item}>Services</p>
                </Link>
              </li>

              <li className={styles.menuitem}>
                <Link legacyBehavior
                  href="/pricing"
                >
                  <p className={styles.second_menubar_item}>Pricing</p>
                </Link>
              </li>

              <li className={styles.menuitem}>
                <Link legacyBehavior
                  href="/projects"
                >
                  <p className={styles.second_menubar_item}>Projects</p>
                </Link>
              </li>

              <li className={styles.menuitem}>
                <Link legacyBehavior
                  href="/contact"
                >
                  <p className={styles.second_menubar_item}>Contact Me</p>
                </Link>
              </li>

              <li className={styles.menuitem}>
                <Link legacyBehavior
                  href="https://github.com/deodagee?tab=repositories"
                >
                  <p className={styles.second_menubar_item}>Source Code</p>
                </Link>
              </li>

            </ul>
          </ol>

        </div>
      </div>
    </>
  )
}


if(!session) {
  return (

    <>
      <div className={styles.parent}>

        <div className={styles.parent_wrapper}>

          <ul className={`${styles.logo__signature_and_button_parent} ${xsmStyles.logo__signature_and_button_parent_xsm}`}>

            <li className={styles.logo_item}>
              <Image
                className={`${styles.header_logo} ${xsmStyles.header_logo_xsm}`} alt="logo"
                width={50}
                height={50}
                src={"/logored.png"}
              >
              </Image>
            </li>

            <li className={styles.signature_item}>
              <Image
                className={`${styles.header_signature} ${xsmStyles.header_signature_xsm}`} aria-label="signature"
                alt="signature"
                width={90}
                height={90}
                src={"/signaturewhite.png"}
              >
              </Image>
            </li>

            <ul className={`${styles.buttons} ${xsmStyles.buttons_xsm}`}>
            <li className={styles.register}>
                <button onClick={() => signIn()} className={`${styles.login_button} ${xsmStyles.login_button_xsm}`}>
                  <p>Login</p>
                </button>
              </li>
            </ul>
          </ul>

          <ol className={styles.menu_bars_wrapper}>

            <ul className={`${styles.first_menubar} ${xsmStyles.first_menubar_xsm}`}>
              <li className={styles.first_menubar_item}>
                <p className={styles.promo1}>
                  Private Domains
                </p>
              </li>
              <li className={styles.first_menubar_item}>
                <p className={styles.promo2}>
                  Dall-E Engines
                </p>
              </li>
              <li className={styles.first_menubar_item}>
                <p className={styles.promo3}>
                  3D Renders
                </p>
              </li>
              <li className={styles.first_menubar_item}>
                <p className={styles.promo4}>
                  Wix?
                </p>
              </li>
              <li className={styles.first_menubar_item}>
                <p className={styles.promo4}>
                  Hostgator?
                </p>
              </li>

            </ul>


            <ul className={`${styles.second_menubar} ${xsmStyles.second_menubar_xsm}`}>

              <li className={styles.menuitem}>
                <Link legacyBehavior
                  href="/"
                >
                  <p className={styles.second_menubar_item}>Home</p>
                </Link >
              </li>

              <li className={styles.menuitem}>
                <Link legacyBehavior
                  href="/services"
                >
                  <p className={styles.second_menubar_item}>Services</p>
                </Link>
              </li>

              <li className={styles.menuitem}>
                <Link legacyBehavior
                  href="/pricing"
                >
                  <p className={styles.second_menubar_item}>Pricing</p>
                </Link>
              </li>

              <li className={styles.menuitem}>
                <Link legacyBehavior
                  href="/projects"
                >
                  <p className={styles.second_menubar_item}>Projects</p>
                </Link>
              </li>

              <li className={styles.menuitem}>
                <Link legacyBehavior
                  href="/contact"
                >
                  <p className={styles.second_menubar_item}>Contact Me</p>
                </Link>
              </li>

              <li className={styles.menuitem}>
                <Link legacyBehavior
                  href="https://github.com/deodagee?tab=repositories"
                >
                  <p className={styles.second_menubar_item}>Source Code</p>
                </Link>
              </li>

            </ul>
          </ol>

        </div>
      </div>
    </>
  )
}
}


export default Header;
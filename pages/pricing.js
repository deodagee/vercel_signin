import React from "react";
import { Image } from "@chakra-ui/react";
import styles from "/styles/components/body.module.css";



function Pricing ()  { 




    return (

        <>


        
<div className={styles.tables}>

<ol className={styles.div1}>
  <Image
    className={styles.staticthumbnail}
    alt="static"
    src="/staticrep.png"
    width={100}
    height={100}
  >
  </Image>
  <h1 className={styles.static_sites_title}>Static Sites</h1>
  <h2 className={styles.features_title}>Features</h2>

  <ul className={styles.static_sites_list}>
    <li>
      Original Js Code: *Base price of the project*
    </li>
    <li>
      Storage Space: 40 GB
    </li>
    <li>
      Ram: 1.3 GB
    </li>
    <li>
      Bandwith: Unmetered
    </li>
    <li>
      Ip: Dedicated Ip
    </li>
    <li>
      CDN: Cloudflare
    </li>
    <li>
      Deployment Sytem: Node.Js
    </li>
    <li>
      HOSTING: VPS, Fully Redundant Network
    </li>
    <li>
      CMS:No Integrated CMS, only 1 form per page
    </li>
    <li>
      Web Pages (Page Links): 3 Pages Min At No Extra Cost
    </li>
  </ul>
</ol>



<ol className={styles.div2}>
  <Image
    className={styles.dynamicthumbnail}
    alt="dynamic"
    src="/dynamicrep.png"
    width={100}
    height={100}
  >
  </Image>
  <h1 className={styles.dynamic_sites_title}>Dynamic Sites</h1>
  <h2 className={styles.features_title}>Features</h2>

  <ul className={styles.dynamic_sites_list}>
    <li>
      Original Js Code: *Base price of the project*
    </li>
    <li>
      Storage Space: 40 GB
    </li>
    <li>
      Ram: 1.3 GB
    </li>
    <li>
      Bandwith: Unmetered
    </li>
    <li>
      Ip: Dedicated Ip
    </li>
    <li>
      CDN: Cloudflare
    </li>
    <li>
      Deployment Sytem: Node.Js
    </li>
    <li>
      HOSTING: VPS, Fully Redundant Network
    </li>
    <li>
      CMS:No Integrated CMS, only 1 form per page
    </li>
    <li>
      Web Pages (Page Links): 3 Pages Min At No Extra Cost
    </li>
  </ul>
</ol>



<ol className={styles.div3}>
  <Image
    className={styles.ecommercethumbnail}
    alt="ecommerce"
    src="/ecommercerep.png"
    width={100}
    height={100}
  >
  </Image>
  <h1 className={styles.ecommerce_sites_title}>Ecommerce Sites</h1>
  <h2 className={styles.features_title}>Features</h2>


  <ul className={styles.ecommerce_sites_list}>
    <li>
      Original Js Code: *Base price of the project*
    </li>
    <li>
      Storage Space: 40 GB
    </li>
    <li>
      Ram: 1.3 GB
    </li>
    <li>
      Bandwith: Unmetered
    </li>
    <li>
      Ip: Dedicated Ip
    </li>
    <li>
      CDN: Cloudflare
    </li>
    <li>
      Deployment Sytem: Node.Js
    </li>
    <li>
      HOSTING: VPS, Fully Redundant Network
    </li>
    <li>
      CMS:No Integrated CMS, only 1 form per page
    </li>
    <li>
      Web Pages (Page Links): 3 Pages Min At No Extra Cost
    </li>
  </ul>
</ol>

</div>


        </>

    )
    
    
    
    




}

export default Pricing;

import React from "react";
import { Image } from "@chakra-ui/react";
import styles from "../../styles/components/pricing.module.css";
import { useState } from "react";
import Link from "next/link";


function Pricing() {

  const [displayUI, setDisplayUI] = useState('group_52374');
  const [clickedButton, setClickedButton] = useState("group_52374");
  const showUI1 = () => {
    setDisplayUI('group_52374');
    setClickedButton('group_52374');
  };

  const showUI2 = () => {
    setDisplayUI('group_52374_2');
    setClickedButton('group_52374_2');
  };


  return (

    <>
      <div className={styles.pricing_page}>
        <div className={styles.pricing_page_wrapper}>
          <div className={styles.pricing_headers_list_wrapper}>
            <ul className={styles.pricing_headers_list}>
              <li className={styles.tab_1}>
                <p>Static</p>
              </li>
              <span className={styles.seperator_line}></span>
              <li className={styles.tab_2}>
                <p>Dynamic</p>
              </li>
              <span className={styles.seperator_line}></span>
              <li className={styles.tab_3}>
                <p>Dynamic Plus</p>
              </li>
              <span className={styles.seperator_line}></span>
              <li className={styles.tab_4}>
                <p>Ecommerce</p>
              </li>
              <span className={styles.seperator_line}></span>
              <li className={styles.tab_5}>
                <p>E-Plus</p>
              </li>
            </ul>
          </div>

          <div className={styles.span_divider_parent}>
            <div class={styles.span_divider_wrapper}>
              <span class={styles.span_1}></span>
              <span class={styles.span_2}></span>
              <span class={styles.span_3}></span>
              <span class={styles.span_4}></span>
              <span class={styles.span_5}></span>
            </div>
          </div>

          <div className={styles.compare}>
            <div className={styles.we_offer}>
              <span
              ><span className={styles.we_offer_span}
              >Compare the quotes. </span
                ><span className={styles.we_offer_span2}
                >Better value, </span
                ><span className={styles.we_offer_span3}>
                  More web space.</span
                ></span
              >
            </div>
          </div>

          <div className={styles.pricing}>
            <div className={styles.pricing_wrapper}>

              <div className={styles.promo_regular_parent}>

                <ul className={styles.promo_regular_wrapper}>

                  <div className={styles.promo_price}>
                    <button
                      className={`${styles.your_session_has_tim} ${clickedButton === 'group_52374' ? styles.clickedButton : ''}`} onClick={showUI1}
                    ><p>Promo Price</p></button>
                  </div>

                  <div className={styles.regular}>
                    <button
                      className={`${styles.your_session_has_tim2} ${clickedButton === 'group_52374_2' ? styles.clickedButton : ''}`}
                      onClick={showUI2}
                    ><p>Regular</p></button>
                  </div>
                </ul>
              </div>


              <div className={styles.pricing_tab_groups_wrapper}>

                

              <div className={styles.pricing_tab_group_1}>
                  {displayUI === 'group_52374' && (
                    <div className={styles.group_52374}>
                      <div className={styles.frame_405}>
                        <div className={styles.frame_405_wrapper}>

                          <div className={styles.frame_wrapper}>
                            <div className={styles.frame_402}>

                            <div className={styles.title}>
                              <Link 
                              href={"/static"}
                              >
                              <h1 className={styles.your_session_has_tim3}>Static</h1>
                              </Link>
                              </div>
                              <ol className={styles.list_wrapper}>
                              <ul className={styles.percent_disclaimer}>
                                <div className={styles.save_up_to}>*60% OFF!</div>
                                <li className={styles.list_component2}>
                                </li>
                              </ul>

                                <ul className={styles.sites_list}>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Original Js Code:</span>
                                    <span className={styles.list_description}>Price Included </span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Storage Space:</span>
                                    <span className={styles.list_description}>40 GB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Ram Space:</span>
                                    <span className={styles.list_description}>1.3 GB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Bandwith:</span>
                                    <span className={styles.list_description}>Unmetered</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Ip:</span>
                                    <span className={styles.list_description}>Dedicated Ip</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*CDN:</span>
                                    <span className={styles.list_description}>Cloudflare</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Deployment Sytem:</span>
                                    <span className={styles.list_description}>Node.Js</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*HOSTING:</span>
                                    <span className={styles.list_description}>Fully Redundant VPS Network</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*CMS:</span>
                                    <span className={styles.list_description}>No Integrated CMS, 1 form per page</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Page Links (Local):</span>
                                    <span className={styles.list_description}> 3 Pages Min At No Extra Cost</span>
                                  </li>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>

                              </ol>
                            </div>


                            <div className={styles.frame_399}>
                              <div className={styles.frame_407}>
                                <div className={styles.frame_398}>
                                  <svg
                                    className={styles.frame_397}
                                    width="11"
                                    height="14"
                                    viewBox="0 0 11 21"
                                    fill="#ffffff"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                      fill="#ffffff"
                                    />
                                  </svg>
                                </div>
                                <div className={styles.your_session_has_tim5}>650</div>
                              </div>
                              <div className={styles.component_6}>
                                <button className={styles.label}> <Link href={"/pricing"}>Get Started </Link> </button>
                              </div>
                            </div>

                          </div>
                        </div>

                          <div className={styles.frame_wrapper}>
                            <div className={styles.frame_402}>
                            <div className={styles.title}>
                              <div className={styles.recommended_div}>
                                <div className={styles.your_session_has_tim8}>Recommended</div>
                              </div>
                              <Link 
                              href={"/dynamic"}
                              >
                              <h1 className={styles.your_session_has_tim3}>Dynamic</h1>
                              </Link>                              </div>
                              <ol className={styles.list_wrapper}>
                              <ul className={styles.percent_disclaimer}>
                                <div className={styles.save_up_to}>*60% OFF!</div>
                                <li className={styles.list_component2}>
                                </li>
                              </ul>
                                <ul className={styles.sites_list}>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Original Js Code:</span>
                                    <span className={styles.list_description}>Price Included </span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Storage Space:</span>
                                    <span className={styles.list_description}>40 GB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Ram Space:</span>
                                    <span className={styles.list_description}>1.3 GB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Bandwith:</span>
                                    <span className={styles.list_description}>Unmetered</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Ip:</span>
                                    <span className={styles.list_description}>Dedicated Ip</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*CDN:</span>
                                    <span className={styles.list_description}>Cloudflare</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Deployment Sytem:</span>
                                    <span className={styles.list_description}>Node.Js</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*HOSTING:</span>
                                    <span className={styles.list_description}>Fully Redundant VPS Network</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*CMS:</span>
                                    <span className={styles.list_description}>No Integrated CMS, 1 form per page</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Page Links (Local):</span>
                                    <span className={styles.list_description}> 3 Pages Min At No Extra Cost</span>
                                  </li>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>

                              </ol>
                            </div>
                            <div className={styles.frame_399}>
                              <div className={styles.frame_407}>
                                <div className={styles.frame_398}>
                                  <svg
                                    className={styles.frame_397}
                                    width="11"
                                    height="14"
                                    viewBox="0 0 11 21"
                                    fill="#ffffff"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                      fill="#ffffff"
                                    />
                                  </svg>
                                </div>
                                <div className={styles.your_session_has_tim5}>850</div>
                              </div>

                              <div className={styles.dynamic_get_started}>
                                <div className={styles.component_6}>
                                  <button className={styles.label}> <Link href={"/dynamic"}>Get Started</Link> </button>
                                </div>
                              </div>
                            </div>
                          </div>


                        <div className={styles.frame_wrapper}>
                          <div className={styles.frame_402}>
                          <div className={styles.title}>
                          <Link 
                              href={"/dynamicplus"}
                              >
                              <h1 className={styles.your_session_has_tim3}>Dynamic Plus</h1>
                              </Link>                            </div>
                            <ol className={styles.list_wrapper}>
                              <ul className={styles.percent_disclaimer}>
                                <div className={styles.save_up_to}>*60% OFF!</div>
                                <li className={styles.list_component2}>
                                </li>
                              </ul>
                              <ul className={styles.sites_list}>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Original Js Code:</span>
                                  <span className={styles.list_description}>Price Included </span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Storage Space:</span>
                                  <span className={styles.list_description}>240 GB</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Ram Space:</span>
                                  <span className={styles.list_description}>Up to 8 GB</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Bandwith:</span>
                                  <span className={styles.list_description}>Unmetered</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Ip:</span>
                                  <span className={styles.list_description}>Dedicated Ip</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*CDN:</span>
                                  <span className={styles.list_description}>Cloudflare</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Deployment Sytem:</span>
                                  <span className={styles.list_description}>Node.Js</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*HOSTING:</span>
                                  <span className={styles.list_description}>Fully Redundant VPS Network</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*CMS:</span>
                                  <span className={styles.list_description}>No Integrated CMS, 1 form per page</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Page Links (Local):</span>
                                  <span className={styles.list_description}>7 Pages Min At No Extra Cost</span>
                                </li>
                                <li className={styles.list_component2}>
                                </li>
                              </ul>
                            </ol>
                          </div>

                          <div className={styles.frame_399}>
                            <div className={styles.frame_407}>
                              <div className={styles.frame_398}>
                                <svg
                                  className={styles.frame_397}
                                  width="11"
                                  height="14"
                                  viewBox="0 0 11 21"
                                  fill="#ffffff"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 `8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                    fill="#ffffff"
                                  />
                                </svg>
                              </div>
                              <div className={styles.your_session_has_tim5}>650</div>
                            </div>
                            <div className={styles.dynamic_get_started}>
                              <div className={styles.component_6}>
                                <button className={styles.label}> <Link href={"/dynamic"}>Get Started</Link> </button>
                              </div>
                            </div>
                          </div>
                    
                        </div>


                        <div className={styles.frame_wrapper}>
                          <div className={styles.frame_402}>
                          <div className={styles.title}>
                          <Link 
                              href={"/ecommerce"}
                              >
                              <h1 className={styles.your_session_has_tim3}>Ecommerce</h1>
                              </Link>                            </div>
                            <ol className={styles.list_wrapper}>
                              <ul className={styles.percent_disclaimer}>
                                <div className={styles.save_up_to}>*60% OFF!</div>
                                <li className={styles.list_component2}>
                                </li>
                              </ul>
                              <ul className={styles.sites_list}>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Original Js Code:</span>
                                  <span className={styles.list_description}>Price Included </span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Storage Space:</span>
                                  <span className={styles.list_description}>80 GB</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Ram Space:</span>
                                  <span className={styles.list_description}>2.6 GB</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Bandwith:</span>
                                  <span className={styles.list_description}>Unmetered</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Ip:</span>
                                  <span className={styles.list_description}>Dedicated Ip</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*CDN:</span>
                                  <span className={styles.list_description}>Cloudflare</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Deployment Sytem:</span>
                                  <span className={styles.list_description}>Node.Js</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*HOSTING:</span>
                                  <span className={styles.list_description}>Fully Redundant VPS Network</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*CMS:</span>
                                  <span className={styles.list_description}>No Integrated CMS, 1 form per page</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Page Links (Local):</span>
                                  <span className={styles.list_description}> 5 Pages Min At No Extra Cost</span>
                                </li>
                                <li className={styles.list_component2}>
                                </li>
                              </ul>
                            </ol>
                          </div>
                          <div className={styles.frame_399}>
                            <div className={styles.frame_407}>
                              <div className={styles.frame_398}>
                                <svg
                                  className={styles.frame_397}
                                  width="11"
                                  height="14"
                                  viewBox="0 0 11 21"
                                  fill="#ffffff"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                    fill="#ffffff"
                                  />
                                </svg>
                              </div>
                              <div className={styles.your_session_has_tim5}>1050</div>
                            </div>
                            <div className={styles.component_6}>
                              <button className={styles.label}> <Link href={"/ecommerce"}>Get Started</Link> </button>
                            </div>
                          </div>
                        </div>



                        <div className={styles.frame_wrapper}>
                          <div className={styles.frame_402}>
                          <div className={styles.title}>
                            <h1 className={styles.your_session_has_tim3}>E-Plus</h1>
                            </div>
                            <ol className={styles.list_wrapper}>
                              <ul className={styles.percent_disclaimer}>
                                <div className={styles.save_up_to}>*60% OFF!</div>
                                <li className={styles.list_component2}>
                                </li>
                              </ul>
                              <ul className={styles.sites_list}>
                              <li className={styles.list_component}>
                                <span className={styles.list_title}>*Original Js Code:</span>
                                <span className={styles.list_description}>Price Included </span>
                              </li>
                              <li className={styles.list_component}>
                                <span className={styles.list_title}>*Storage Space:</span>
                                <span className={styles.list_description}>Up to 240 GB</span>
                              </li>
                              <li className={styles.list_component}>
                                <span className={styles.list_title}>*Ram Space:</span>
                                <span className={styles.list_description}>1up to 8GB</span>
                              </li>
                              <li className={styles.list_component}>
                                <span className={styles.list_title}>*Bandwith:</span>
                                <span className={styles.list_description}>Unmetered</span>
                              </li>
                              <li className={styles.list_component}>
                                <span className={styles.list_title}>*Ip:</span>
                                <span className={styles.list_description}>Dedicated Ip</span>
                              </li>
                              <li className={styles.list_component}>
                                <span className={styles.list_title}>*CDN:</span>
                                <span className={styles.list_description}>Cloudflare</span>
                              </li>
                              <li className={styles.list_component}>
                                <span className={styles.list_title}>*Deployment Sytem:</span>
                                <span className={styles.list_description}>Node.Js</span>
                              </li>
                              <li className={styles.list_component}>
                                <span className={styles.list_title}>*HOSTING:</span>
                                <span className={styles.list_description}>Fully Redundant VPS Network</span>
                              </li>
                              <li className={styles.list_component}>
                                <span className={styles.list_title}>*CMS:</span>
                                <span className={styles.list_description}>No Integrated CMS, 1 form per page</span>
                              </li>
                              <li className={styles.list_component}>
                                <span className={styles.list_title}>*Page Links (Local):</span>
                                <span className={styles.list_description}>7 Pages Min At No Extra Cost</span>
                              </li>
                              <li className={styles.list_component2}>
                              </li>
                            </ul>
                            </ol>
                          </div>
                          <div className={styles.frame_399}>
                            <div className={styles.frame_407}>
                              <div className={styles.frame_398}>
                                <svg
                                  className={styles.frame_397}
                                  width="11"
                                  height="14"
                                  viewBox="0 0 11 21"
                                  fill="#ffffff"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                    fill="#ffffff"
                                  />
                                </svg>
                              </div>
                              <div className={styles.your_session_has_tim5}>Quote</div>
                            </div>
                            <div className={styles.component_6}>
                              <button>
                                <div className={styles.label}> <Link href={"/eplus"}>Get Started</Link> </div></button>
                            </div>
                          </div>
                        </div>


                        
                      </div>
                    </div>
                  )}
                </div>



                <div className={styles.pricing_tab_group_2}>
                  {displayUI === 'group_52374_2' && (
                    <div className={styles.group_52374_2}>
                      <div className={styles.frame_405}>
                        <div className={styles.frame_405_wrapper}>

                          <div className={styles.frame_wrapper}>
                            <div className={styles.frame_402}>

                            <div className={styles.title}>
                              <Link 
                              href={"/static"}
                              >
                              <h1 className={styles.your_session_has_tim3}>Static</h1>
                              </Link>
                              </div>
                              <ol className={styles.list_wrapper}>
                                <ul className={styles.regular_disclaimer}>
                                  <div className={styles.save_up_to}>*Regular Price</div>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>

                                <ul className={styles.sites_list}>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Original Js Code:</span>
                                    <span className={styles.list_description}>Price Included </span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Storage Space:</span>
                                    <span className={styles.list_description}>40 GB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Ram Space:</span>
                                    <span className={styles.list_description}>1.3 GB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Bandwith:</span>
                                    <span className={styles.list_description}>Unmetered</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Ip:</span>
                                    <span className={styles.list_description}>Dedicated Ip</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*CDN:</span>
                                    <span className={styles.list_description}>Cloudflare</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Deployment Sytem:</span>
                                    <span className={styles.list_description}>Node.Js</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*HOSTING:</span>
                                    <span className={styles.list_description}>Fully Redundant VPS Network</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*CMS:</span>
                                    <span className={styles.list_description}>No Integrated CMS, 1 form per page</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Page Links (Local):</span>
                                    <span className={styles.list_description}> 3 Pages Min At No Extra Cost</span>
                                  </li>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>

                              </ol>
                            </div>


                            <div className={styles.frame_399}>
                              <div className={styles.frame_407}>
                                <div className={styles.frame_398}>
                                  <svg
                                    className={styles.frame_397}
                                    width="11"
                                    height="14"
                                    viewBox="0 0 11 21"
                                    fill="#ffffff"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                      fill="#ffffff"
                                    />
                                  </svg>
                                </div>
                                <div className={styles.your_session_has_tim5}>650</div>
                              </div>
                              <div className={styles.component_6}>
                                <button className={styles.label}> <Link href={"/pricing"}>Get Started </Link> </button>
                              </div>
                            </div>

                          </div>
                        </div>

                          <div className={styles.frame_wrapper}>
                            <div className={styles.frame_402}>
                            <div className={styles.title}>
                              <div className={styles.recommended_div}>
                                <div className={styles.your_session_has_tim8}>Recommended</div>
                              </div>
                              <Link 
                              href={"/dynamic"}
                              >
                              <h1 className={styles.your_session_has_tim3}>Dynamic</h1>
                              </Link>                              </div>
                              <ol className={styles.list_wrapper}>
                                <ul className={styles.regular_disclaimer}>
                                  <div className={styles.save_up_to}>*Regular Price</div>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>


                                <ul className={styles.sites_list}>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Original Js Code:</span>
                                    <span className={styles.list_description}>Price Included </span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Storage Space:</span>
                                    <span className={styles.list_description}>40 GB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Ram Space:</span>
                                    <span className={styles.list_description}>1.3 GB</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Bandwith:</span>
                                    <span className={styles.list_description}>Unmetered</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Ip:</span>
                                    <span className={styles.list_description}>Dedicated Ip</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*CDN:</span>
                                    <span className={styles.list_description}>Cloudflare</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Deployment Sytem:</span>
                                    <span className={styles.list_description}>Node.Js</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*HOSTING:</span>
                                    <span className={styles.list_description}>Fully Redundant VPS Network</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*CMS:</span>
                                    <span className={styles.list_description}>No Integrated CMS, 1 form per page</span>
                                  </li>
                                  <li className={styles.list_component}>
                                    <span className={styles.list_title}>*Page Links (Local):</span>
                                    <span className={styles.list_description}> 3 Pages Min At No Extra Cost</span>
                                  </li>
                                  <li className={styles.list_component2}>
                                  </li>
                                </ul>

                              </ol>
                            </div>
                            <div className={styles.frame_399}>
                              <div className={styles.frame_407}>
                                <div className={styles.frame_398}>
                                  <svg
                                    className={styles.frame_397}
                                    width="11"
                                    height="14"
                                    viewBox="0 0 11 21"
                                    fill="#ffffff"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                      fill="#ffffff"
                                    />
                                  </svg>
                                </div>
                                <div className={styles.your_session_has_tim5}>850</div>
                              </div>

                              <div className={styles.dynamic_get_started}>
                                <div className={styles.component_6}>
                                  <button className={styles.label}> <Link href={"/dynamic"}>Get Started</Link> </button>
                                </div>
                              </div>
                            </div>

                          </div>


                        <div className={styles.frame_wrapper}>
                          <div className={styles.frame_402}>
                          <div className={styles.title}>
                          <Link 
                              href={"/dynamicplus"}
                              >
                              <h1 className={styles.your_session_has_tim3}>Dynamic Plus</h1>
                              </Link>                            </div>
                            <ol className={styles.list_wrapper}>
                              <ul className={styles.regular_disclaimer}>
                                <div className={styles.save_up_to}>*Regular Price</div>
                                <li className={styles.list_component2}>
                                </li>
                              </ul>
                              <ul className={styles.sites_list}>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Original Js Code:</span>
                                  <span className={styles.list_description}>Price Included </span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Storage Space:</span>
                                  <span className={styles.list_description}>240 GB</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Ram Space:</span>
                                  <span className={styles.list_description}>Up to 8 GB</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Bandwith:</span>
                                  <span className={styles.list_description}>Unmetered</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Ip:</span>
                                  <span className={styles.list_description}>Dedicated Ip</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*CDN:</span>
                                  <span className={styles.list_description}>Cloudflare</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Deployment Sytem:</span>
                                  <span className={styles.list_description}>Node.Js</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*HOSTING:</span>
                                  <span className={styles.list_description}>Fully Redundant VPS Network</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*CMS:</span>
                                  <span className={styles.list_description}>No Integrated CMS, 1 form per page</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Page Links (Local):</span>
                                  <span className={styles.list_description}>7 Pages Min At No Extra Cost</span>
                                </li>
                                <li className={styles.list_component2}>
                                </li>
                              </ul>
                            </ol>
                          </div>

                          <div className={styles.frame_399}>
                            <div className={styles.frame_407}>
                              <div className={styles.frame_398}>
                                <svg
                                  className={styles.frame_397}
                                  width="11"
                                  height="14"
                                  viewBox="0 0 11 21"
                                  fill="#ffffff"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 `8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                    fill="#ffffff"
                                  />
                                </svg>
                              </div>
                              <div className={styles.your_session_has_tim5}>650</div>
                            </div>
                            <div className={styles.dynamic_get_started}>
                              <div className={styles.component_6}>
                                <button className={styles.label}> <Link href={"/dynamic"}>Get Started</Link> </button>
                              </div>
                            </div>
                          </div>
                    
                        </div>


                        <div className={styles.frame_wrapper}>
                          <div className={styles.frame_402}>
                          <div className={styles.title}>
                          <Link 
                              href={"/ecommerce"}
                              >
                              <h1 className={styles.your_session_has_tim3}>Ecommerce</h1>
                              </Link>                            </div>
                            <ol className={styles.list_wrapper}>
                              <ul className={styles.regular_disclaimer}>
                                <div className={styles.save_up_to}>*Regular Price</div>
                                <li className={styles.list_component2}>
                                </li>
                              </ul>
                              <ul className={styles.sites_list}>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Original Js Code:</span>
                                  <span className={styles.list_description}>Price Included </span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Storage Space:</span>
                                  <span className={styles.list_description}>80 GB</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Ram Space:</span>
                                  <span className={styles.list_description}>2.6 GB</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Bandwith:</span>
                                  <span className={styles.list_description}>Unmetered</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Ip:</span>
                                  <span className={styles.list_description}>Dedicated Ip</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*CDN:</span>
                                  <span className={styles.list_description}>Cloudflare</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Deployment Sytem:</span>
                                  <span className={styles.list_description}>Node.Js</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*HOSTING:</span>
                                  <span className={styles.list_description}>Fully Redundant VPS Network</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*CMS:</span>
                                  <span className={styles.list_description}>No Integrated CMS, 1 form per page</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Page Links (Local):</span>
                                  <span className={styles.list_description}> 5 Pages Min At No Extra Cost</span>
                                </li>
                                <li className={styles.list_component2}>
                                </li>
                              </ul>
                            </ol>
                          </div>
                          <div className={styles.frame_399}>
                            <div className={styles.frame_407}>
                              <div className={styles.frame_398}>
                                <svg
                                  className={styles.frame_397}
                                  width="11"
                                  height="14"
                                  viewBox="0 0 11 21"
                                  fill="#ffffff"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                    fill="#ffffff"
                                  />
                                </svg>
                              </div>
                              <div className={styles.your_session_has_tim5}>1050</div>
                            </div>
                            <div className={styles.component_6}>
                              <button className={styles.label}> <Link href={"/ecommerce"}>Get Started</Link> </button>
                            </div>
                          </div>
                        </div>



                        <div className={styles.frame_wrapper}>
                          <div className={styles.frame_402}>
                          <div className={styles.title}>
                            <h1 className={styles.your_session_has_tim3}>E-Plus</h1>
                            </div>
                            <ol className={styles.list_wrapper}>
                              <ul className={styles.regular_disclaimer}>
                                <div className={styles.save_up_to}>*Regular Price</div>
                                <li className={styles.list_component2}>
                                </li>
                              </ul>
                              <ul className={styles.sites_list}>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Original Js Code:</span>
                                  <span className={styles.list_description}>Price Included </span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Storage Space:</span>
                                  <span className={styles.list_description}>Up to 240 GB</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Ram Space:</span>
                                  <span className={styles.list_description}>1up to 8GB</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Bandwith:</span>
                                  <span className={styles.list_description}>Unmetered</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Ip:</span>
                                  <span className={styles.list_description}>Dedicated Ip</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*CDN:</span>
                                  <span className={styles.list_description}>Cloudflare</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Deployment Sytem:</span>
                                  <span className={styles.list_description}>Node.Js</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*HOSTING:</span>
                                  <span className={styles.list_description}>Fully Redundant VPS Network</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*CMS:</span>
                                  <span className={styles.list_description}>No Integrated CMS, 1 form per page</span>
                                </li>
                                <li className={styles.list_component}>
                                  <span className={styles.list_title}>*Page Links (Local):</span>
                                  <span className={styles.list_description}>7 Pages Min At No Extra Cost</span>
                                </li>
                                <li className={styles.list_component2}>
                                </li>
                              </ul>
                            </ol>
                          </div>
                          <div className={styles.frame_399}>
                            <div className={styles.frame_407}>
                              <div className={styles.frame_398}>
                                <svg
                                  className={styles.frame_397}
                                  width="11"
                                  height="14"
                                  viewBox="0 0 11 21"
                                  fill="#ffffff"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.4563 13.5663C10.4563 14.7047 10.0861 15.6849 9.34577 16.5071C8.60544 17.3293 7.64376 17.8371 6.46073 18.0306V19.9837C6.46073 20.0878 6.42724 20.1734 6.36028 20.2404C6.29332 20.3073 6.20775 20.3408 6.10358 20.3408H4.59689C4.50016 20.3408 4.41646 20.3055 4.34577 20.2348C4.27509 20.1641 4.23974 20.0804 4.23974 19.9837V18.0306C3.74867 17.9636 3.27434 17.8483 2.81675 17.6846C2.35916 17.5209 1.98156 17.3553 1.68394 17.1879C1.38632 17.0205 1.11103 16.8419 0.858049 16.6522C0.605073 16.4625 0.432082 16.323 0.339076 16.2337C0.24607 16.1444 0.180966 16.0774 0.143764 16.0328C0.0172759 15.8765 0.00983539 15.724 0.121442 15.5752L1.271 14.0685C1.32308 13.9941 1.40864 13.9495 1.52769 13.9346C1.6393 13.9197 1.72858 13.9532 1.79555 14.035L1.81787 14.0573C2.65864 14.7939 3.56266 15.259 4.52992 15.4524C4.80522 15.512 5.08052 15.5417 5.35582 15.5417C5.95849 15.5417 6.48863 15.3817 6.94622 15.0618C7.40381 14.7419 7.6326 14.288 7.6326 13.7002C7.6326 13.4919 7.5768 13.2947 7.46519 13.1087C7.35358 12.9227 7.22896 12.7664 7.09131 12.6399C6.95366 12.5134 6.73602 12.3739 6.43841 12.2214C6.14079 12.0689 5.89525 11.9498 5.7018 11.8643C5.50835 11.7787 5.21073 11.6578 4.80894 11.5015C4.51876 11.3825 4.28997 11.2895 4.12256 11.2225C3.95515 11.1556 3.72635 11.057 3.43617 10.9268C3.146 10.7965 2.91348 10.6812 2.73863 10.5808C2.56378 10.4803 2.35358 10.3483 2.10805 10.1846C1.86251 10.0209 1.66348 9.86277 1.51095 9.71024C1.35842 9.55771 1.19659 9.37542 1.02546 9.16337C0.854329 8.95131 0.722261 8.73554 0.629255 8.51604C0.536249 8.29655 0.458124 8.04915 0.39488 7.77386C0.331636 7.49856 0.300014 7.20838 0.300014 6.90332C0.300014 5.87653 0.664597 4.97624 1.39376 4.20243C2.12293 3.42862 3.07159 2.93011 4.23974 2.70689V0.697963C4.23974 0.601237 4.27509 0.517532 4.34577 0.446847C4.41646 0.376163 4.50016 0.34082 4.59689 0.34082H6.10358C6.20775 0.34082 6.29332 0.374302 6.36028 0.441267C6.42724 0.508231 6.46073 0.593797 6.46073 0.697963V2.66225C6.88483 2.70689 7.29592 2.79246 7.69398 2.91895C8.09205 3.04543 8.41571 3.17006 8.66497 3.29283C8.91422 3.4156 9.15046 3.55511 9.37367 3.71136C9.59689 3.86761 9.74197 3.97549 9.80894 4.03502C9.8759 4.09454 9.93171 4.14662 9.97635 4.19127C10.1028 4.3252 10.1214 4.46656 10.0322 4.61537L9.12814 6.24484C9.06861 6.35645 8.98305 6.41597 8.87144 6.42341C8.76727 6.44573 8.66683 6.41969 8.5701 6.34528C8.54778 6.32296 8.49384 6.27832 8.40827 6.21136C8.32271 6.14439 8.17762 6.04581 7.973 5.9156C7.76839 5.78539 7.55076 5.66634 7.3201 5.55845C7.08945 5.45057 6.81229 5.35384 6.48863 5.26828C6.16497 5.18271 5.84689 5.13993 5.53439 5.13993C4.82754 5.13993 4.25091 5.2999 3.80448 5.61984C3.35805 5.93978 3.13483 6.35273 3.13483 6.85868C3.13483 7.05213 3.16646 7.2307 3.2297 7.39439C3.29294 7.55808 3.40269 7.71247 3.55894 7.85756C3.71519 8.00265 3.86214 8.12542 3.99979 8.22587C4.13744 8.32631 4.34577 8.44164 4.62479 8.57185C4.90381 8.70206 5.12888 8.8025 5.30001 8.87319C5.47114 8.94387 5.73156 9.04618 6.08126 9.18011C6.47561 9.32892 6.77695 9.4461 6.98528 9.53167C7.19361 9.61723 7.47635 9.74744 7.83349 9.92229C8.19064 10.0971 8.47151 10.2553 8.67613 10.3966C8.88074 10.538 9.11139 10.724 9.36809 10.9547C9.62479 11.1853 9.82196 11.4215 9.95961 11.6634C10.0973 11.9052 10.2144 12.1898 10.3112 12.5172C10.4079 12.8445 10.4563 13.1942 10.4563 13.5663Z"
                                    fill="#ffffff"
                                  />
                                </svg>
                              </div>
                              <div className={styles.your_session_has_tim5}>Quote</div>
                            </div>
                            <div className={styles.component_6}>
                              <button>
                                <div className={styles.label}> <Link href={"/eplus"}>Get Started</Link> </div></button>
                            </div>
                          </div>
                        </div>


                        
                      </div>
                    </div>
                  )}
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Pricing;

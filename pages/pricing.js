import React, { useEffect, useState } from 'react';
import Layout from '../components/layouts/article2';
import { Container, Heading, Button } from '@chakra-ui/react';
import styles from "/styles/pricing.module.css"
import Section from '../components/section';
import Link from 'next/link';


function Pricing() {
    const [selectStatic, setselectStatic] = useState(null);
    const [selectDynamic, setselectDynamic] = useState(null);
    const [selectEcommerce, setselectEcommerce] = useState(null);
    const [staticitemPrice, setstaticitemPrice] = useState(0);
    const [dynamicitemPrice, setdynamicitemPrice] = useState(0);
    const [ecommerceitemPrice, setecommerceitemPrice] = useState(0);
    const [showDescription, setShowDescription] = useState(false);


    const [addedpromptMessage, setaddedpromptMessage] = useState("");


    // Function to toggle the description visibility with transition time
    const toggleDescription = () => {
        // Set a transition time (in milliseconds) for the description visibility change
        const transitionTime = 500; // Change this value to your desired transition time in milliseconds

        // If the description is currently hidden, set showDescription to true after the transition time
        if (!showDescription) {
            setTimeout(() => {
                setShowDescription(true);
            }, transitionTime);

        } else {
            // If the description is currently visible, set showDescription to false after the transition time
            setTimeout(() => {
                setShowDescription(false);
            }, transitionTime);
        }
    };



    // Define the prices for each menu item
    const staticPrices = [18.00, 45.00, 0.00, 0.00, 50.00, 0.00, 275.00, 0.00, 30.00, 0.00, 0.00, 75.00, 75.00, 60.00, 30.00, 0.00, 45.00, 60.00, 0.00, 0.00];
    const dynamicPrices = [18.00, 45.00, 0.00, 0.00, 75.00, 200.00, 350.00, 100.00, 30.00, 0.00, 0.00, 75.00, 75.00, 60.00, 30.00, 0.00, 45.00, 60.00, 0.00, 0.00];
    const ecommercePrices = [18.00, 45.00, 0.00, 0.00, 85.00, 300.00, 400.00, 150.00, 30.00, 0.00, 0.00, 75.00, 75.00, 60.00, 30.00, 0.00, 45.00, 60.00, 0.00, 0.00];



    // the trigger that sends the selected feature's price to the grand total
    const add_Static_Feature_button = () => {
        // Check if selectStatic is not null and is within the range of staticPrices array
        if (selectStatic !== null && selectStatic >= 0 && selectStatic < staticPrices.length) {
            // Add the selected static feature's price to the current itemPrice state
            setstaticitemPrice((prevPrice) => prevPrice + staticPrices[selectStatic]);
        }

        setTimeout(() => {
            setaddedpromptMessage({ message: "1 feature added!", color: "#8fce00" });

            // Clear the "Item added" message after 200ms
            setTimeout(() => {
                setaddedpromptMessage("");
            }, 700);
        }, 900);
    };



    const add_Dynamic_Feature_button = () => {
        // Check if selectStatic is not null and is within the range of staticPrices array
        if (selectDynamic !== null && selectDynamic >= 0 && selectDynamic < dynamicPrices.length) {
            // Add the selected static feature's price to the current itemPrice state
            setdynamicitemPrice((prevPrice) => prevPrice + dynamicPrices[selectDynamic]);
        }
        setTimeout(() => {
            setaddedpromptMessage({ message: "Item added!", color: "#8fce00" });

            // Clear the "Item added" message after 200ms
            setTimeout(() => {
                setaddedpromptMessage("");
            }, 400);
        }, 700);
    };

    const add_Ecommerce_Feature_button = () => {
        // Check if selectEcommerce is not null and is within the range of ecommercePrices array
        if (selectEcommerce !== null && selectEcommerce >= 0 && selectEcommerce < ecommercePrices.length) {
            // Add the selected ecommerce feature's price to the current itemPrice state
            setecommerceitemPrice((prevPrice) => prevPrice + ecommercePrices[selectEcommerce]);
        }
        setTimeout(() => {
            setaddedpromptMessage({ message: "Item added!", color: "#8fce00" });

            // Clear the message after 200ms
            setTimeout(() => {
                setaddedpromptMessage("");
            }, 400);
        }, 700);
    };



    const delete_Static_Feature_button = () => {
        if (selectStatic !== null && selectStatic >= 0 && selectStatic < staticPrices.length) {
            setstaticitemPrice((prevPrice) => {
                // Calculate the new price after subtracting the selected feature's price
                const newPrice = prevPrice - staticPrices[selectStatic];
                // Ensure the new price is not below 0
                return Math.max(newPrice, 0);
            });
            // Initial delay before setting the "Item added" message
            setTimeout(() => {
                setaddedpromptMessage({ message: "Item removed!", color: "red" });

                // Clear the message after 200ms
                setTimeout(() => {
                    setaddedpromptMessage("");
                }, 400);
            }, 700);
        }
    };



    const delete_Dynamic_Feature_button = () => {
        if (selectDynamic !== null && selectDynamic >= 0 && selectDynamic < dynamicPrices.length) {
            setdynamicitemPrice((prevPrice) => {
                // Calculate the new price after subtracting the selected feature's price
                const newPrice = prevPrice - dynamicPrices[selectDynamic];
                // Ensure the new price is not below 0
                return Math.max(newPrice, 0);
            });
            setTimeout(() => {
                setaddedpromptMessage({ message: "Item removed!", color: "red" });

                // Clear the message after 200ms
                setTimeout(() => {
                    setaddedpromptMessage("");
                }, 400);
            }, 700);
        }
    };



    const delete_Ecommerce_Feature_button = () => {
        if (selectEcommerce !== null && selectEcommerce >= 0 && selectEcommerce < ecommercePrices.length) {
            setecommerceitemPrice((prevPrice) => {
                // Calculate the new price after subtracting the selected feature's price
                const newPrice = prevPrice - ecommercePrices[selectEcommerce];
                // Ensure the new price is not below 0
                return Math.max(newPrice, 0);
            });
            setTimeout(() => {
                setaddedpromptMessage({ message: "Item removed!", color: "red" });

                // Clear the message after 200ms
                setTimeout(() => {
                    setaddedpromptMessage("");
                }, 400);
            }, 700);
        }
    };


    const clear_Static_Feature_button = () => {
        setstaticitemPrice(0);

        setTimeout(() => {
            setaddedpromptMessage({ message: "Table cleared!", color: "#ffffff", });

            // Clear the message after 200ms
            setTimeout(() => {
                setaddedpromptMessage("");
            }, 400);
        }, 700);
    };



    const clear_Dynamic_Feature_button = () => {
        setdynamicitemPrice(0);
        setTimeout(() => {
            setaddedpromptMessage({ message: "Table cleared!", color: "#ffffff" });

            // Clear the message after 200ms
            setTimeout(() => {
                setaddedpromptMessage("");
            }, 400);
        }, 700);
    };


    const clear_Ecommerce_Feature_button = () => {
        setecommerceitemPrice(0);
        setTimeout(() => {
            setaddedpromptMessage({ message: "Table cleared!", color: "#ffffff" });

            // Clear the message after 200ms
            setTimeout(() => {
                setaddedpromptMessage("");
            }, 400);
        }, 700);
    };



    const SdisplayPrivateDomain = () => {
        return staticPrices[0];
    };
    const SdisplayFreeDomain = () => {
        return staticPrices[9];
    };
    const SdisplayOgText = () => {
        return staticPrices[1];
    };

    const SdisplayRoyalty = () => {
        return staticPrices[10];
    };
    const SdisplayPortrait = () => {
        return staticPrices[11];
    };

    const SdisplayOtherArt = () => {
        return staticPrices[12];
    };
    const Sdisplay3dGraphics = () => {
        return staticPrices[13];
    };

    const SdisplayLogo = () => {
        return staticPrices[14];
    };

    const SdisplayRoyaltyVideos = () => {
        return staticPrices[15];
    };

    const SdisplayLogoIntros = () => {
        return staticPrices[16];
    };

    const Sdisplay3dRenders = () => {
        return staticPrices[17];
    };

    const SdisplayOgArt = () => {
        return staticPrices[2];
    };

    const SdisplayVpsStorage = () => {
        return staticPrices[3];
    };
    const SdisplayVpsRam = () => {
        return staticPrices[18];
    };

    const SdisplayMonthlyFee = () => {
        return staticPrices[19];
    };
    const SdisplayExtraPage = () => {
        return staticPrices[4];
    };
    const SdisplayCms = () => {
        return staticPrices[5];
    };
    const SdisplayOgCode = () => {
        return staticPrices[6];
    };
    const SdisplayDb = () => {
        return staticPrices[7];
    };
    const SdisplayOgVideo = () => {
        return staticPrices[8];
    };


    const DdisplayPrivateDomain = () => {
        return dynamicPrices[0];
    };
    const DdisplayFreeDomain = () => {
        return dynamicPrices[9];
    };
    const DdisplayOgText = () => {
        return dynamicPrices[1];
    };
    const DdisplayRoyalty = () => {
        return dynamicPrices[10];
    };
    const DdisplayPortrait = () => {
        return dynamicPrices[11];
    };

    const DdisplayOtherArt = () => {
        return dynamicPrices[12];
    };
    const Ddisplay3dGraphics = () => {
        return dynamicPrices[13];
    };

    const DdisplayLogo = () => {
        return dynamicPrices[14];
    };
    const DdisplayRoyaltyVideos = () => {
        return dynamicPrices[15];
    };

    const DdisplayLogoIntros = () => {
        return dynamicPrices[16];
    };

    const Ddisplay3dRenders = () => {
        return dynamicPrices[17];
    };

    const DdisplayOgArt = () => {
        return dynamicPrices[2];
    };
    const DdisplayVpsStorage = () => {
        return staticPrices[3];
    };
    const DdisplayVpsRam = () => {
        return dynamicPrices[18];
    };
    const DdisplayMonthlyFee = () => {
        return dynamicPrices[19];
    };
    const DdisplayExtraPage = () => {
        return dynamicPrices[4];
    };
    const DdisplayCms = () => {
        return dynamicPrices[5];
    };
    const DdisplayOgCode = () => {
        return dynamicPrices[6];
    };
    const DdisplayDb = () => {
        return dynamicPrices[7];
    };
    const DdisplayOgVideo = () => {
        return dynamicPrices[8];
    };



    const EdisplayPrivateDomain = () => {
        return ecommercePrices[0];
    };
    const EdisplayFreeDomain = () => {
        return ecommercePrices[9];
    };
    const EdisplayOgText = () => {
        return ecommercePrices[1];
    };
    const EdisplayOgArt = () => {
        return ecommercePrices[2];
    };
    const EdisplayRoyalty = () => {
        return ecommercePrices[10];
    };
    const EdisplayPorttrait = () => {
        return ecommercePrices[11];
    };

    const EdisplayOtherArt = () => {
        return ecommercePrices[12];
    };
    const Edisplay3dGraphics = () => {
        return ecommercePrices[13];
    };
    const EdisplayLogo = () => {
        return ecommercePrices[14];
    };

    const EdisplayRoyaltyVideos = () => {
        return ecommercePrices[15];
    };

    const EdisplayLogIntros = () => {
        return ecommercePrices[16];
    };

    const Edisplay3dRenders = () => {
        return ecommercePrices[17];
    };
    const EdisplayVpsStorage = () => {
        return ecommercePrices[3];
    };
    const EdisplayVpsRam = () => {
        return ecommercePrices[18];
    };
    const EdisplayMonthlyFee = () => {
        return ecommercePrices[19];
    };
    const EdisplayExtraPage = () => {
        return ecommercePrices[4];
    };
    const EdisplayCms = () => {
        return ecommercePrices[5];
    };
    const EdisplayOgCode = () => {
        return ecommercePrices[6];
    };
    const EdisplayDb = () => {
        return ecommercePrices[7];
    };
    const EdisplayOgVideo = () => {
        return ecommercePrices[8];
    };
    const [expandedStep, setExpandedStep] = useState(null);

    const handleStepClick = (index) => {
        setExpandedStep((prevIndex) => (prevIndex === index ? null : index));
    };

    const paragraphStyle = {
        paddingRight: "10px",
        paddingLeft: "10px",
        padding: "5px",
        background: "#00aeba43",
        borderRadius: "0.95rem",
        borderColor: "#ffffff43",
        borderWidth: "5px",
    };

    return (
        <>
            <div className={styles.layoutdiv}>
                <Layout title="Pricing-Plans">
                </Layout>
            </div>


            <Container>
                <Heading as="h3" fontSize={15} mb={4}>
                    Pricing And Details
                </Heading>

                <h1 style={{
                    fontWeight: "500",
                    color: "#ffffff",
                    borderRadius: "0.7rem",
                    padding: "15px",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundImage: "url(https://wallpaperaccess.com/full/3285920.png)", fontSize: "15px"
                }}>
                    <p style={paragraphStyle}>
                        Use This Page to estimate the cost of the website you want to build with Astrum Stellar. The Page is still in Beta Mode so some features on this page need some adjusting, as the whole site is still being constructed.
                    </p>
                </h1>
                <h1 style={{
                    opacity: "50%",
                    color: "#ffffff",
                    padding: "15px",
                    fontSize: "15px"
                }}>
                    You can choose between 3 types of websites. If you need help choosing, email me or send me a request through the contact page.
                </h1>
                <ul
                    style={{
                        marginTop: "10px",
                        marginBottom: "10px",
                        textDecoration: "underline",
                        listStyle: "none",
                        fontSize: "15px"
                    }}>

                    <a href='https://www.wix.com/blog/static-vs-dynamic-website'>
                        <li
                            style={{
                                marginTop: "10px",
                                marginBottom: "10px",
                                color: "#dba800",
                                fontWeight: "600",
                            }}>Static Websites</li> </a>

                    <a href='https://designmodo.com/static-website-hosting/#what-is-a-static-website'>
                        <li
                            style={{
                                marginTop: "10px",
                                marginBottom: "10px",
                                color: "#00aeba",
                                fontWeight: "600",
                            }}>Dynamic Websites</li> </a>
                    <a href='https://ecommerceguide.com/guides/what-is-ecommerce/'>
                        <li
                            style={{
                                marginTop: "10px",
                                marginBottom: "10px",
                                color: "#009c51",
                                fontWeight: "600",
                            }}>Ecommerce Websites</li></a>
                </ul>

                <h2 style={{
                    margin: "10px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    borderRadius: "0.7rem",
                    borderWidth: "1px",
                    borderColor: " #ffffff",
                    color: "white",
                    padding: "1.3%",
                    display: "inline-block",
                    backgroundSize: "cover",
                    backgroundImage: "url(https://wallpapercave.com/wp/wp8046982.jpg)",
                    fontSize: "14px",
                }}>Instructions</h2>


                <div style={{
                    color: "white",
                    listStyle: "none",
                    fontSize: "15px",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundColor: "black",
                    padding: "8px",
                    filter: "contrast(80%)", borderRadius: "0.5rem",
                    marginBottom: "1vh",
                }}
                >
                    <ul style={{
                        listStyle: "none",
                        borderRadius: "0.55rem",
                        padding: "5px",
                        marginBottom: "10px",
                        marginTop: "10px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        filter: "contrast(100%)",

                        backgroundColor: "#8c79007d",
                    }} className={styles.steplist}
                    ><li onClick={() => handleStepClick(0)} style={{
                        marginBottom: "2px",
                        marginTop: "2px",
                        color: "#ffffff",
                        fontWeight: "500",
                    }}
                    ><span
                        style={{
                            borderColor: "#ffffff43",
                            borderWidth: "1px",
                            padding: "5px",

                        }}
                    >STEP 1 (Details)</span></li>
                        {expandedStep === 0 && (
                            <div
                            >
                                <p>
                                    Identify the type if Website that best suits for your needs.
                                </p>
                            </div>
                        )}

                    </ul>
                    <ul style={{
                        listStyle: "none",
                        borderRadius: "0.55rem",
                        padding: "5px",
                        marginBottom: "10px",
                        marginTop: "10px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        filter: "contrast(100%)",

                        backgroundColor: "#8c79007d",
                    }} className={styles.steplist}
                    >                        <li onClick={() => handleStepClick(1)}
                        style={{
                            marginBottom: "2px",
                            marginTop: "2px",
                            color: "#ffffff",
                            fontWeight: "500",
                        }}><span
                            style={{
                                borderColor: "#ffffff43",
                                borderWidth: "1px",
                                padding: "5px",

                            }}
                        >STEP 2 (Details)</span>
                        </li>
                        {expandedStep === 1 && (
                            <div>
                                <p>
                                    <span>
                                        Select the "add feature" button on the item you want,  and it will drop the price into the calculator below. Add all the features that matter to you the most, not all may be absolutely necessary. If you've made an error you can clear your choices or remove them.</span>
                                    <span>
                                        *Example: If you are looking for just one page to be made, or you want a full scale websited with client interaction, each feature explains what it's there for. Toggle the yellow "details" button to see each feature specs.</span>
                                </p>
                            </div>
                        )}
                    </ul>

                    <ul style={{
                        listStyle: "none",
                        borderRadius: "0.55rem",
                        padding: "5px",
                        marginBottom: "10px",
                        marginTop: "10px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        filter: "contrast(100%)",

                        backgroundColor: "#8c79007d",
                    }} className={styles.steplist}
                    >                        <li onClick={() => handleStepClick(2)} style={{
                        marginBottom: "2px",
                        marginTop: "2px",
                        color: "#ffffff",
                        fontWeight: "500",
                    }}>
                            <span
                                style={{
                                    borderColor: "#ffffff43",
                                    borderWidth: "1px",
                                    padding: "5px",

                                }}
                            >STEP 3 (Details)</span>
                        </li>
                        {expandedStep === 2 && (
                            <div>
                                <p>
                                    The price will be displayed at the bottom, allowing you to make an informed decision on your choices. Click on "Contact" at the top of the page ( or open the menu button if you are on mobile) and fill out the form, specifying which features you have chosen, and add any relevant details or questions. Send the Form!
                                </p>
                            </div>
                        )}
                    </ul>


                    <ul style={{
                        listStyle: "none",
                        borderRadius: "0.55rem",
                        padding: "5px",
                        marginBottom: "10px",
                        marginTop: "10px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        filter: "contrast(100%)",

                        backgroundColor: "#8c79007d",
                    }} className={styles.steplist}
                    >
                        <li onClick={() => handleStepClick(3)} style={{
                            marginBottom: "2px",
                            marginTop: "2px",
                            color: "#ffffff",
                            fontWeight: "500",

                        }}>                            <span
                            style={{
                                borderColor: "#ffffff43",
                                borderWidth: "1px",
                                padding: "5px",

                            }}
                        >STEP 4 (Details)</span></li>
                        {expandedStep === 3 && (
                            <div >
                                <p >
                                    Check your inbox for a reply from Astrum Stellar. Thank you.
                                </p>
                            </div>
                        )}
                    </ul>
                </div>







                <Section delay={0.1}>
                    <div className={styles.pricing_page_parent}>
                        <div className={styles.pricing_page_wrapper}>

                            <div className={styles.tabs_wrapper}>
                                <div className={styles.togglemenu}>

                                    
                                    <ul className={styles.trios}>

                                        <li className={styles.menutitle}>  <p style={{
                                            marginBottom: "10px"
                                        }}> Static Sites</p>

                                            <span className={styles.tabinfowrapper}>
                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>Original Js Code:</span> *Base price of the project*</span>

                                                <span className={styles.tabinfo}> <span className={styles.tabtitle}>Storage Space: </span> 40 GB </span>

                                                <span className={styles.tabinfo}> <span className={styles.tabtitle}>Ram:</span> 1.3 GB </span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>Bandwith:</span> Unmetered</span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>Ip:</span> Dedicated Ip</span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>CDN: </span> Cloudflare</span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>Deployment Sytem:</span> Node.Js</span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>HOSTING:</span> VPS, Fully Redundant Network</span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>CMS:</span>No Integrated CMS, only 1 form per page</span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>Web Pages (Page Links):</span> 3 Pages Min At No Extra Cost</span>
                                            </span>






                                            <div>


                                                <div
                                                    className={styles.menuitem}
                                                    onClick={() => {
                                                        // Check if selectStatic is already 0, if yes, set showDescription to false
                                                        if (selectStatic === 1) {
                                                            setShowDescription(false);
                                                        }
                                                        // Toggle the selectStatic value
                                                        setselectStatic((prevValue) => (prevValue === null ? 0 : prevValue === 0 ? null : 0));
                                                    }}
                                                >
                                                    <p>Private Domain</p>
                                                </div>



                                                {selectStatic === 0 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"A private domain is a web address that you can register and own exclusively for your online presence, such as a personal website or a business website. Unlike a non-private domain, which may involve sharing a domain name with other users or displaying your personal information publicly, a private domain provides you with enhanced security, privacy, and control over your digital identity. Add this item if you would like to register a private domain with your website. "}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price: ${SdisplayPrivateDomain().toFixed(2)}/yr Per Domain</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>

                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}

                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>
                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}




                                                <div
                                                    className={styles.menuitem}
                                                    onClick={() => {
                                                        // Check if selectStatic is already 0, if yes, set showDescription to false
                                                        if (selectStatic === 1) {
                                                            setShowDescription(false);
                                                        }
                                                        // Toggle the selectStatic value
                                                        setselectStatic((prevValue) => (prevValue === null ? 9 : prevValue === 9 ? null : 9));
                                                    }}
                                                >
                                                    <p>Free Domain</p>
                                                </div>



                                                {selectStatic === 9 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"A Free domain is a web address that you can register and own exclusively for your online presence, such as a personal website or a business website. Unlike a private domain, which lets you own the name without adding another domain name to the url. Your website will always end with vercel's domain name. Example:https://yourchosendomainname.vercel.app "}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price: ${SdisplayFreeDomain().toFixed(2)}/yr</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>

                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}

                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>
                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}

                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 3 : prevValue === 3 ? null : 3));
                                                }}>
                                                    <p>VPS Storage Space</p>
                                                </div>

                                                {selectStatic === 3 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*This item is already included in the package as is. For Static Sites, you get 1.3 GB of ram right off the bat. This is not to be confused with storage space. Ram details usually do not come with the plan details in sites like Wix, to encourage people to take on their plans while ignoring this important detail, mostly because ram space is shared amongst site owners on a server. I give you your own Ram, and you do not have to share it with anyone unless you specifically are interested in load balancing. If so please specify your request."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price: ${SdisplayVpsStorage().toFixed(2)} 40 GB INCLUDED</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}

                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>
                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 18 : prevValue === 18 ? null : 18));
                                                }}>
                                                    <p>VPS Ram Space</p>
                                                </div>

                                                {selectStatic === 18 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*This item is already included in the package as is. For Static Sites, you get 1.3 GB of ram right off the bat. This is not to be confused with storage space. Ram details usually do not come with the plan details in sites like Wix, to encourage people to take on their plans while ignoring this important detail, mostly because ram space is shared amongst site owners on a server. I give you your own Ram, and you do not have to share it with anyone unless you specifically are interested in load balancing. If so please specify your request."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price: ${SdisplayVpsRam().toFixed(2)} 1.3 GB INCLUDED</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}

                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>
                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}




                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 1 : prevValue === 1 ? null : 1));
                                                }}>
                                                    <p>Text/Information Content As A Service</p>

                                                </li>


                                                {selectStatic === 1 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*If you need help with creating the actual content, i.e. the text content (For translation services and use of other languages:I can provide english to french translations, however any other language must be translated by you for it to be used), I will always provide originality and authenticity, no plagiarism or rehashed ideas. Your content will be exclusively yours when the project is turned over into your care."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price: ${SdisplayOgText().toFixed(2)} Per Page</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}

                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>
                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>


                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 2 : prevValue === 2 ? null : 2));
                                                }}>
                                                    <p>Use of Ai-Art</p>
                                                </div>

                                                {selectStatic === 2 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Explore new artistic horizons without fear of exploitation and assure maxium ownership security and copyright for yourself. You can request precise Ai art that will be coming straight from Open Ai's art hub. (for example: Different Versions of Movie characters, abstract art, car models, the list is infinite.) Image types offered:PEG/JPG (.jpeg, .jpg), PNG (.png), GIF (.gif), TIFF (.tiff, .tif), BMP (.bmp), WebP (.webp), SVG (.svg), RAW (.raw), PSD (.psd), EPS (.eps), ICO (.ico), JP2 (.jp2)"}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price: ${SdisplayOgArt().toFixed(2)}/Page</h2>

                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>
                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}

                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 10 : prevValue === 10 ? null : 10));
                                                }}>
                                                    <p>Use of Royalty-Free Images</p>
                                                </div>
                                                {selectStatic === 10 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Royalty free images are excellent grade images taken from photographers around the world, posted for your free use without complaints of copyright. Examples:https://pixabay.com/, or https://www.pexels.com/royalty-free-images/. Image types offered:PEG/JPG (.jpeg, .jpg), PNG (.png), GIF (.gif), TIFF (.tiff, .tif), BMP (.bmp), WebP (.webp), SVG (.svg), RAW (.raw), PSD (.psd), EPS (.eps), ICO (.ico), JP2 (.jp2)"}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${SdisplayRoyalty().toFixed(2)}/Page</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}




                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 11 : prevValue === 11 ? null : 11));
                                                }}>
                                                    <p>Personal Photographer</p>
                                                </div>
                                                {selectStatic === 11 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*With this option you are choosing to hire a service for photography, aimed only for portraits. With Astrum Stellar, you are guaranteed a photographer that is excellent and passionate about his work. More details on the Photographers I have hired for this role coming soon on my project Page. For now, please specify what kind of images you want and in the contact form go to menu at the top) specify that you want portraits taken of you, and I will send you some example portraits that my artists can do for you. This option does not have to be added, only valid  for Toronto, and Windsor Ontario customers. Thank you."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${SdisplayPortrait().toFixed(2)}/PORTRAIT</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}

                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 12 : prevValue === 12 ? null : 12));
                                                }}>
                                                    <p>Photography Requests</p>
                                                </div>
                                                {selectStatic === 12 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*You can make photo requests of any kind, that are not Portraits. These include, items, products, store-products, nature, crowds, events, ect. Family pictures fall under the category of Portraits. This option does not have to be added, only valid  for Toronto, and Windsor Ontario customers. Thank you."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${SdisplayOtherArt().toFixed(2)}For orders of x1 - x25 PHOTOS</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}

                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 13 : prevValue === 13 ? null : 13));
                                                }}>
                                                    <p>Need A Graphic Designer?</p>
                                                </div>
                                                {selectStatic === 13 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*When it comes to 3d graphic design, there is tons of options to go for. You can choose different render styles, different textures and lighting. Everything will be tailored to meet your specific requirements. Customers love to employ the skills of a graphic designer to bring their ideas to life where Ai-Art cannot. Make your Logos pop, turn yourself into an cartoon doing the handstand, build a floor plan of yuor dream house, design the coolest phone ever made, etc the list is endless. More examples on my 3d Graphic Designs coming out in the Projects page (above menu) soon."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${Sdisplay3dGraphics().toFixed(2)} / RENDERED IMAGE</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 14 : prevValue === 14 ? null : 14));
                                                }}>
                                                    <p>Do You Need a Logo?</p>
                                                </div>
                                                {selectStatic === 14 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Logos are supposed to be unique and to mean something to your brand. They can be funny, straight to the point, artsitic, or very abstract, you name it. If you don't have a logo already made, Astrum Stellar can help with that. Take a look at the project page you will find more details on logos which lead to more info on  styles and themes you can choose from: https://astrumstellar/projects/logos"}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${SdisplayLogo().toFixed(2)} PER LOGO</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 15 : prevValue === 15 ? null : 15));
                                                }}>
                                                    <p>Ryoalty Free Videos</p>
                                                </div>
                                                {selectStatic === 15 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Royalty free videos are perfect for anyone looking for videos that match a certain feel but are quite hard to get. They can also be used as a substitute for content when there is no access to a phhotographer or videographer. Royalty free videos can be obtained from a variety of sources, including but not limited to: https://pixabay.com/videos/, https://www.pexels.com/videos/, https://www.pexels.com/videos/, and many more. You have the choice to either submit your selection of royalty free images (make sure that it is royalty free so that you don't sit over copyright laws) or ask me to personally choose them for you. Both options are valid and can be done for no cost at all. Courtesy of Astrum Stellar. Video Formats available but not limited to: MP4 (H.264), WEBM, AVI, MOV, WMV, FLV, MKV, OGV, 3GP, MPEG.."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${SdisplayRoyaltyVideos().toFixed(2)}</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 16 : prevValue === 16 ? null : 16));
                                                }}>
                                                    <p>Logo Intros (With designer)</p>
                                                </div>
                                                {selectStatic === 16 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Logo intros are a great way to get your logo to come to life. There are crazy renders out there that will make you jealous. Take a look at https://astrumstelar/projects/logos/logointros for some examples on render styles, render engines and more. Most, if not all logo renders will be done by Astrum Stellar, or a trusted designer on my team."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${SdisplayLogoIntros().toFixed(2)} PER LOGO INTRO</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}

                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 8 : prevValue === 8 ? null : 8));
                                                }}>
                                                    <p>Videography Requests</p>
                                                </div>

                                                {selectStatic === 8 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*In case you require specific Videography Services to craft and showcase your brand's story, products, or services. When requesting video services please specify (in the contact page inside the form) what kind of visual representation you are looking. These include, items, products, store-products, nature, crowds, events, ect. This option does not have to be added, only valid  for Toronto, and Windsor Ontario customers. Thank you. Visit"}
                                                                <a href="/videographyservices">
                                                                    <a className={styles.linktoprojectspage}> https://astrumstellar/services/videographyservices</a>
                                                                </a>
                                                                {" Page for more detaisl."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${SdisplayOgVideo().toFixed(2)} /Video</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>
                                                            Add Feature
                                                        </button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>
                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>
                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 17 : prevValue === 17 ? null : 17));
                                                }}>
                                                    <p>3d Rendering requests (With designer)</p>
                                                </div>

                                                {selectStatic === 17 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*In case you require specific Videography Services to craft and showcase your brand's story, products, or services. When requesting video services please specify (in the contact page inside the form) what kind of visual representation you are looking. These include, items, products, store-products, nature, crowds, events, ect. This option does not have to be added, only valid  for Toronto, and Windsor Ontario customers. Thank you. Visit"}
                                                                <a href="/videographyservices">
                                                                    <a className={styles.linktoprojectspage}> https://astrumstellar/services/videographyservices</a>
                                                                </a>
                                                                {" Page for more detaisl."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${Sdisplay3dRenders().toFixed(2)} PER VIDEO</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>
                                                            Add Feature
                                                        </button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>
                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>
                                                    </>
                                                )}







                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 4 : prevValue === 4 ? null : 4));
                                                }}>
                                                    <p>Extra Pages/Links</p>
                                                </div>
                                                {selectStatic === 4 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*For Static Sites, the number of pages defaults to 3 pages minimum, with no extra fee. This price is for any extra pages on the website that you want to create that exceed the 3 page minimum with no charge. Any extra pages (over 3) will fall through this price point."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>After the 3 Included Pages: ${SdisplayExtraPage().toFixed(2)} PER PAGE</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}

                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>
                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}



                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 5 : prevValue === 5 ? null : 5));
                                                }}>
                                                    <p>CMS (Content Management System)</p>
                                                </div>
                                                {selectStatic === 5 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*No integrated full CMS system included for static sites. However, a  form is allowed, which can send you (the site owner), some triggered information towards your DOMAIN owned email (purchased through option 1 on the list for $18.00). Written in PHP, no charge put on requests for contact forms or forms in general. *1 form per page maximum.This means that there are no fully integrated features available like SignIn, SignOut, create, read and update (which are helpful for sites that need customer interaction, payments, items to sort through, mail letters to send, push notifications, etc). "}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${SdisplayCms().toFixed(2)}</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>
                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}

                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 6 : prevValue === 6 ? null : 6));
                                                }}>
                                                    <p>Original Javascript Code</p>
                                                </div>
                                                {selectStatic === 6 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*The Code is carefully written from scratch, giving you utmost flexibility with your design requirements. With a  fully working website you will need to make sure both the front and backend is taken care of efficiently. I specialize in personlizing websites, adjusting SEO, CDNs, etc, and such tools need to be seamlessly integrated together to deliver one final product that is satisfactory. Assembled by Astrum Stellar, the project and rights to the code will be handed to you after the work is done."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price: ${SdisplayOgCode().toFixed(2)}</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}

                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}

                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 7 : prevValue === 7 ? null : 7));
                                                }}>
                                                    <p>Database Integration</p>
                                                </div>
                                                {selectStatic === 7 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Database integration simply refers to the addition of a database system in your website. There is NO option for an actual database ssytem for Static Websites. All memory is served through static pages. This item was added in this category simply to explain it's presence and potential use within yuor website system."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price: ${SdisplayDb().toFixed(2)}</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}

                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 19 : prevValue === 19 ? null : 19));
                                                }}>
                                                    <p>Monthly Fee </p>
                                                </div>
                                                {selectStatic === 19 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*The only recurrent fee other than the yearly fee( of $18.00 for the domain) is the *maintenance fee and the *storage fee which are rolled into one price.For the Ecommerce package, the maintenance fee is only $30/Month. No other feels to worry about as long as you pay this monthly amount and the yearly amount of $18.00. Upon yeary renewal of the domain, you will be geting email reminders that your domain is about to expire and that you should pay for it. Options for 5 year domain holds, and 10 year domain holds as  well."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${SdisplayMonthlyFee().toFixed(2)} PER MONTH</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Static_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Static_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>
                                                    </>
                                                )}

                                            <div className={styles.itemPrice}>
                                                <h2 className={styles.itemPricepiece}>Total Price: ${staticitemPrice.toFixed(2)}
                                                    <button className={styles.clear_button} onClick={clear_Static_Feature_button}>Clear/Restart</button>
                                                </h2>

                                            </div>
                                        </div>
                                        </li>



                                        <li className={styles.menutitle}> <p style={{
                                            marginBottom: "10px"
                                        }}> Dynamic Sites </p>

                                            <span className={styles.tabinfowrapper}>
                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>Original Js Code:</span> *Base price of the project*</span>

                                                <span className={styles.tabinfo}> <span className={styles.tabtitle}>Storage Space:</span>80 GB</span>

                                                <span className={styles.tabinfo}> <span className={styles.tabtitle}>Ram:</span> 2.6 GB </span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>Bandwith:</span> Unmetered</span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>Ip:</span> Dedicated Ip</span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>CDN: </span> Cloudflare</span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>Deployment Sytem:</span> Node.Js</span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>HOSTING:</span> VPS, Fully Redundant Network</span>
                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>CMS:</span>Fully Integrated CMS.</span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>Web Pages (Page Links):</span> 5 Pages Min At No Extra Cost</span>
                                            </span>

                                            <div>


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 0 : prevValue === 0 ? null : 0));
                                                }}>
                                                    <p>Private Domain</p>
                                                </div>
                                                {selectDynamic === 0 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*A private domain is a web address that you can register and own exclusively for your online presence, such as a personal website or a business website. Unlike a non-private domain, which may involve sharing a domain name with other users or displaying your personal information publicly, a private domain provides you with enhanced security, privacy, and control over your digital identity. Add this item if you would like to register a private domain with your website."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price: ${DdisplayPrivateDomain().toFixed(2)}/yr Per Domain</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}




                                                <div
                                                    className={styles.menuitem}
                                                    onClick={() => {
                                                        // Check if selectStatic is already 0, if yes, set showDescription to false
                                                        if (selectDynamic === 1) {
                                                            setShowDescription(false);
                                                        }
                                                        // Toggle the selectStatic value
                                                        setselectDynamic((prevValue) => (prevValue === null ? 9 : prevValue === 9 ? null : 9));
                                                    }}
                                                >
                                                    <p>Free Domain</p>
                                                </div>



                                                {selectDynamic === 9 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"A Free domain is a web address that you can register and own exclusively for your online presence, such as a personal website or a business website. Unlike a private domain, which lets you own the name without adding another domain name to the url. Your website will always end with vercel's domain name. Example:https://yourchosendomainname.vercel.app "}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price: ${DdisplayFreeDomain().toFixed(2)}/yr</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>

                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}

                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>
                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}

                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 3 : prevValue === 3 ? null : 3));
                                                }}>
                                                    <p>VPS Storage Space</p>
                                                </div>
                                                {selectDynamic === 3 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*This item is already included in the package as is. For Static Sites, you get 2.6 GB of ram right off the bat. This is not to be confused with storage space. Ram details usually do not come with the plan details in sites like Wix, to encourage people to take on their plans while ignoring this important detail, mostly because ram space is shared amongst site owners on a server. I give you your own Ram, and you do not have to share it with anyone unless you specifically are interested in load balancing. If so please specify your request."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${DdisplayVpsStorage().toFixed(2)} 80 GB INCLUDED</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>
                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 18 : prevValue === 18 ? null : 18));
                                                }}>
                                                    <p>VPS Ram Space</p>
                                                </div>

                                                {selectDynamic === 18 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*This item is already included in the package as is. For Static Sites, you get 40GB Storage right off the bat which is included in your payment of $12.00/Month. Compare that to Wix's price of $29/Month for 35GB of storage space (plus 5 hours of video on top, ahem.. good try Wix). If you would like more storage spacce, please specify how much more you think you will need, however with small to medium size businesses, 40GB is quite a lot of space. On top of that, I want to make sure you know that I keep storage space a priority for my clients meaning that when I build your site, I ensure that file size and page load speeds are taken into account to deliver the most acceptable results."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price: ${DdisplayVpsRam().toFixed(2)} 2.6 GB INCLUDED</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}

                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>
                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}





                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 1 : prevValue === 1 ? null : 1));
                                                }}>
                                                    <p>Text/Information Content As A Service</p>
                                                </div>
                                                {selectDynamic === 1 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*If you need help with creating the actual content, i.e. the text content (For translation services and use of other languages:I can provide english to french translations, however any other language must be translated by you for it to be used), I will always provide originality and authenticity, no plagiarism or rehashed ideas. Your content will be exclusively yours when the project is turned over into your care."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${DdisplayOgText().toFixed(2)}/Page</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 2 : prevValue === 2 ? null : 2));
                                                }}>
                                                    <p>Use of Ai-Art</p>
                                                </div>
                                                {selectDynamic === 2 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Explore new artistic horizons without fear of exploitation and assure maxium ownership security and copyright for yourself. You can request precise Ai art that will be coming straight from Open Ai's art hub. (for example: Different Versions of Movie characters, abstract art, car models, the list is infinite.) Image types offered:PEG/JPG (.jpeg, .jpg), PNG (.png), GIF (.gif), TIFF (.tiff, .tif), BMP (.bmp), WebP (.webp), SVG (.svg), RAW (.raw), PSD (.psd), EPS (.eps), ICO (.ico), JP2 (.jp2)"}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${DdisplayOgArt().toFixed(2)}/Page</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}

                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 10 : prevValue === 10 ? null : 10));
                                                }}>
                                                    <p>Use of Royalty-Free Images</p>
                                                </div>
                                                {selectDynamic === 10 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Royalty free images are excellent grade images taken from photographers around the world, posted for your free use without complaints of copyright. Examples:https://pixabay.com/, or https://www.pexels.com/royalty-free-images/. Image types offered:PEG/JPG (.jpeg, .jpg), PNG (.png), GIF (.gif), TIFF (.tiff, .tif), BMP (.bmp), WebP (.webp), SVG (.svg), RAW (.raw), PSD (.psd), EPS (.eps), ICO (.ico), JP2 (.jp2)"}
                                                            </p>
                                                        )}
                                                        {!showDescription && (

                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${DdisplayRoyalty().toFixed(2)}/Page</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 11 : prevValue === 11 ? null : 11));
                                                }}>
                                                    <p>Personal Photographer</p>
                                                </div>
                                                {selectDynamic === 11 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*With this option you are choosing to hire a service for photography, aimed only for portraits. With Astrum Stellar, you are guaranteed a photographer that is excellent and passionate about his work. More details on the Photographers I have hired for this role coming soon on my project Page. For now, please specify what kind of images you want and in the contact form go to menu at the top) specify that you want portraits taken of you, and I will send you some example portraits that my artists can do for you. This option does not have to be added, only valid  for Toronto, and Windsor Ontario customers. Thank you."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${DdisplayPortrait().toFixed(2)}/PORTRAIT</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 12 : prevValue === 12 ? null : 12));
                                                }}>
                                                    <p>Photography Requests</p>
                                                </div>
                                                {selectDynamic === 12 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*You can make photo requests of any kind, that are not Portraits. These include, items, products, store-products, nature, crowds, events, ect. Family pictures fall under the category of Portraits. This option does not have to be added, only valid  for Toronto, and Windsor Ontario customers. Thank you."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${DdisplayOtherArt().toFixed(2)} For orders of x1 - x25 PHOTOS</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}

                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 13 : prevValue === 13 ? null : 13));
                                                }}>
                                                    <p>Need A Graphic Designer?</p>
                                                </div>
                                                {selectDynamic === 13 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*When it comes to 3d graphic design, there is tons of options to go for. You can choose different render styles, different textures and lighting. Everything will be tailored to meet your specific requirements. Customers love to employ the skills of a graphic designer to bring their ideas to life where Ai-Art cannot. Make your Logos pop, turn yourself into an cartoon doing the handstand, build a floor plan of yuor dream house, design the coolest phone ever made, etc the list is endless. More examples on my 3d Graphic Designs coming out in the Projects page (above menu) soon."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${Ddisplay3dGraphics().toFixed(2)} / RENDERED IMAGE</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 14 : prevValue === 14 ? null : 14));
                                                }}>
                                                    <p>Do You Need a Logo?</p>
                                                </div>
                                                {selectDynamic === 14 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Logos are supposed to be unique and to mean something to your brand. They can be funny, straight to the point, artsitic, or very abstract, you name it. If you don't have a logo already made, Astrum Stellar can help with that. Take a look at the project page you will find more details on logos which lead to more info on  styles and themes you can choose from: https://astrumstellar/projects/logos"}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${DdisplayLogo().toFixed(2)} PER LOGO</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}



                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 15 : prevValue === 15 ? null : 15));
                                                }}>
                                                    <p>Ryoalty Free Videos</p>
                                                </div>
                                                {selectDynamic === 15 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Royalty free videos are perfect for anyone looking for videos that match a certain feel but are quite hard to get. They can also be used as a substitute for content when there is no access to a phhotographer or videographer. Royalty free videos can be obtained from a variety of sources, including but not limited to: https://pixabay.com/videos/, https://www.pexels.com/videos/, https://www.pexels.com/videos/, and many more. You have the choice to either submit your selection of royalty free images (make sure that it is royalty free so that you don't sit over copyright laws) or ask me to personally choose them for you. Both options are valid and can be done for no cost at all. Courtesy of Astrum Stellar. Video Formats available but not limited to: MP4 (H.264), WEBM, AVI, MOV, WMV, FLV, MKV, OGV, 3GP, MPEG.."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${DdisplayRoyaltyVideos().toFixed(2)}</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 8 : prevValue === 8 ? null : 8));
                                                }}>
                                                    <p>Videography Requests</p>
                                                </div>
                                                {selectDynamic === 8 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*In case you require specific Videography Services to craft and showcase your brand's story, products, or services. When requesting video services please specify (in the contact page inside the form) what kind of visual representation you are looking. These include, items, products, store-products, nature, crowds, events, ect. This option does not have to be added, only valid  for Toronto, and Windsor Ontario customers. Thank you. Visit"}
                                                                <a href="/videographyservices">
                                                                    <a className={styles.linktoprojectspage}> https://astrumstellar/services/videographyservices</a>
                                                                </a>
                                                                {" Page for more details."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${DdisplayOgVideo().toFixed(2)} /Video</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}

                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 16 : prevValue === 16 ? null : 16));
                                                }}>
                                                    <p>Logo Intros (With designer)</p>
                                                </div>
                                                {selectDynamic === 16 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Logo intros are a great way to get your logo to come to life. There are crazy renders out there that will make you jealous. Take a look at https://astrumstelar/projects/logos/logointros for some examples on render styles, render engines and more. Most, if not all logo renders will be done by Astrum Stellar, or a trusted designer on my team."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${DdisplayLogoIntros().toFixed(2)} PER LOGO INTRO</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 17 : prevValue === 17 ? null : 17));
                                                }}>
                                                    <p>3d Rendering requests (With designer)</p>
                                                </div>

                                                {selectDynamic === 17 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*In case you require specific Videography Services to craft and showcase your brand's story, products, or services. When requesting video services please specify (in the contact page inside the form) what kind of visual representation you are looking. These include, items, products, store-products, nature, crowds, events, ect. This option does not have to be added, only valid  for Toronto, and Windsor Ontario customers. Thank you. Visit"}
                                                                <a href="/videographyservices">
                                                                    <a className={styles.linktoprojectspage}> https://astrumstellar/services/videographyservices</a>
                                                                </a>
                                                                {" Page for more detaisl."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${Ddisplay3dRenders().toFixed(2)} PER VIDEO</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>
                                                            Add Feature
                                                        </button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>
                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>
                                                    </>
                                                )}




                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 4 : prevValue === 4 ? null : 4));
                                                }}>
                                                    <p>Extra Pages/Links</p>
                                                </div>
                                                {selectDynamic === 4 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*For Dynamic Sites, the number of pages defaults to 5 pages minimum, with no extra fee. This price is for any extra pages on the website that you want to create that exceed the 5 page minimum with no charge. Any extra pages (over 5) will fall through this price point."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>After the 5 Included Pages:  ${DdisplayExtraPage().toFixed(2)} PER PAGE</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 5 : prevValue === 5 ? null : 5));
                                                }}>
                                                    <p>CMS (Content Management System)</p>
                                                </div>
                                                {selectDynamic === 5 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*For Dynamic websites,The CMS is full integrated, and MUST be added as it is an essential tool for the site to work. With no CMS, you must choose a Static Site. There are No restrictions on any features, please specify what you'd like. A Content Management System (CMS) is a powerful tool that simplifies website building and content management for developers and non-technical users alike. By integrating a CMS users can make use of SingnIn, SignOut, Create, Delete, Update functions which increases the load of the code, however it is essential for a site needing some of the functions stated (example: a dashboard center for employees on payroll, or even a blog site that requires higher levels of management with users, posts, likes, emails etc)."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price: ${DdisplayCms().toFixed(2)}</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 6 : prevValue === 6 ? null : 6));
                                                }}>
                                                    <p>Original Javascript Code</p>
                                                </div>
                                                {selectDynamic === 6 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*The Code is carefully written from scratch, giving you utmost flexibility with your design requirements. With a  fully working website you will need to make sure both the front and backend is taken care of efficiently. I specialize in personlizing websites, adjusting SEO, CDNs, etc, and such tools need to be seamlessly integrated together to deliver one final product that is satisfactory. Assembled by Astrum Stellar, the project and rights to the code will be handed to you after the work is done."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${DdisplayOgCode().toFixed(2)}</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 7 : prevValue === 7 ? null : 7));
                                                }}>
                                                    <p>Database Integration</p>
                                                </div>
                                                {selectDynamic === 7 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Database integration simply refers to the addition of a database system in your website. For Dynamic websites, a database system most likely required and necessary. The options are limitless, as long as your requirements adhere to to the structure of a regular dynamic website. For shop owners: If you have a store that you would like to make a website for, you fall under the dynamic website category, unless you are trying to sell your items/products on a multi platform system (like shopify, etsy, etc), then you fall under the category of ecommerce."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${DdisplayDb().toFixed(2)}</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 19 : prevValue === 19 ? null : 19));
                                                }}>
                                                    <p>Monthly Fee </p>
                                                </div>
                                                {selectDynamic === 19 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*The only recurrent fee other than the yearly fee( of $18.00 for the domain) is the *maintenance fee and the *storage fee which are rolled into one price.For the Ecommerce package, the maintenance fee is only $30/Month. No other feels to worry about as long as you pay this monthly amount and the yearly amount of $18.00. Upon yeary renewal of the domain, you will be geting email reminders that your domain is about to expire and that you should pay for it. Options for 5 year domain holds, and 10 year domain holds as  well."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${DdisplayMonthlyFee().toFixed(2)} PER MONTH</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Dynamic_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Dynamic_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>
                                                    </>
                                                )}

                                            <div className={styles.itemPrice}>
                                                <h2 className={styles.itemPricepiece}>Total Price: ${dynamicitemPrice.toFixed(2)}
                                                    <button className={styles.clear_button} onClick={clear_Dynamic_Feature_button}>Clear/Restart</button>
                                                </h2>
                                            </div>
                                        </div>
                                        </li>







                                        <li className={styles.menutitle}> <p style={{
                                            marginBottom: "10px"
                                        }} > Ecommerce Sites </p>

                                            <span className={styles.tabinfowrapper}>
                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>Original Js Code:</span> *Base price of the project*</span>

                                                <span className={styles.tabinfo}> <span className={styles.tabtitle}>Storage Space:  </span> 80 GB </span>

                                                <span className={styles.tabinfo}> <span className={styles.tabtitle}>Ram:</span> 2.6 GB </span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>Bandwith:</span> Unmetered</span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>Ip:</span> Dedicated Ip</span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>CDN: </span> Cloudflare</span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>Deployment Sytem:</span> Node.Js</span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>HOSTING:</span> VPS, Fully Redundant Network</span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>CMS:</span> Fully Integrated CMS.</span>

                                                <span className={styles.tabinfo}><span className={styles.tabtitle}>Web Pages (Page Links):</span> 5 Pages Min At No Extra Cost</span>
                                            </span>


                                            <div>

                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 0 : prevValue === 0 ? null : 0));
                                                }}>
                                                    <p>Private Domain</p>
                                                </div>                                                                      {selectEcommerce === 0 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"A private domain is a web address that you can register and own exclusively for your online presence, such as a personal website or a business website. Unlike a non-private domain, which may involve sharing a domain name with other users or displaying your personal information publicly, a private domain provides you with enhanced security, privacy, and control over your digital identity. Add this item if you would like to register a private domain with your website."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayPrivateDomain().toFixed(2)}/yr Per Domain</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}



                                                <div
                                                    className={styles.menuitem}
                                                    onClick={() => {
                                                        // Check if selectStatic is already 0, if yes, set showDescription to false
                                                        if (selectEcommerce === 1) {
                                                            setShowDescription(false);
                                                        }
                                                        // Toggle the selectStatic value
                                                        setselectEcommerce((prevValue) => (prevValue === null ? 9 : prevValue === 9 ? null : 9));
                                                    }}
                                                >
                                                    <p>Free Domain</p>
                                                </div>



                                                {selectEcommerce === 9 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"A Free domain is a web address that you can register and own exclusively for your online presence, such as a personal website or a business website. Unlike a private domain, which lets you own the name without adding another domain name to the url. Your website will always end with vercel's domain name. Example:https://yourchosendomainname.vercel.app "}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price: ${EdisplayFreeDomain().toFixed(2)}/yr</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>

                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}

                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>
                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 3 : prevValue === 3 ? null : 3));
                                                }}>
                                                    <p>VPS Storage Space</p>
                                                </div>
                                                {selectEcommerce === 3 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*This item is already included in the package as is. For Static Sites, you get 2.6 GB of ram right off the bat. This is not to be confused with storage space. Ram details usually do not come with the plan details in sites like Wix, to encourage people to take on their plans while ignoring this important detail, mostly because ram space is shared amongst site owners on a server. I give you your own Ram, and you do not have to share it with anyone unless you specifically are interested in load balancing. If so please specify your request."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayVpsStorage().toFixed(2)} 80 GB INCLUDED</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 18 : prevValue === 18 ? null : 18));
                                                }}>
                                                    <p>VPS Ram Space</p>
                                                </div>

                                                {selectEcommerce === 18 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*This item is already included in the package as is. For Static Sites, you get 40GB Storage right off the bat which is included in your payment of $12.00/Month. Compare that to Wix's price of $29/Month for 35GB of storage space (plus 5 hours of video on top, ahem.. good try Wix). If you would like more storage spacce, please specify how much more you think you will need, however with small to medium size businesses, 40GB is quite a lot of space. On top of that, I want to make sure you know that I keep storage space a priority for my clients meaning that when I build your site, I ensure that file size and page load speeds are taken into account to deliver the most acceptable results."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price: ${EdisplayVpsRam().toFixed(2)} 2.6 GB INCLUDED</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}

                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>
                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}



                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 1 : prevValue === 1 ? null : 1));
                                                }}>
                                                    <p>Text/Information Content As A Service</p>
                                                </div>
                                                {selectEcommerce === 1 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*If you need help with creating the actual content, i.e. the text content (For translation services and use of other languages:I can provide english to french translations, however any other language must be translated by you for it to be used), I will always provide originality and authenticity, no plagiarism or rehashed ideas. Your content will be exclusively yours when the project is turned over into your care."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayOgText().toFixed(2)}/Page</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 2 : prevValue === 2 ? null : 2));
                                                }}>
                                                    <p>Use of Ai-Art</p>
                                                </div>
                                                {selectEcommerce === 2 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Explore new artistic horizons without fear of exploitation and assure maxium ownership security and copyright for yourself. You can request precise Ai art that will be coming straight from Open Ai's art hub. (for example: Different Versions of Movie characters, abstract art, car models, the list is infinite.) Image types offered:PEG/JPG (.jpeg, .jpg), PNG (.png), GIF (.gif), TIFF (.tiff, .tif), BMP (.bmp), WebP (.webp), SVG (.svg), RAW (.raw), PSD (.psd), EPS (.eps), ICO (.ico), JP2 (.jp2)"}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayOgArt().toFixed(2)}/page</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}

                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 10 : prevValue === 10 ? null : 10));
                                                }}>
                                                    <p>Use of Royalty-Free Images</p>
                                                </div>
                                                {selectEcommerce === 10 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Royalty free images are excellent grade images taken from photographers around the world, posted for your free use without complaints of copyright. Examples:https://pixabay.com/, or https://www.pexels.com/royalty-free-images/. Image types offered:PEG/JPG (.jpeg, .jpg), PNG (.png), GIF (.gif), TIFF (.tiff, .tif), BMP (.bmp), WebP (.webp), SVG (.svg), RAW (.raw), PSD (.psd), EPS (.eps), ICO (.ico), JP2 (.jp2)"}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayRoyalty().toFixed(2)}/Page</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}

                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 11 : prevValue === 11 ? null : 11));
                                                }}>
                                                    <p>Personal Photographer</p>
                                                </div>
                                                {selectEcommerce === 11 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*With this option you are choosing to hire a service for photography, aimed only for portraits. With Astrum Stellar, you are guaranteed a photographer that is excellent and passionate about his work. More details on the Photographers I have hired for this role coming soon on my project Page. For now, please specify what kind of images you want and in the contact form go to menu at the top) specify that you want portraits taken of you, and I will send you some example portraits that my artists can do for you. This option does not have to be added, only valid  for Toronto, and Windsor Ontario customers. Thank you."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayPorttrait().toFixed(2)}/PORTRAIT</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}



                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 12 : prevValue === 12 ? null : 12));
                                                }}>
                                                    <p>Photography Requests</p>
                                                </div>
                                                {selectEcommerce === 12 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*You can make photo requests of any kind, that are not Portraits. These include, items, products, store-products, nature, crowds, events, ect. Family pictures fall under the category of Portraits. This option does not have to be added, only valid  for Toronto, and Windsor Ontario customers. Thank you."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayOtherArt().toFixed(2)} For orders of x1 - x25 PHOTOS</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 13 : prevValue === 13 ? null : 13));
                                                }}>
                                                    <p>Need A Graphic Designer?</p>
                                                </div>
                                                {selectEcommerce === 13 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*When it comes to 3d graphic design, there is tons of options to go for. You can choose different render styles, different textures and lighting. Everything will be tailored to meet your specific requirements. Customers love to employ the skills of a graphic designer to bring their ideas to life where Ai-Art cannot. Make your Logos pop, turn yourself into an cartoon doing the handstand, build a floor plan of yuor dream house, design the coolest phone ever made, etc the list is endless. More examples on my 3d Graphic Designs coming out in the Projects page (above menu) soon."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${Edisplay3dGraphics().toFixed(2)} / RENDERED IMAGE</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 14 : prevValue === 14 ? null : 14));
                                                }}>
                                                    <p>Do You Need a Logo?</p>
                                                </div>
                                                {selectEcommerce === 14 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Logos are supposed to be unique and to mean something to your brand. They can be funny, straight to the point, artsitic, or very abstract, you name it. If you don't have a logo already made, Astrum Stellar can help with that. Take a look at the project page you will find more details on logos which lead to more info on  styles and themes you can choose from: https://astrumstellar/projects/logos"}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayLogo().toFixed(2)} PER LOGO</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}



                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 15 : prevValue === 15 ? null : 15));
                                                }}>
                                                    <p>Ryoalty Free Videos</p>
                                                </div>
                                                {selectEcommerce === 15 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Royalty free videos are perfect for anyone looking for videos that match a certain feel but are quite hard to get. They can also be used as a substitute for content when there is no access to a phhotographer or videographer. Royalty free videos can be obtained from a variety of sources, including but not limited to: https://pixabay.com/videos/, https://www.pexels.com/videos/, https://www.pexels.com/videos/, and many more. You have the choice to either submit your selection of royalty free images (make sure that it is royalty free so that you don't sit over copyright laws) or ask me to personally choose them for you. Both options are valid and can be done for no cost at all. Courtesy of Astrum Stellar. Video Formats available but not limited to: MP4 (H.264), WEBM, AVI, MOV, WMV, FLV, MKV, OGV, 3GP, MPEG.."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayRoyaltyVideos().toFixed(2)}</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>
                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 8 : prevValue === 8 ? null : 8));
                                                }}>
                                                    <p>Videography Requests</p>
                                                </div>
                                                {selectEcommerce === 8 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*In case you require specific Videography Services to craft and showcase your brand's story, products, or services. When requesting video services please specify (in the contact page inside the form) what kind of visual representation you are looking. These include, items, products, store-products, nature, crowds, events, ect. This option does not have to be added, only valid  for Toronto, and Windsor Ontario customers. Thank you. Visit"}
                                                                <a href="/videographyservices">
                                                                    <a className={styles.linktoprojectspage}> https://astrumstellar/services/videographyservices</a>
                                                                </a>
                                                                {" Page for more details."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Page:  ${EdisplayOgVideo().toFixed(2)} /Video</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}

                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 16 : prevValue === 16 ? null : 16));
                                                }}>
                                                    <p>Logo Intros (With designer)</p>
                                                </div>
                                                {selectEcommerce === 16 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Logo intros are a great way to get your logo to come to life. There are crazy renders out there that will make you jealous. Take a look at "}
                                                                <a href="https://astrumstelar/projects/logos/logointros" target="_blank" rel="noopener noreferrer">
                                                                    https://astrumstelar/projects/logos/logointros
                                                                </a>
                                                                {" for some examples on render styles, render engines and more. Most, if not all logo renders will be done by Astrum Stellar, or a trusted designer on my team."}
                                                            </p>

                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayLogIntros().toFixed(2)} PER LOGO INTRO</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 17 : prevValue === 17 ? null : 17));
                                                }}>
                                                    <p>3d Rendering requests (With designer)</p>
                                                </div>

                                                {selectEcommerce === 17 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*In case you require specific Videography Services to craft and showcase your brand's story, products, or services. When requesting video services please specify (in the contact page inside the form) what kind of visual representation you are looking. These include, items, products, store-products, nature, crowds, events, ect. This option does not have to be added, only valid  for Toronto, and Windsor Ontario customers. Thank you. Visit"}
                                                                <a href="/videographyservices">
                                                                    <a className={styles.linktoprojectspage}> https://astrumstellar/services/videographyservices</a>
                                                                </a>
                                                                {" Page for more detaisl."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${Edisplay3dRenders().toFixed(2)} PER VIDEO</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>
                                                            Add Feature
                                                        </button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>
                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>
                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 4 : prevValue === 4 ? null : 4));
                                                }}>
                                                    <p>Extra Pages/Links</p>
                                                </div>
                                                {selectEcommerce === 4 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*For Ecommerce Sites, the number of pages defaults to 5 pages minimum, with no extra fee. This price is for any extra pages on the website that you want to create that exceed the 5 page minimum with no charge. Any extra pages (over 5) will fall through this price point."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>After the 5 Included Pages:  ${EdisplayExtraPage().toFixed(2)} PER PAGE</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 5 : prevValue === 5 ? null : 5));
                                                }}>
                                                    <p>CMS (Content Management System)</p>
                                                </div>
                                                {selectEcommerce === 5 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*For Ecommerce websites,The CMS is full integrated, and MUST be added as it is an essential tool for the site to work. No restrictions on any features, please specify what you'd like. A Content Management System (CMS) is a powerful tool that simplifies website building and content management for developers and non-technical users alike. By integrating a CMS users can make use of Create, Delete, Update functions which increases the load of the code, however it is essential for a site needing some of the functions stated (example: a dashboard center for employees on payroll, or even a blog site that requires higher levels of management with users, posts, likes, emails etc)."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayCms().toFixed(2)}</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 6 : prevValue === 6 ? null : 6));
                                                }}>
                                                    <p>Original Javascript Code</p>
                                                </div>
                                                {selectEcommerce === 6 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*The Code is carefully written from scratch, giving you utmost flexibility with your design requirements. With a  fully working website you will need to make sure both the front and backend is taken care of efficiently. I specialize in personlizing websites, adjusting SEO, CDNs, etc, and such tools need to be seamlessly integrated together to deliver one final product that is satisfactory. Assembled by Astrum Stellar, the project and rights to the code will be handed to you after the work is done."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayOgCode().toFixed(2)}</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>

                                                    </>
                                                )}


                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 7 : prevValue === 7 ? null : 7));
                                                }}>
                                                    <p>Database Integration</p>
                                                </div>
                                                {selectEcommerce === 7 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Database integration refers to simply the addition of a database system in your website. For ECOMMERCE websites, a database system is definitely required and necessary. Add this Item to see the full potential value of your purchase."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayDb().toFixed(2)}</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>
                                                    </>
                                                )}

                                                <div className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 19 : prevValue === 19 ? null : 19));
                                                }}>
                                                    <p>Monthly Fee </p>
                                                </div>
                                                {selectEcommerce === 19 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*The only recurrent fee other than the yearly fee( of $18.00 for the domain) is the *maintenance fee and the *storage fee which are rolled into one price.For the Ecommerce package, the maintenance fee is only $30/Month. No other feels to worry about as long as you pay this monthly amount and the yearly amount of $18.00. Upon yeary renewal of the domain, you will be geting email reminders that your domain is about to expire and that you should pay for it. Options for 5 year domain holds, and 10 year domain holds as  well."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayMonthlyFee().toFixed(2)} PER MONTH</h2>
                                                            {/* Your pricing calculator UI here */}
                                                            {/* For example, you can use form inputs for user selections */}
                                                        </div>
                                                        {addedpromptMessage && (
                                                            <p
                                                                style={{
                                                                    fontWeight: 400,
                                                                    fontSize: "10px",
                                                                    color: addedpromptMessage.color,
                                                                }}
                                                            >
                                                                {addedpromptMessage.message}
                                                            </p>
                                                        )}
                                                        <button className={styles.add_button} onClick={add_Ecommerce_Feature_button}>Add Feature</button>
                                                        <button className={styles.delete_button} onClick={delete_Ecommerce_Feature_button}>Delete Feature</button>
                                                        <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>

                                                        <button className={styles.details} onClick={toggleDescription}>
                                                            Feature Specs/Details
                                                        </button>
                                                    </>
                                                )}

                                            <div className={styles.itemPrice}>
                                                <h2 className={styles.itemPricepiece}>Total Price: ${ecommerceitemPrice.toFixed(2)}
                                                    <button className={styles.clear_button} onClick={clear_Ecommerce_Feature_button}>Clear/Restart</button>
                                                </h2>
                                            </div>
                                        </div>
                                        </li>



                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </Section>
            </Container>
        </>
    );
}


export default Pricing;





































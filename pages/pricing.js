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
    const staticPrices = [18.00, 40.00, 75.00, 35.00, 50.00, 0.00, 600.00, 0.00, 85.00];
    const dynamicPrices = [25.00, 40.00, 75.00, 35.00, 75.00, 200.00, 700.00, 100.00, 85.00];
    const ecommercePrices = [35.00, 45.00, 75.00, 35.00, 85.00, 300.00, 800.00, 200.00, 85.00];



    // the trigger that sends the selected feature's price to the grand total
    const add_Static_Feature_button = () => {
        // Check if selectStatic is not null and is within the range of staticPrices array
        if (selectStatic !== null && selectStatic >= 0 && selectStatic < staticPrices.length) {
            // Add the selected static feature's price to the current itemPrice state
            setstaticitemPrice((prevPrice) => prevPrice + staticPrices[selectStatic]);
        }

        setTimeout(() => {
            setaddedpromptMessage({ message: "Item added!", color: "#8fce00" });

            // Clear the "Item added" message after 200ms
            setTimeout(() => {
                setaddedpromptMessage("");
            }, 400);
        }, 700);
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


    const grand_total = () => {
        let total = 0;
        // Add the selected static feature price
        if (selectStatic !== null && selectStatic >= 0 && selectStatic < staticPrices.length) {
            total += staticPrices[selectStatic];
        }
        // Add the selected dynamic feature price (if applicable)
        // Add the selected ecommerce feature price (if applicable)

        // Repeat the above for dynamic and ecommerce features, similar to the code in add_Static_Feature_button function

        return total;
    };



    const SdisplayPrivateDomain = () => {
        return staticPrices[0];
    };
    const SdisplayOgText = () => {
        return staticPrices[1];
    };
    const SdisplayOgArt = () => {
        return staticPrices[2];
    };

    const SdisplayNewLogo = () => {
        return staticPrices[3];
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
    const DdisplayOgText = () => {
        return dynamicPrices[1];
    };
    const DdisplayOgArt = () => {
        return dynamicPrices[2];
    };
    const DdisplayNewLogo = () => {
        return staticPrices[3];
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
    const EdisplayOgText = () => {
        return ecommercePrices[1];
    };
    const EdisplayOgArt = () => {
        return ecommercePrices[2];
    };
    const EdisplayNewLogo = () => {
        return ecommercePrices[3];
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
                    Use This Page to estimate the cost of the website you want to build
                </h1>
                <h1 style={{
                    opacity: "50%",
                    color: "#ffffff",
                    padding: "15px",
                    fontSize: "15px"
                }}>
                    You can choose between 3 types of websites
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
                                color: "mintcream"
                            }}>Static Websites</li> </a>

                    <a href='https://designmodo.com/static-website-hosting/#what-is-a-static-website'>
                        <li
                            style={{
                                marginTop: "10px",
                                marginBottom: "10px",
                                color: "mintcream"
                            }}>Dynamic Websites</li> </a>
                    <a href='https://ecommerceguide.com/guides/what-is-ecommerce/'>
                        <li
                            style={{
                                marginTop: "10px",
                                marginBottom: "10px",
                                color: "mintcream"
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
                    padding: "10%",
                    filter: "contrast(80%)", borderRadius: "0.5rem",
                }}
                >
                    <ul style={{
                        listStyle: "none",
                        borderRadius: "0.55rem",
                        padding: "30px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        filter: "contrast(100%)",

                        backgroundImage: "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.designtrends.com%2Fwp-content%2Fuploads%2F2015%2F11%2F12093224%2FTransparent-Glass-Texture2.png&f=1&nofb=1&ipt=4f1fd231b97c4487eec561a077f2c8f8c4f66181582847927228505b5779ad40&ipo=images)",
                    }} className={styles.steplist}
                    >
                        <li style={{
                            marginBottom: "10px",
                            marginTop: "10px",
                            color: "#ffffff",
                            fontWeight: "600",
                        }}
                        ><span>1:</span>  Identify the category that best suits for your needs.</li>
                        <li
                            style={{
                                marginBottom: "10px",
                                marginTop: "10px",
                                color: "#ffffff",
                                fontWeight: "600",
                            }}><span>2:</span> Select the "add feature" button on the item you want,  and it will drop the price into the calculator below. Add all the features that matter to you the most, not all may be absolutely necessary. If you've made an error you can clear your choices or remove them.
                            <span>*Example: If you are looking for just one page to be made, or you want a full scale websited with client interaction, each feature explains what it's there for. Toggle the yellow "details" button to see each feature specs.</span>
                        </li>
                        <li style={{
                            marginBottom: "10px",
                            marginTop: "10px",
                            color: "#ffffff",
                            fontWeight: "600",
                        }}>
                            <span>3:</span> The price will be displayed at the bottom, allowing you to make an informed decision on your choices. Click on "Contact" at the top of the page ( or open the menu button if you are on mobile) and fill out the form, specifying which features you have chosen, and add any relevant details or questions. Send the Form!
                        </li>

                        <li style={{
                            marginBottom: "10px",
                            marginTop: "10px",
                            color: "#ffffff",
                            fontWeight: "600",
                        }}>4:Check your inbox for a reply from Astrum Stellar. Thank you.</li>
                    </ul>
                </div>







                <Section delay={0.1}>
                    <div className={styles.pricing_page_parent}>
                        <div className={styles.pricing_page_wrapper}>

                            <div className={styles.tabs_wrapper}>
                                <div className={styles.togglemenu}>
                                    <ul>

                                        <li className={styles.menutitle}>  <p style={{
                                            marginBottom: "40px"
                                        }}> Static Sites</p>
                                            <ul>


                                                <li
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
                                                </li>



                                                {selectStatic === 0 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"A private domain is a web address that you can register and own exclusively for your online presence, such as a personal website or a business website. Unlike a non-private domain, which may involve sharing a domain name with other users or displaying your personal information publicly, a private domain provides you with enhanced security, privacy, and control over your digital identity."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price: ${SdisplayPrivateDomain().toFixed(2)}/yr</h2>
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
                                                    <p>Text/Information Content as a Service</p>

                                                </li>


                                                {selectStatic === 1 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Originality and authenticity, no plagiarism or rehashed ideas. Your content will be exclusively yours when the project is turned over into your care."}
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


                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 2 : prevValue === 2 ? null : 2));
                                                }}>
                                                    <p>Use of Art/Images</p>
                                                </li>

                                                {selectStatic === 2 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Explore new artistic horizons without fear of exploitation and assure maxium ownership security and copyright for yourself. You can request precise visual imagery for your business, or other personal needs (for example: A series of photographs for the home page of your business&apos;s website, or a self portrait of yourself for your portfolio.) Image types offered:PEG/JPG (.jpeg, .jpg), PNG (.png), GIF (.gif), TIFF (.tiff, .tif), BMP (.bmp), WebP (.webp), SVG (.svg), RAW (.raw), PSD (.psd), EPS (.eps), ICO (.ico), JP2 (.jp2)"}
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

                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 8) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 8 : prevValue === 8 ? null : 8));
                                                }}>
                                                    <p>Use of Videos/Videography</p>
                                                </li>

                                                {selectStatic === 8 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Craft and showcase your brand's story, products, or services. Choose between open-source 3D creation suites like Blender 3D or Final Cut Pro or a Videography Service using the latest tech such as: Sony Alpha a7 III, Fujifilm X-T4, Canon EOS R5, Nikon Z6, Panasonic Lumix GH5 and more. See "}
                                                                <a href="/">
                                                                    <a className={styles.linktoprojectspage}>Projects</a>
                                                                </a>
                                                                {" Page for more."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${SdisplayOgVideo().toFixed(2)}</h2>
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





                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 3 : prevValue === 3 ? null : 3));
                                                }}>
                                                    <p>Logo Creation/Edits</p>
                                                </li>

                                                {selectStatic === 3 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*No two brands are the same, and neither should their logos be. Logo Creation Service is all about customization and tailoring the design to suit a business's unique requirements. Whether you need a sleek, modern logo for a tech startup or an elegant and timeless emblem for a luxury brand,you can get a design that stands out from the crowd."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price: ${SdisplayNewLogo().toFixed(2)}/Logo</h2>
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
                                                    setselectStatic((prevValue) => (prevValue === null ? 4 : prevValue === 4 ? null : 4));
                                                }}>
                                                    <p>Extra Page Code</p>
                                                </li>
                                                {selectStatic === 4 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"  *Static Sites: Defaults at 2 pages for free, any extra pages requested will fall through this price point.   *Dynamic Sites: Defaults at 5 pages for free, any extra pages requested will fall through this price point.   *Ecommerce Sites: Defaults at 5 pages for free, any extra pages requested will fall through this price point."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price: ${SdisplayExtraPage().toFixed(2)}/Xtra Page</h2>
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
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 5 : prevValue === 5 ? null : 5));
                                                }}>
                                                    <p>CMS (Content Management System)</p>
                                                </li>
                                                {selectStatic === 5 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*No CMS included for static sites. A Content Management System (CMS) is a powerful tool that simplifies website building and content management for developers and non-technical users alike. By integrating a CMS users can make use of Create, Delete, Update functions which increases the load of the code, however it is essential for a site needing some of the functions stated (example: a dashboard center for employees on payroll, or even a blog site that requires higher levels of management with users, posts, likes, emails etc)."}

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

                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 6 : prevValue === 6 ? null : 6));
                                                }}>
                                                    <p>Original Javascript Code</p>
                                                </li>
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

                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectStatic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectStatic((prevValue) => (prevValue === null ? 7 : prevValue === 7 ? null : 7));
                                                }}>
                                                    <p>Database Integration</p>
                                                </li>
                                                {selectStatic === 7 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Craft and showcase your brand's story, products, or services. Choose between open-source 3D creation suites like Blender 3D or Final Cut Pro or a Videography Service using the latest tech such as: Sony Alpha a7 III, Fujifilm X-T4, Canon EOS R5, Nikon Z6, Panasonic Lumix GH5 and more. "}

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

                                            </ul>
                                        </li>

                                        <div className={styles.itemPrice}>
                                            <h2 className={styles.itemPricepiece}>Total Price: ${staticitemPrice.toFixed(2)}</h2>
                                        </div>




                                        <li className={styles.menutitle}> <p style={{
                                            marginBottom: "40px"
                                        }}> Dynamic Sites </p>
                                            <ul>


                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 0 : prevValue === 0 ? null : 0));
                                                }}>
                                                    <p>Private Domain</p>
                                                </li>
                                                {selectDynamic === 0 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*A private domain is a web address that you can register and own exclusively for your online presence, such as a personal website or a business website. Unlike a non-private domain, which may involve sharing a domain name with other users or displaying your personal information publicly, a private domain provides you with enhanced security, privacy, and control over your digital identity."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price: ${DdisplayPrivateDomain().toFixed(2)}</h2>
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


                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 1 : prevValue === 1 ? null : 1));
                                                }}>
                                                    <p>Text/Information Content as a Service</p>
                                                </li>
                                                {selectDynamic === 1 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Originality and authenticity, no plagiarism or rehashed ideas. Your content will be exclusively yours when the project is turned over into your care."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${DdisplayOgText().toFixed(2)}</h2>
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


                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 2 : prevValue === 2 ? null : 2));
                                                }}>
                                                    <p>Use of Art/Images</p>
                                                </li>
                                                {selectDynamic === 2 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Explore new artistic horizons without fear of exploitation and assure maxium ownership security and copyright for yourself. You can request precise visual imagery for your business, or other personal needs (for example: A series of photographs for the home page of your business&apos;s website, or a self portrait of yourself for your portfolio.) Image types offered:PEG/JPG (.jpeg, .jpg), PNG (.png), GIF (.gif), TIFF (.tiff, .tif), BMP (.bmp), WebP (.webp), SVG (.svg), RAW (.raw), PSD (.psd), EPS (.eps), ICO (.ico), JP2 (.jp2)"}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${DdisplayOgArt().toFixed(2)}</h2>
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


                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 8) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 8 : prevValue === 8 ? null : 8));
                                                }}>
                                                    <p>Use of Videos/Videography</p>
                                                </li>
                                                {selectDynamic === 8 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Craft and showcase your brand's story, products, or services. Choose between open-source 3D creation suites like Blender 3D or Final Cut Pro or a Videography Service using the latest tech such as: Sony Alpha a7 III, Fujifilm X-T4, Canon EOS R5, Nikon Z6, Panasonic Lumix GH5 and more. See"}
                                                                <a href="/">
                                                                    <a className={styles.linktoprojectspage}>Projects</a>
                                                                </a>
                                                                {" Page for more."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${DdisplayOgVideo().toFixed(2)}</h2>
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

                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 0 : prevValue === 3 ? null : 3));
                                                }}>
                                                    <p>Logo Creation/Edits</p>
                                                </li>
                                                {selectDynamic === 3 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*No two brands are the same, and neither should their logos be. Logo Creation Service is all about customization and tailoring the design to suit a business's unique requirements. Whether you need a sleek, modern logo for a tech startup or an elegant and timeless emblem for a luxury brand,you can get a design that stands out from the crowd."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${DdisplayNewLogo().toFixed(2)}</h2>
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


                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 4 : prevValue === 4 ? null : 4));
                                                }}>
                                                    <p>Extra Page Code</p>
                                                </li>
                                                {selectDynamic === 4 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"  *Static Sites: Defaults at 2 pages for free, any extra pages requested will fall through this price point.   *Dynamic Sites: Defaults at 5 pages for free, any extra pages requested will fall through this price point.   *Ecommerce Sites: Defaults at 5 pages for free, any extra pages requested will fall through this price point."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${DdisplayExtraPage().toFixed(2)}</h2>
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


                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 5 : prevValue === 5 ? null : 5));
                                                }}>
                                                    <p>CMS (Content Management System)</p>
                                                </li>
                                                {selectDynamic === 5 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*No CMS included for static sites. A Content Management System (CMS) is a powerful tool that simplifies website building and content management for developers and non-technical users alike. By integrating a CMS users can make use of Create, Delete, Update functions which increases the load of the code, however it is essential for a site needing some of the functions stated (example: a dashboard center for employees on payroll, or even a blog site that requires higher levels of management with users, posts, likes, emails etc)."}

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


                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 6 : prevValue === 6 ? null : 6));
                                                }}>
                                                    <p>Original Javascript Code</p>
                                                </li>
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


                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectDynamic === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectDynamic((prevValue) => (prevValue === null ? 7 : prevValue === 7 ? null : 7));
                                                }}>
                                                    <p>Database Integration</p>
                                                </li>
                                                {selectDynamic === 7 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Craft and showcase your brand's story, products, or services. Choose between open-source 3D creation suites like Blender 3D or Final Cut Pro or a Videography Service using the latest tech such as: Sony Alpha a7 III, Fujifilm X-T4, Canon EOS R5, Nikon Z6, Panasonic Lumix GH5 and more. "}

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

                                            </ul>
                                        </li>
                                        <div className={styles.itemPrice}>
                                            <h2 className={styles.itemPricepiece}>Total Price: ${staticitemPrice.toFixed(2)}</h2>
                                        </div>





                                        <li className={styles.menutitle}> <p style={{
                                            marginBottom: "40px"
                                        }} > Ecommerce Sites </p>
                                            <ul>


                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 0 : prevValue === 0 ? null : 0));
                                                }}>
                                                    <p>Private Domain</p>
                                                </li>                                                                      {selectEcommerce === 0 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"A private domain is a web address that you can register and own exclusively for your online presence, such as a personal website or a business website. Unlike a non-private domain, which may involve sharing a domain name with other users or displaying your personal information publicly, a private domain provides you with enhanced security, privacy, and control over your digital identity."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayPrivateDomain().toFixed(2)}</h2>
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


                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 1 : prevValue === 1 ? null : 1));
                                                }}>
                                                    <p>Text/Information Content as a Service</p>
                                                </li>
                                                {selectEcommerce === 1 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Originality and authenticity, no plagiarism or rehashed ideas. Your content will be exclusively yours when the project is turned over into your care."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayOgText().toFixed(2)}</h2>
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


                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 2 : prevValue === 2 ? null : 2));
                                                }}>
                                                    <p>Use of Art/Images</p>
                                                </li>
                                                {selectEcommerce === 2 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Explore new artistic horizons without fear of exploitation and assure maxium ownership security and copyright for yourself. You can request precise visual imagery for your business, or other personal needs (for example: A series of photographs for the home page of your business&apos;s website, or a self portrait of yourself for your portfolio.) Image types offered:PEG/JPG (.jpeg, .jpg), PNG (.png), GIF (.gif), TIFF (.tiff, .tif), BMP (.bmp), WebP (.webp), SVG (.svg), RAW (.raw), PSD (.psd), EPS (.eps), ICO (.ico), JP2 (.jp2)"}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayOgArt().toFixed(2)}</h2>
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


                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 8) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 8 : prevValue === 8 ? null : 8));
                                                }}>
                                                    <p>Use of Videos/Videography</p>
                                                </li>
                                                {selectEcommerce === 8 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Craft and showcase your brand's story, products, or services. Choose between open-source 3D creation suites like Blender 3D or Final Cut Pro or a Videography Service using the latest tech such as: Sony Alpha a7 III, Fujifilm X-T4, Canon EOS R5, Nikon Z6, Panasonic Lumix GH5 and more. See "}
                                                                <a href="/">
                                                                    <a className={styles.linktoprojectspage}>Projects</a>
                                                                </a>
                                                                {" Page for more."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayOgVideo().toFixed(2)}</h2>
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



                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 3 : prevValue === 3 ? null : 3));
                                                }}>
                                                    <p>Logo Creation/Edits</p>
                                                </li>
                                                {selectEcommerce === 3 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*No two brands are the same, and neither should their logos be. Logo Creation Service is all about customization and tailoring the design to suit a business's unique requirements. Whether you need a sleek, modern logo for a tech startup or an elegant and timeless emblem for a luxury brand,you can get a design that stands out from the crowd."}

                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayNewLogo().toFixed(2)}</h2>
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


                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 4 : prevValue === 4 ? null : 4));
                                                }}>
                                                    <p>Extra Page Code</p>
                                                </li>
                                                {selectEcommerce === 4 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"  *Static Sites: Defaults at 2 pages for free, any extra pages requested will fall through this price point.   *Dynamic Sites: Defaults at 5 pages for free, any extra pages requested will fall through this price point.   *Ecommerce Sites: Defaults at 5 pages for free, any extra pages requested will fall through this price point."}
                                                            </p>
                                                        )}
                                                        {!showDescription && (
                                                            <p className={`${styles.description} ${styles.inactive}`}>
                                                                {/* Emptyyyy */}
                                                            </p>
                                                        )}
                                                        <div className={styles.calculator_wrapper}>
                                                            <h2>Item Price:  ${EdisplayExtraPage().toFixed(2)}</h2>
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


                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 5 : prevValue === 5 ? null : 5));
                                                }}>
                                                    <p>CMS (Content Management System)</p>
                                                </li>
                                                {selectEcommerce === 5 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*No CMS included for static sites. A Content Management System (CMS) is a powerful tool that simplifies website building and content management for developers and non-technical users alike. By integrating a CMS users can make use of Create, Delete, Update functions which increases the load of the code, however it is essential for a site needing some of the functions stated (example: a dashboard center for employees on payroll, or even a blog site that requires higher levels of management with users, posts, likes, emails etc)."}

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


                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 6 : prevValue === 6 ? null : 6));
                                                }}>
                                                    <p>Original Javascript Code</p>
                                                </li>
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


                                                <li className={styles.menuitem} onClick={() => {
                                                    // Check if selectStatic is already 0, if yes, set showDescription to false
                                                    if (selectEcommerce === 1) {
                                                        setShowDescription(false);
                                                    }
                                                    // Toggle the selectStatic value
                                                    setselectEcommerce((prevValue) => (prevValue === null ? 7 : prevValue === 7 ? null : 7));
                                                }}>
                                                    <p>Database Integration</p>
                                                </li>
                                                {selectEcommerce === 7 && (
                                                    <>
                                                        {showDescription && (
                                                            <p className={`${styles.description} ${styles.active}`}>
                                                                {"*Craft and showcase your brand's story, products, or services. Choose between open-source 3D creation suites like Blender 3D or Final Cut Pro or a Videography Service using the latest tech such as: Sony Alpha a7 III, Fujifilm X-T4, Canon EOS R5, Nikon Z6, Panasonic Lumix GH5 and more. "}

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

                                            </ul>
                                        </li>

                                        <div className={styles.itemPrice}>
                                            <h2 className={styles.itemPricepiece}>Total Price: ${staticitemPrice.toFixed(2)}</h2>
                                        </div>

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





































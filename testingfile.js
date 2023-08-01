
import React, { useEffect, useState } from 'react';
import Layout from '../components/layouts/article2';
import { Container, Heading, Button } from '@chakra-ui/react';
import styles from "/styles/pricing.module.css"
import Section from '../components/section';


function Pricing() {
  const [selectStatic, setselectStatic] = useState(null);
  const [selectDynamic, setselectDynamic] = useState(null);
  const [selectEcommerce, setselectEcommerce] = useState(null);
  const [itemPrice, setitemPrice] = useState(0);
  const [priceTag, setpriceTag] = useState(0);

  const [showDescription, setShowDescription] = useState(false);

  // Function to toggle the description visibility
  const toggleDescription = () => {
    setShowDescription((prevValue) => !prevValue);

  };


  // Define the prices for each menu item
  const staticPrices = [18.00, 40.00, 75.00, 35.00, 50.00, 0.00, 600.00, 0.00];
  const dynamicPrices = [25.00, 40.00, 75.00, 35.00, 75.00, 200.00, 700.00, 100.00];
  const ecommercePrices = [35.00, 45.00, 75.00, 35.00, 85.00, 300.00, 800.00, 200.00];

  const add_itemPrice = () => {
    let total = 0;

    if (staticPrices !== null) {
      total += staticPrices[selectStatic];
    }

    if (dynamicPrices !== null) {
      total += dynamicPrices[selectDynamic];
    }

    if (ecommercePrices !== null) {
      total += ecommercePrices[selectEcommerce];
    }

    // Update the itemPrice state with the calculated total
    setitemPrice(total);
  };

  const add_priceTag = () => {
    let total = 0;

    // Calculate total for "Static Sites" category
    if (selectStatic !== null) {
      total += itemPrice[setitemPrice];
    }

    // Calculate total for "Dynamic Sites" category
    if (selectDynamic !== null) {
      total += itemPrice[setitemPrice];
    }

    // Calculate total for "Ecommerce Sites" category
    if (selectEcommerce !== null) {
      total += itemPrice[setitemPrice];
    }

    // Update the itemPrice state with the calculated total
    setitemPrice(total);
  }



  return (
    <>
      <div className={styles.layoutdiv}>
        <Layout title="Pricing-Plans">
        </Layout>
      </div>


      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Pricing And Details
        </Heading>

        <Section delay={0.1}>
          <div className={styles.pricing_page_parent}>
            <div className={styles.pricing_page_wrapper}>

              <div className={styles.tabs_wrapper}>
                <div className={styles.togglemenu}>
                  <ul>




                    <li className={styles.menutitle}>Static Sites
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
                            {showDescription && <p className={styles.description}>Description for Private Domain</p>}
                            <div className='calculator_wrapper'>
                              <h2>Item Price: ${priceTag}/yr</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>
                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}




                        <li className={styles.menuitem} onClick={() => setselectStatic((prevValue) => (prevValue === null ? 1 : prevValue === 1 ? null : 1))}>
                          <p>Og Text Fee Per Extra Page</p>

                        </li>

                        {selectStatic === 1 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for Og Text Fee Per Page</p>}
                            <div className='calculator_wrapper'>
                              <h2>Item Price: ${priceTag}/Xtra Page</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>

                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>


                          </>
                        )}


                        <li className={styles.menuitem} onClick={() => setselectStatic((prevValue) => (prevValue === null ? 2 : prevValue === 2 ? null : 2))}>
                          <p>Og Art/Copyrights Per Page</p>
                        </li>
                        {selectStatic === 2 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for Og Art/Copyrights Per Page</p>}
                            <div className='calculator_wrapper'>
                              <h2>Item Price: ${priceTag}/Page</h2>

                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>

                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}


                        <li className={styles.menuitem} onClick={() => setselectStatic((prevValue) => (prevValue === null ? 3 : prevValue === 3 ? null : 3))}>
                          <p>New Logo</p>
                        </li>
                        {selectStatic === 3 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for New Logo</p>}
                            <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}/Logo</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>

                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}

                        <li className={styles.menuitem} onClick={() => setselectStatic((prevValue) => (prevValue === null ? 4 : prevValue === 4 ? null : 4))}>
                          <p>Extra Page</p>
                        </li>
                        {selectStatic === 4 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for Cost of extra page</p>}
                            <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}/Xtra Page</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>

                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}


                        <li className={styles.menuitem} onClick={() => setselectStatic((prevValue) => (prevValue === null ? 5 : prevValue === 5 ? null : 5))}>
                          <p>CMS</p>
                        </li>
                        {selectStatic === 5 && (
                          <>
                            {showDescription && <p className={styles.description}>Description Content Management System</p>}
                            <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>

                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}

                        <li className={styles.menuitem} onClick={() => setselectStatic((prevValue) => (prevValue === null ? 6 : prevValue === 6 ? null : 6))}>
                          <p>Original Javascript Code</p>
                        </li>
                        {selectStatic === 6 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for Original Javascript Code</p>}
                            <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>

                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}

                        <li className={styles.menuitem} onClick={() => setselectStatic((prevValue) => (prevValue === null ? 7 : prevValue === 7 ? null : 7))}>
                          <p>Database Integration</p>
                        </li>
                        {selectStatic === 7 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for Database Integration</p>}                          <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>
                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}

                      </ul>
                    </li>

                    <div className={styles.itemPrice}>
                      <h2>Total Price: ${add_itemPrice}</h2>
                      {/* Your pricing calculator UI here */}
                      {/* For example, you can use form inputs for user selections */}
                    </div>


                    <li className={styles.menutitle}>Dynamic Sites
                      <ul>


                        <li className={styles.menuitem} onClick={() => setselectDynamic((prevValue) => (prevValue === null ? 0 : prevValue === 0 ? null : 0))}>
                          <p>Private Domain</p>
                        </li>
                        {selectDynamic === 0 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for Private Domain</p>}                          <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>
                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}


                        <li className={styles.menuitem} onClick={() => setselectDynamic((prevValue) => (prevValue === null ? 1 : prevValue === 1 ? null : 1))}>
                          <p>Og Text Fee Per Page</p>
                        </li>
                        {selectDynamic === 1 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for Og Text Fee Per Page</p>}                          <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>
                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}


                        <li className={styles.menuitem} onClick={() => setselectDynamic((prevValue) => (prevValue === null ? 2 : prevValue === 2 ? null : 2))}>
                          <p>Og Art/Copyrights Per Page</p>
                        </li>
                        {selectDynamic === 2 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for Og Art/Copyrights Per Page</p>}
                            <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>
                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}


                        <li className={styles.menuitem} onClick={() => setselectDynamic((prevValue) => (prevValue === null ? 3 : prevValue === 3 ? null : 3))}>
                          <p>New Logo</p>
                        </li>
                        {selectDynamic === 3 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for New Logo</p>}
                            <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>
                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}


                        <li className={styles.menuitem} onClick={() => setselectDynamic((prevValue) => (prevValue === null ? 4 : prevValue === 4 ? null : 4))}>
                          <p>Extra Page</p>
                        </li>
                        {selectDynamic === 4 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for Extra Page</p>}
                            <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>
                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}


                        <li className={styles.menuitem} onClick={() => setselectDynamic((prevValue) => (prevValue === null ? 5 : prevValue === 5 ? null : 5))}>
                          <p>CMS (Content Management System)</p>
                        </li>
                        {selectDynamic === 5 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for CMS (Content Management System)</p>}
                            <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>
                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}


                        <li className={styles.menuitem} onClick={() => setselectDynamic((prevValue) => (prevValue === null ? 6 : prevValue === 6 ? null : 6))}>
                          <p>Original Javascript Code</p>
                        </li>
                        {selectDynamic === 6 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for Original Javascript Code</p>}
                            <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>
                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}


                        <li className={styles.menuitem} onClick={() => setselectDynamic((prevValue) => (prevValue === null ? 7 : prevValue === 7 ? null : 7))}>
                          <p>Database Integration</p>
                        </li>
                        {selectDynamic === 7 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for Database Integration</p>}
                            <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>
                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}

                      </ul>
                    </li>

                    <div className={styles.itemPrice}>
                      <h2>Total Price: ${itemPrice}</h2>
                      {/* Your pricing calculator UI here */}
                      {/* For example, you can use form inputs for user selections */}
                    </div>




                    <li className={styles.menutitle}>Ecommerce Sites
                      <ul>


                        <li className={styles.menuitem} onClick={() => setselectEcommerce((prevValue) => (prevValue === null ? 0 : prevValue === 0 ? null : 0))}>
                          <p>Private Domain</p>
                        </li>                      {selectEcommerce === 0 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for Private Domain</p>}
                            <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>
                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}


                        <li className={styles.menuitem} onClick={() => setselectEcommerce((prevValue) => (prevValue === null ? 1 : prevValue === 1 ? null : 1))}>
                          <p>Og Text Fee Per Page</p>
                        </li>
                        {selectEcommerce === 1 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for Og Text Fee Per Page</p>}
                            <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>
                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}


                        <li className={styles.menuitem} onClick={() => setselectEcommerce((prevValue) => (prevValue === null ? 2 : prevValue === 2 ? null : 2))}>
                          <p>Og Art/Copyrights Per Page</p>
                        </li>
                        {selectEcommerce === 2 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for Og Art/Copyrights Per Page</p>}
                            <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>
                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}


                        <li className={styles.menuitem} onClick={() => setselectEcommerce((prevValue) => (prevValue === null ? 3 : prevValue === 3 ? null : 3))}>
                          <p>New Logo</p>
                        </li>
                        {selectEcommerce === 3 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for New Logo</p>}
                            <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>
                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}


                        <li className={styles.menuitem} onClick={() => setselectEcommerce((prevValue) => (prevValue === null ? 4 : prevValue === 4 ? null : 4))}>
                          <p>Extra Page</p>
                        </li>
                        {selectEcommerce === 4 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for Extra Page</p>}
                            <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>
                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}


                        <li className={styles.menuitem} onClick={() => setselectEcommerce((prevValue) => (prevValue === null ? 5 : prevValue === 5 ? null : 5))}>
                          <p>CMS (Content Management System)</p>
                        </li>
                        {selectEcommerce === 5 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for CMS (Content Management System)</p>}
                            <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>
                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}


                        <li className={styles.menuitem} onClick={() => setselectEcommerce((prevValue) => (prevValue === null ? 6 : prevValue === 6 ? null : 6))}>
                          <p>Original Javascript Code</p>
                        </li>
                        {selectEcommerce === 6 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for Original Javascript Code</p>}
                            <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>
                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}


                        <li className={styles.menuitem} onClick={() => setselectEcommerce((prevValue) => (prevValue === null ? 7 : prevValue === 7 ? null : 7))}>
                          <p>Database Integration</p>
                        </li>
                        {selectEcommerce === 7 && (
                          <>
                            {showDescription && <p className={styles.description}>Description for Database Integration</p>}
                            <div className={styles.calculator_wrapper}>
                              <h2>Item Price: ${priceTag}</h2>
                              {/* Your pricing calculator UI here */}
                              {/* For example, you can use form inputs for user selections */}
                            </div>
                            <button className={styles.add_button}>Add Feature</button>
                            <button className={styles.delete_button}>Delete Feature</button>
                            <button className={styles.details} onClick={toggleDescription}>
                              Feature Specs/Details
                            </button>

                          </>
                        )}

                      </ul>
                    </li>
                    <div className={styles.itemPrice}>
                      <h2>Total Price: ${itemPrice}</h2>
                      {/* Your pricing calculator UI here */}
                      {/* For example, you can use form inputs for user selections */}
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

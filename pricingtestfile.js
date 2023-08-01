import React, { useEffect, useState } from 'react';
import Layout from '../components/layouts/article';
import styles from "/styles/pricing.module.css"



function Pricing() {
    const [selectStatic, setselectStatic] = useState(null);
    const [selectDynamic, setselectDynamic] = useState(null);
    const [selectEcommerce, setselectEcommerce] = useState(null);
    const [Price, setPrice] = useState(0);
  
    // Update the calculatePrice function to handle the currency values
    const calculatePrice = (selectStatic,selectDynamic,selectEcommerce) => {
      let price = 0;
      switch (selectStatic) {
        //Private Domain S: $18/y 
        case 0:
          price = 18.00;
          break;
          //og text: $40/page 
        case 1:
          price = 40.00;
          break;
          //og art: $75/page
        case 2:
          price = 75.00;
          break;
          //new logo: 35.00
          case 3:
            price = 35.00;
            break;
            //extrapage: $50.00
          case 4:
            price = 50.00;
            break;
            //cms: $0.00
          case 5:
            price = 600.00;
            break;
            //main code:600
            case 6:
                price = 10.00;
                break;
                //database integration: $0.00
              case 7:
                price = 0.00;
                break;       
        default:
          price = 0;
      }
      switch (selectDynamic) {
                //Private Domain S: $25/y 
        case 0:
          price = 25.00;
          break;
          //og text: $40/page 
        case 1:
          price = 40.00;
          break;
        //og art: $75/page
        case 2:
          price = 75.00;
        //new logo: 35.00
        break;
          case 3:
            price = 35.00;
            break;
        //extrapage: $75.00
          case 4:
            price = 75.00;
            break;
        //cms: $200.00
          case 5:
            price = 200.00;
            break;
        //main code:$700
            case 6:
                price = 700;
                break;
         //database integration: $100.00
              case 7:
                price = 100;
                break;       
        default:
          price = 0;
      }


      switch (selectEcommerce) {
         //Private Domain S: $35/y 
        case 0:
            price = 35.00;
            break;
            //og text: $40/page 
          case 1:
            price = 40.00;
            break;
          //og art: $75/page
          case 2:
            price = 75.00;
          break;
               //new logo: 35.00
            case 3:
              price = 35.00;
              break;
          //extrapage: $75.00
            case 4:
              price = 75.00;
              break;
          //cms: $300.00
            case 5:
              price = 200.00;
              break;
          //main code:800
              case 6:
                  price = 700;
                  break;
           //database integration: $200.00
                case 7:
                  price = 200.00;
                  break;       
          default:
            price = 0;
        }
      return price;
    };
      

    const handleTabSelect = (tabIndex) => {
        setselectStatic(tabIndex);
        setselectDynamic(tabIndex);
        setselectEcommerce(tabIndex);
        // Calculate the price when the tab is selected
        const price = calculatePrice(tabIndex);
        setPrice(price);
      };
    
      // Function to handle the "Add Feature" button click event
      const handleAddFeature = (price) => {
        // Add the currency value of the selected description to the total price
        setPrice((prevTotal) => prevTotal + price);
      };

  return (
    <Layout title="Pricing Page">
      <div className={styles.pricing_page_parent}>
        <div className={styles.pricing_page_wrapper}>
          <h1>Pricing Sheet</h1>
  
          <div className={styles.tabs_wrapper}>
            <div className={styles.togglemenu}>
              <ul>
                <li className={styles.menutitle}>Static Sites
                  <ul>

            <div className={styles.straighten}>
                    <li className={styles.menuitem} onClick={() => setselectStatic(0)}>
                      <p>Private Domain</p>
                    </li>                      {selectStatic === 0 && (
                        <>
                          <p className={styles.description}>Description for Private Domain</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}
                      </div>

                    
                    <li className={styles.menuitem} onClick={() => setselectStatic(1)}>
                      <p>Og Text Fee Per Page</p>
                    </li>
                    {selectStatic === 1 && (
                        <>
                          <p className={styles.description}>Description for Og Text Fee Per Page</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}

                      
                    <li className={styles.menuitem} onClick={() => setselectStatic(2)}>
                      <p>Og Art/Copyrights Per Page</p>
                    </li>
                    {selectStatic === 2 && (
                        <>
                          <p className={styles.description}>Description for Og Art/Copyrights Per Page</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}


                    <li className={styles.menuitem} onClick={() => setselectStatic(3)}>
                      <p>New Logo</p>
                    </li>
                    {selectStatic === 3 && (
                        <>
                          <p className={styles.description}>Description for New Logo</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}


                    <li className={styles.menuitem} onClick={() => setselectStatic(4)}>
                      <p>Extra Page</p>
                    </li>
                    {selectStatic === 4 && (
                        <>
                          <p className={styles.description}>Description for Extra Page</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}


                    <li className={styles.menuitem} onClick={() => setselectStatic(5)}>
                      <p>CMS (Content Management System)</p>
                    </li>
                    {selectStatic === 5 && (
                        <>
                          <p className={styles.description}>Description for CMS (Content Management System)</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}


                    <li className={styles.menuitem} onClick={() => setselectStatic(6)}>
                      <p>Original Javascript Code</p>
                    </li>
                    {selectStatic === 6 && (
                        <>
                          <p className={styles.description}>Description for Original Javascript Code</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}


                    <li className={styles.menuitem} onClick={() => setselectStatic(7)}>
                      <p>Database Integration</p>
                    </li>
                    {selectStatic === 7 && (
                        <>
                          <p className={styles.description}>Description for Database Integration</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}

                  </ul>
                </li>
                
                <div className='calculator_wrapper'>
            <h2>Price: ${Price}</h2>
            {/* Your pricing calculator UI here */}
            {/* For example, you can use form inputs for user selections */}
          </div>


                <li className={styles.menutitle}>Dynamic Sites
                  <ul>


                    <li className={styles.menuitem} onClick={() => setselectDynamic(0)}>
                      <p>Private Domain</p>
                    </li>                      {selectDynamic === 0 && (
                        <>
                          <p className={styles.description}>Description for Private Domain</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}

                    
                    <li className={styles.menuitem} onClick={() => setselectDynamic(1)}>
                      <p>Og Text Fee Per Page</p>
                    </li>
                    {selectDynamic === 1 && (
                        <>
                          <p className={styles.description}>Description for Og Text Fee Per Page</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}

                      
                    <li className={styles.menuitem} onClick={() => setselectDynamic(2)}>
                      <p>Og Art/Copyrights Per Page</p>
                    </li>
                    {selectDynamic === 2 && (
                        <>
                          <p className={styles.description}>Description for Og Art/Copyrights Per Page</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}


                    <li className={styles.menuitem} onClick={() => setselectDynamic(3)}>
                      <p>New Logo</p>
                    </li>
                    {selectDynamic === 3 && (
                        <>
                          <p className={styles.description}>Description for New Logo</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}


                    <li className={styles.menuitem} onClick={() => setselectDynamic(4)}>
                      <p>Extra Page</p>
                    </li>
                    {selectDynamic === 4 && (
                        <>
                          <p className={styles.description}>Description for Extra Page</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}


                    <li className={styles.menuitem} onClick={() => setselectDynamic(5)}>
                      <p>CMS (Content Management System)</p>
                    </li>
                    {selectDynamic === 5 && (
                        <>
                          <p className={styles.description}>Description for CMS (Content Management System)</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}


                    <li className={styles.menuitem} onClick={() => setselectDynamic(6)}>
                      <p>Original Javascript Code</p>
                    </li>
                    {selectDynamic === 6 && (
                        <>
                          <p className={styles.description}>Description for Original Javascript Code</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}


                    <li className={styles.menuitem} onClick={() => setselectDynamic(7)}>
                      <p>Database Integration</p>
                    </li>
                    {selectDynamic === 7 && (
                        <>
                          <p className={styles.description}>Description for Database Integration</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}

                  </ul>
                </li>

                <div className='calculator_wrapper'>
            <h2>Total Price: ${Price}</h2>
            {/* Your pricing calculator UI here */}
            {/* For example, you can use form inputs for user selections */}
          </div>


          

                <li className={styles.menutitle}>Ecommerce Sites
                  <ul>


                    <li className={styles.menuitem} onClick={() => setselectEcommerce(0)}>
                      <p>Private Domain</p>
                    </li>                      {selectEcommerce === 0 && (
                        <>
                          <p className={styles.description}>Description for Private Domain</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}

                    
                    <li className={styles.menuitem} onClick={() => setselectEcommerce(1)}>
                      <p>Og Text Fee Per Page</p>
                    </li>
                    {selectEcommerce === 1 && (
                        <>
                          <p className={styles.description}>Description for Og Text Fee Per Page</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}

                      
                    <li className={styles.menuitem} onClick={() => setselectEcommerce(2)}>
                      <p>Og Art/Copyrights Per Page</p>
                    </li>
                    {selectEcommerce === 2 && (
                        <>
                          <p className={styles.description}>Description for Og Art/Copyrights Per Page</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}


                    <li className={styles.menuitem} onClick={() => setselectEcommerce(3)}>
                      <p>New Logo</p>
                    </li>
                    {selectEcommerce === 3 && (
                        <>
                          <p className={styles.description}>Description for New Logo</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}


                    <li className={styles.menuitem} onClick={() => setselectEcommerce(4)}>
                      <p>Extra Page</p>
                    </li>
                    {selectEcommerce === 4 && (
                        <>
                          <p className={styles.description}>Description for Extra Page</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}


                    <li className={styles.menuitem} onClick={() => setselectEcommerce(5)}>
                      <p>CMS (Content Management System)</p>
                    </li>
                    {selectEcommerce === 5 && (
                        <>
                          <p className={styles.description}>Description for CMS (Content Management System)</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}


                    <li className={styles.menuitem} onClick={() => setselectEcommerce(6)}>
                      <p>Original Javascript Code</p>
                    </li>
                    {selectEcommerce === 6 && (
                        <>
                          <p className={styles.description}>Description for Original Javascript Code</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}


                    <li className={styles.menuitem} onClick={() => setselectEcommerce(7)}>
                      <p>Database Integration</p>
                    </li>
                    {selectEcommerce === 7 && (
                        <>
                          <p className={styles.description}>Description for Database Integration</p>
                          <button className={styles.add_button}>Add Feature</button>
                        </>
                      )}

                  </ul>
                </li>
                <div className='calculator_wrapper'>
            <h2>Total Price: ${Price}</h2>
            {/* Your pricing calculator UI here */}
            {/* For example, you can use form inputs for user selections */}
          </div>


          </ul>
        </div>
      </div>

        </div>
      </div>
    </Layout>
  );
}

export default Pricing;

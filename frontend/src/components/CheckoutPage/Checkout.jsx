import React, { useState, useEffect } from 'react';
import { FaCartPlus } from 'react-icons/fa';

function Checkout() {
  const [premium, setPremium] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://insureme.onrender.com/rateData'); // Replace with your API endpoint
      const data = await response.json();
      setPremium(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const toggleAddedStatus = (itemId) => {
    const updatedPremium = premium.map((item) => {
      if (item._id === itemId) {
        return { ...item, addedTocart: !item.addedTocart };
      }
      return item;
    });
    setPremium(updatedPremium);
  };

  return (
    <div className='map'>
      {premium
        .filter((item) => item.AddtoCart)
        .map((data) => {
            return(
            <>
          <div className='premium-component' key={data._id}>
            <div className='premium-heading'>
              <h1 className='premium-age'>Age: {data.age_range}</h1>
              <div className='add-to-cart' onClick={() => toggleAddedStatus(data._id)}>
                {data.AddtoCart ? '✅' : <FaCartPlus className='add-to-cart-img' />}
              </div>
            </div>
          </div>
          </>
        )})}
    </div>
  );
}

export default Checkout;

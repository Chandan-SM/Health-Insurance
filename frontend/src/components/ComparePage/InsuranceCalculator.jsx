import React, { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa'

function InsuranceCalculator() {
  const [ages, setAges] = useState([]);
  const [sumInsured, setSumInsured] = useState(500000);
  const [cityTier, setCityTier] = useState('tier-1');
  const [tenure, setTenure] = useState('1 yr');
  const [premium, setPremium] = useState([]);


  
  const calculatePremium = async () => {
    const response = await fetch('https://insureme.onrender.com/getPremium', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        memberType:ages,
        tier:cityTier,
        price:sumInsured
      })
    });


    const data = await response.json();
    setPremium(data);
  };

  const toggleAddedStatus = async (id) => {
    try {
      const response = await fetch(`https://insureme.onrender.com/addtocart/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const updatedData = await response.json();
        // Update the 'premium' state with the updated data
        setPremium((prevPremium) => {
          const updatedPremium = prevPremium.map((data) => {
            if (data._id === id) {
              return { ...data, addedTocart: !data.addedTocart };
            }
            return data;
          });
          return updatedPremium;
        });
      } else {
        console.error('Failed to toggle added status');
      }
    } 
    catch (error) {
      console.error('An error occurred while toggling added status', error);
    }
  };

  return (
    <div>
      <h2>Health Insurance Premium Calculator</h2>
      
      <div>
        <label>Select number of Insured Members: </label>
        <select value={ages} onChange={e => setAges(e.target.value)}>
          <option value={"1a"}>1 Adult</option>
          <option value={"2a"}>2 Adults</option>
        </select>
      </div>
      
      <div>
        <label>Sum Insured:</label>
        <select value={sumInsured} onChange={e => setSumInsured(parseInt(e.target.value, 10))}>
          <option value={500000}>500,000</option>
          <option value={700000}>700,000</option>
          <option value={1000000}>1000,000</option>
          <option value={1500000}>1500,000</option>
          <option value={2000000}>2000,000</option>
          <option value={2500000}>2500,000</option>
          <option value={3000000}>3000,000</option>
          <option value={4000000}>4000,000</option>
          <option value={5000000}>5000,000</option>
          <option value={6000000}>6000,000</option>
          <option value={7500000}>7500,000</option>
        </select>
      </div>
      
      <div>
        <label>City Tier:</label>
        <select value={cityTier} onChange={e => setCityTier(e.target.value)}>
          <option value="tier-1">Tier 1</option>
          {/* <option value="tier-2">Tier 2</option> */}
        </select>
      </div>
      
      <div>
        <label>Tenure:</label>
        <select value={tenure} onChange={e => setTenure(e.target.value)}>
          <option value="1 yr">1 Year</option>
          {/* <option value="2 yr">2 Years</option> */}
        </select>
      </div>
      
      <button onClick={calculatePremium}>Calculate Premium</button>
      <div className='map'>
      {premium.map((data)=>{
        return (
          <div className='premium-component'>
            <div className='premium-heading'>
              <h1 className='premium-age'>Age: {data.ageRange}</h1>
              <div className='add-to-cart' onClick={() => toggleAddedStatus(data._id)} >{data.addedTocart ? "✅" :<FaCartPlus className='add-to-cart-img' />}</div>
            </div>
            <div className='premium-details'>
              <h3 className='premium-amount'>Rs {data.sumInsured}</h3>
            </div>
          </div>
        );
        })}
      </div>
    </div>
  );
}

export default InsuranceCalculator;
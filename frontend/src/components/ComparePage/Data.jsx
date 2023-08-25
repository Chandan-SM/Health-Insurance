import React, { useState } from 'react';

function Data() {
  const [premiumData, setPremiumData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetPremium = async () => {
    setLoading(true);

    const requestBody = {
      memberType: '1a,2c',
      tier: 'tier-1',
      price: '500000' // Adjust this to the required value
    };

    try {
      const response = await fetch('/api/getPremium', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {
        const data = await response.json();
        setPremiumData(data);
      } else {
        console.error('Error fetching premium data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching premium data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleGetPremium} disabled={loading}>
        Get Premium Data
      </button>
      {loading && <p>Loading...</p>}
      <ul>
        {premiumData.map((data, index) => (
          <li key={index}>
            Age Range: {data.ageRange}<br />
            Member CSV: {data.memberCsv}<br />
            Tier: {data.tier}<br />
            Sum Insured: {data.sumInsured}<br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Data;

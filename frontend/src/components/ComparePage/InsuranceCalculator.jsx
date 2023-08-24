import React, { useState } from 'react';

function InsuranceCalculator() {
  const [ages, setAges] = useState([]);
  const [sumInsured, setSumInsured] = useState(300000);
  const [cityTier, setCityTier] = useState('tier-1');
  const [tenure, setTenure] = useState('1 yr');
  const [premium, setPremium] = useState(null);

  const calculatePremium = async () => {
    const response = await fetch('/calculate-premium', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ages,
        sumInsured,
        cityTier,
        tenure
      })
    });

    const data = await response.json();
    setPremium(data.premium);
  };

  return (
    <div>
      <h2>Health Insurance Premium Calculator</h2>
      
      <div>
  <label>Enter Ages of Insured Members (comma-separated):</label>
  <input
    type="text"
    value={ages.join(', ')}
    onChange={e => setAges(e.target.value.split(',').map(age => age.trim()))}
  />
</div>


      
      <div>
        <label>Sum Insured:</label>
        <select value={sumInsured} onChange={e => setSumInsured(parseInt(e.target.value, 10))}>
          <option value={300000}>300,000</option>
          <option value={400000}>400,000</option>
          <option value={500000}>500,000</option>
        </select>
      </div>
      
      <div>
        <label>City Tier:</label>
        <select value={cityTier} onChange={e => setCityTier(e.target.value)}>
          <option value="tier-1">Tier 1</option>
          <option value="tier-2">Tier 2</option>
        </select>
      </div>
      
      <div>
        <label>Tenure:</label>
        <select value={tenure} onChange={e => setTenure(e.target.value)}>
          <option value="1 yr">1 Year</option>
          <option value="2 yr">2 Years</option>
        </select>
      </div>
      
      <button onClick={calculatePremium}>Calculate Premium</button>
      
      {premium !== null && <p>Calculated Premium: {premium}</p>}
    </div>
  );
}

export default InsuranceCalculator;

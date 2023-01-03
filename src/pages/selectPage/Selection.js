import React, { useState } from 'react';

const Select = () => {
  const [car, setCar] = useState('');

  const handleChange = (e) => {
    setCar(([e.target.name] = e.target.value));
  };
  console.log(car);
  return (
    <div>
      <label htmlFor='cars'>Choose a car:</label>

      <select
        name='Cars'
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <option value=''>Select Car</option>
        <option value='Hatchback'>Hatchback</option>
        <option value='Sedan'>Sedan</option>
        <option value='Suv'>Suv</option>
      </select>
    </div>
  );
};

export default Select;

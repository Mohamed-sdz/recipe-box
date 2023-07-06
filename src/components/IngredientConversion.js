import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const IngredientConversion = () => {
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleConvertClick = () => {
    // Perform conversion logic here
    const converted = convertToNewUnit(inputValue);
    setConvertedValue(converted);
  };

  const convertToNewUnit = value => {
    // Placeholder conversion logic
    return `${value} new units`;
  };

  return (
    <div className="container">
      <h2>Ingredient Conversion</h2>
      <div className="form-group">
        <label>Original Value</label>
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a value"
        />
      </div>
      <div className="form-group">
        <label>Converted Value</label>
        <input type="text" className="form-control" value={convertedValue} readOnly />
      </div>
      <button className="btn btn-primary" onClick={handleConvertClick}>
        Convert
      </button>
    </div>
  );
};

export default IngredientConversion;

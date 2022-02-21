import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];



export default function OptionsBox() {
  const [selectedOption, setSelectedOption] = useState(null);

  function onadd(selectedOption) {
    fetch(
      'https://login-4a368-default-rtdb.firebaseio.com/fruit.json',
      {
        method: 'POST',
        body: JSON.stringify(selectedOption),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }



  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption, onadd}
        options={options}
      />
    </div>
  );
}
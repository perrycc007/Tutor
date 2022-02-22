import Collapse from '@mui/material/Collapse';
import React, { useState, useCallback } from 'react';
import SelectsMultiple from '../Input/SelectsMultiple'

const Filter = () => {
    const [expanded, setExpanded] = useState(false);
return (
    <div>
    <button
    onClick={() => setExpanded(!expanded)}
  >
    Filter
  </button>
  <Collapse in={expanded}>
    <SelectsMultiple/>
  </Collapse>
  </div>
)


}
export default Filter
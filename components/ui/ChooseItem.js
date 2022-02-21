import React from 'react';

import { useStore } from '../../hooks-store/store';
import classes from './ChooseItem.module.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';




const ChooseItem = React.memo(props => {
  console.log('RENDERING');
  const dispatch = useStore(false)[1];

  const toggleChosenHandler = () => {
    // toggleChosen(props.id);
    dispatch('TOGGLE_CHOSEN', props.id);
  };

  return (
<div>        
        <div className={classes.item}>
        <button
          className={!props.isChosen ? [classes.buttonOutline] : ''}
          onClick={toggleChosenHandler}
        >
          {props.title}
        </button>    
        </div>
</div>
  );
});

export default ChooseItem;

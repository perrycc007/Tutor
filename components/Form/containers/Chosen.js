import React from 'react';

import ChosenItem from '../../ui/ChooseItem'
import { useStore } from '../../../hooks-store/store'
import classes from './Chosen.module.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const Chosen = props => {
  const state = useStore()[0];
  return (
  <Tabs>
    <TabList>
      <Tab>補習</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      {state.subjects.map(box => (
        <ChosenItem
          key={box.id}
          id={box.id}
          title={box.title}
          description={box.description}
          isChosen={box.isChosen}
        />
      ))}
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
  );
};

export default Chosen;

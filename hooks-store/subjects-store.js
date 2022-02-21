import { initStore } from './store';

const configureStore = () => {
  const actions = {
    TOGGLE_CHOSEN: (curState, subjectId) => {
      const subjectsIndex = curState.subjects.findIndex(s => s.id === subjectId);
      const newChosenStatus = !curState.subjects[subjectsIndex].isChosen;
      const updatedChoice = [...curState.subjects];
      updatedChoice[subjectsIndex] = {
        ...curState.subjects[subjectsIndex],
        isChosen: newChosenStatus
      };
      return { subjects: updatedChoice };
    }
  };
  initStore(actions, {
    subjects: [
      {
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isChosen: false
      },
      {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isChosen: false
      },
      {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isChosen: false
      },
      {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isChosen: false
      }
  ]}
  );
};

export default configureStore;
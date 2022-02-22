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
        id: '全科',
        title: '全科',
        group: 'common',
        isChosen: false
      },
      {
        id: '文科',
        title: '文科',
        group: 'oral',
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
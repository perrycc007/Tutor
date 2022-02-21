import { useNavigate } from 'react-router-dom';

import NewTutorForm from '../components/Tutors/NewTutorForm';

function ApplyTutorPage() {
  const history = useNavigate();

  function addTutorHandler(tutorData) {
    fetch(
      'https://login-4a368-default-rtdb.firebaseio.com/tutor.json',
      {
        method: 'POST',
        body: JSON.stringify(tutorData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history('/');
    });
  }

  return (
    <section>
      <h1>成為導師</h1>
      <NewTutorForm onAddTutor={addTutorHandler} />
    </section>
  );
}

export default ApplyTutorPage;

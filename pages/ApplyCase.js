import { useNavigate } from 'react-router-dom';

import NewCaseForm from '../components/Case/NewCaseForm';

function ApplyCasePage() {
  const history = useNavigate();

  function addCaseHandler(caseData) {
    fetch(
      'https://login-4a368-default-rtdb.firebaseio.com/case.json',
      {
        method: 'POST',
        body: JSON.stringify(caseData),
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
      <h1>申請補習</h1>
      <NewCaseForm onAddCase={addCaseHandler} />
    </section>
  );
}

export default ApplyCasePage;

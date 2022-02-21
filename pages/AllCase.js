import { useState, useEffect } from 'react';

import CaseList from '../components/Case/CaseList';

function AllCasePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCases, setLoadedCases] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://login-4a368-default-rtdb.firebaseio.com/case.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const cases = [];

        for (const key in data) {
          const acase = {
            id: key,
            ...data[key]
          };

          cases.push(acase);
        }

        setIsLoading(false);
        setLoadedCases(cases);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>補習個案</h1>
      <CaseList cases={loadedCases} />
    </section>
  );
}

export default AllCasePage;

import { useState, useEffect } from 'react';

import TutorList from '../components/Tutors/TutorList';

function AllTutorPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTutors, setLoadedTutors] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://login-4a368-default-rtdb.firebaseio.com/tutor.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const tutors = [];

        for (const key in data) {
          const tutor = {
            id: key,
            ...data[key]
          };

          tutors.push(tutor);
        }

        setIsLoading(false);
        setLoadedTutors(tutors);
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
      <h1>精英導師</h1>
      <TutorList tutors={loadedTutors} />
    </section>
  );
}

export default AllTutorPage;

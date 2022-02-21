import Tutoritem from './TutorItem';
import classes from './TutorList.module.css';

function TutorList(props) {
  return (
    <ul className={classes.list}>
      {props.tutors.map((tutor) => (
        <Tutoritem
          key={tutor.id}
          id={tutor.id}
          image={tutor.image}
          title={tutor.title}
          address={tutor.address}
          description={tutor.description}
        />
      ))}
    </ul>
  );
}

export default TutorList;

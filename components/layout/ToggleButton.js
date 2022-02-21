import  React, { Fragment } from 'react';
import {useState, useRef} from 'react';
import classes from './ToggleButton.module.css'

function UserToggleButtons() {

  const [user, setUser] = useState('tutor');


  const tutorHandler = () => {
    setUser('tutor')
  }

  const studentHandler = () => {
    setUser('student')
  }



  return (
    <div>
      <button 
      onClick = {tutorHandler}>
        導師
      </button>
      <button 
      onClick = {studentHandler}>
        學生
      </button>
      </div>
  )
}

export default UserToggleButtons;
// props

import PropTypes from 'prop-types';

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

// good for debugging, doesn't actually stop the code from running
Student.PropType = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.boolean
}

Student.defaultProps = {
  name: "Guest",
  age: 69,
  isStudent: false
}

export default Student;
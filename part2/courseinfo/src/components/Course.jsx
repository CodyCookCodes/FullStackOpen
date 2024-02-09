const Course = ({ course: courses }) => {

  return (
    <div>
      <h1>Web Development curriculum</h1>
      <Content courses={courses}/>
    </div>
  );
};


const Header = ({name}) => {
    return <h1>{name}</h1>
}

const Content = ({ courses }) => {
  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          <ul>
            {course.parts.map(part => (
              <Part key={part.id} name={part.name} exercises={part.exercises} />
            ))}
          </ul>
          <Total parts={course.parts} />
        </div>
      ))}
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <li>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>exercises</td>
            <td>{exercises}</td>
          </tr>
        </tbody>
      </table>
    </li>
  );
};


const Total = ({ parts }) => {
  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <p><b>total of {totalExercises} excercises</b></p>
  );
};

export default Course;
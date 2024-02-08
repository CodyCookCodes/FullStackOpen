const Header = (props) => {
  console.log("1")
  console.log(props)
  return <h1>{props.course.name}</h1>
}

const Content = (props) => {
  console.log("2")
  console.log(props)
  return (
    <div>
      {props.course.parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  )
}

const Part = (props) => {
  console.log("3")
  console.log(props)
  return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
  )
}

const Total = (props) => {
  console.log("4")
  console.log(props)
  const totalExercises = props.course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
     <Header course={course} />
     <Content course={course} />
     <Total course={course} />
    </div>
  )
}

export default App
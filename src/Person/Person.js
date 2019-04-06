import React from 'react'
import './Person.css'

const Person = (props) => {
  return (
    <div className='Person' onClick={props.delete}>
      <p>I'm {props.name} and I'm {props.age} years old.</p>
      <p><input type='text' onChange={props.change} /></p>
    </div>
  )
}

export default Person

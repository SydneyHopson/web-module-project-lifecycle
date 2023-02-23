import React from 'react'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  render() {
    return (
      <div>
      <div id='error'>Error: No Error Here</div>
      <div id='todos'>
        <h2>Todos:</h2>
        <div>Walk the Dog</div>
        <div>Learn React</div>
        </div>
        <form id='todoForm'>
          <input type='text' placeholder='Type todo'></input>
          <input type='submit'></input>
          <button>Clear Complete</button>
        </form>
      </div>
    )
  }
}

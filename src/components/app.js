import React from 'react';
import TodoCreator from './todo_creator';
import TodosList from './todos_list';
const todos = [
{
  task: 'make react tutorial',
  isCompleted: true
},
{
  task: 'eat dinner',
  isCompleted: false
}
]
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    }
  }

  render() {
    return (
      <div>
        <h1>Todos List App</h1>
        <TodoCreator />
        <TodosList todos={this.state.todos} />
      </div>
    );
  }
}

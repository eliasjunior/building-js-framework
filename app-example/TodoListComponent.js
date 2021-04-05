import { Checkbox } from '../awesome-framework/form-templates';
import FrameWork from '../awesome-framework';
const { Component } = FrameWork();
let TodoList;
export default function TodoListComponent() {
  const handleClickChange = (e) => {
    const todo = TodoList
      .filter(({ state }) => state.item === e.target.value)
      .pop()
    //just demostration of changing state, setState is not yet handling changes
    todo.state.completed = !todo.state.completed
    todo.setState({ ...todo.state })
  }

  return {
    render() {
      const list = getTodos(handleClickChange);
      TodoList = list.map((todo) => {
        // Create the todo item
        const checkWithAttributes = Checkbox({ name: todo.name, });
        return Component({
          template: checkWithAttributes,
          props: {
            item: todo.item,
            name: todo.name,
            completed: todo.completed,
            isChild: true,
            onChange: todo.onChange,
          },
          node: document.querySelector('.nice-form'),
          key: 'todo-list',
        })
      })
      return TodoList;// not using return yet
    },
  }
}

function getTodos(handleInputChange) {
  return [
    {
      item: 'Eat',
      name: 'Eat',
      completed: false,
      onChange: handleInputChange,
    },
    {
      item: 'Take a nap',
      name: 'Take a nap',
      completed: true,
      onChange: handleInputChange,
    },
    {
      item: 'Eat again',
      name: 'Eat again',
      completed: false,
      onChange: handleInputChange,
    }
  ]
}
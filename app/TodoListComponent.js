import { Checkbox, InputWrapper } from '../awesome-framework/form-templates';
import FrameWork from '../awesome-framework';
const { Component } = FrameWork();
let TodoList;
export default class TodoListComponent {
  handleClickChange(e) {
    console.log(e.target.value)
    console.log(TodoList)
    const todo = TodoList.filter(({state}) => {
      console.log(state)
      return state.item === e.target.value
    }).pop()
    
    todo.state.completed = !todo.state.completed
    
    console.log(TodoList[0].state.completed)
     console.log(TodoList[1].state.completed)
     console.log(TodoList[2].state.completed)
  }

  render() {
    const list = getTodos(this.handleClickChange);
    //const todoListTemplate = () => {
    // Loop through the todos
    //   return list.reduce((prev, todo) => {
    //     // Create the todo item
    //     const checkWithAttributes = Checkbox({ name: todo.name, });
    //     const checkComp = Component({
    //       template: checkWithAttributes,
    //       props: {
    //         item: todo.item,
    //         name: todo.name,
    //         completed: todo.completed,
    //         isChild: true
    //       },
    //       node: document.querySelector('.nice-form'),
    //     })

    //     prev += checkWithAttributes
    //     return prev;
    //   }, '')
    // };
    // TodoList = Component({
    //   template: todoListTemplate,
    //   props: { isChild: true, onChange: this.handleClickChange },
    //   node: document.querySelector('.nice-form'),
    // })
    // return TodoList;

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
      })
    })
    return TodoList;// not using return yet
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
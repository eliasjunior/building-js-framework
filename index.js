import FrameWork, { render } from './awesome-framework';
import Greetings from './app/greetings';
//import FormTemplate from './app/form-creator';
import { Checkbox, MyForm, InputText, InputWrapper } from './awesome-framework/form-templates';

const { Component } = FrameWork();

function main() {
  // can turn the method below to a facade
  renderTitle();
  renderForm();
  //modify(Form)
}

// can turn render form to a facade
function renderForm() {
  // add state to the form, combining template + data
  const Form = Component({
    template: MyForm,
    props: { name: 'thanosForm' },
    node: document.querySelector('.form-content'),
  })

  //render(Form);
  renderInput()
  renderTodoList();
}
//TODO: is global here 
const handleInputChange = (e) => {
  console.log('Change- ', e.target.value);
  Text.setState({ value: e.target.value })
}
function renderInput() {
  //console.log(getInputState())
  const withAttributes = InputText({
    name: 'someGuy',
    isChild: true,
  })
  const Text = Component({
    template: withAttributes,
    props: getInputState(),
    node: document.querySelector('.nice-form'),
  })
  console.log('TOO LONG', Text)
}

function renderTodoList() {
  // Setup our template
  const list = getTodos()
  const todoListTemplate = () => {
    // Loop through the todos
    return list.reduce((prev, todo) => {
      // Create the todo item
      const withAttributes = Checkbox({ name: todo.item,});
      prev += InputWrapper(withAttributes(todo));
      return prev;
    }, '')
  };
  Component({
    template: todoListTemplate,
    props: { isChild: true },
    node: document.querySelector('.nice-form'),
  })
}

function renderTitle() {
  const options = {
    template: Greetings,
    props: { property1: 'Universe' },
    node: document.querySelector('.greetings')
  }
  Component(options)
}

function getTodos() {
  return [
    {
      item: 'Eat',
      completed: false,
    },
    {
      item: 'Take a nap',
      completed: true,
    },
    {
      item: 'Eat again',
      completed: false,
    }
  ]
}

function getInputState() {
  return {
    required: true,
    value: 'Avengers End Game',
    onChange: handleInputChange,
    isChild: true,
  }
}

function modify() {
  setTimeout(() => {
    const outros = [
      {
        item: 'Eat',
        completed: true,
        name: 'eat',
      },
      {
        item: 'Take a nap',
        completed: true,
        name: 'eat',
      },
      {
        item: 'Eat again',
        completed: true,
        name: 'eat',
      }
    ]
    Form.setState({ todos: outros, someGuy: 'This is cool' })
  }, 2000)
}

main()

import FrameWork from './awesome-framework';
import Greetings from './app/greetings';
import { MyForm } from './awesome-framework/form-templates';
import InputComponent from './app/InputComponent';
import TodoListComponent from './app/TodoListComponent';

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

function renderInput() {
  new InputComponent().render();
}

function renderTodoList() {
  new TodoListComponent().render();
}

function renderTitle() {
  const options = {
    template: Greetings,
    props: { property1: 'Universe' },
    node: document.querySelector('.greetings')
  }
  Component(options)
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

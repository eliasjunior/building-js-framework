import FrameWork from './awesome-framework';
import Greetings from './app/greetings';
import { MyForm } from './awesome-framework/form-templates';
import InputComponent from './app/InputComponent';
import TodoListComponent from './app/TodoListComponent';

const { Component } = FrameWork();

function main() {
  renderTitle();
  renderForm();
  //modify(Form)
}
function renderForm() {
  // add state to the form, combining template + data
  Component({
    template: MyForm,
    props: { name: 'thanosForm' },
    node: document.querySelector('.form-content'),
    key: 'nice-form',
  })

  renderInput()
  renderTodoList();
}

function renderInput() {
  InputComponent().render();
}

function renderTodoList() {
  TodoListComponent().render();
}

function renderTitle() {
  const options = {
    template: Greetings,
    props: { property1: 'Universe' },
    node: document.querySelector('.greetings'),
    key: 'title',
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
    Form.setState({ todos: outros, someGuy: 'cool name' })
  }, 2000)
}

main()

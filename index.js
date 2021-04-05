import FrameWork from './awesome-framework';
import Greetings from "./app-example/greetings";
import { MyForm } from './awesome-framework/form-templates';
import InputComponent from "./app-example/InputComponent";
import TodoListComponent from "./app-example/TodoListComponent";

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
    props: { name: "MyForm" },
    node: document.querySelector(".form-content"),
    key: "nice-form",
  });

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
main()

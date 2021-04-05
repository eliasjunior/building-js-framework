import FrameWork from "./awesome-framework";
import { MyForm } from "./awesome-framework/form-templates";
import InputComponent from "./InputComponent";
import TodoListComponent from "./TodoListComponent";

export default function Form() {
  const { Component } = FrameWork();
  // add state to the form, combining template + data
  Component({
    template: MyForm,
    props: { name: "MyForm" },
    node: document.querySelector(".form-content"),
    key: "nice-form",
  });

  InputComponent().render();
  TodoListComponent().render();
}

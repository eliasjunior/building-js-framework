import { Checkbox, MyForm, InputText, InputWrapper } from '../awesome-framework/form-templates';
import { validation } from '../awesome-framework/helper';
//import MyReact from '../awesome-framework';

// The template
export default function FormTemplate() {
  //const { Component } = MyReact;  

  const { state } = FormTemplate;
  // Setup our template
  const { todos = validation('todos') } = state;
  // Loop through the todos

  const todoList = todos.reduce((prev, todo) => {
    // Create the todo item
    prev += InputWrapper(Checkbox(todo));
    return prev;
  }, '');

  const div = 'Add Todo --> '

  const inputText = InputText({
    name: 'someGuy',
    required: true,
    defaultValue: state.someGuy
  })


  const children = div + inputText + todoList;

  // const Form = Component({
  //   template: FormTemplate,
  //   props: {todos: getTodos()},
  //   node: document.querySelector('.form-content'),
  //   childrenProps, 
  // })

  return MyForm({name: 'thanos', children})
};

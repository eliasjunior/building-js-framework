import FrameWork from '../awesome-framework';
import { InputText } from '../awesome-framework/form-templates';
const { Component } = FrameWork();

export default function InputClassComponent() {
  let InputText = null;
  const state = {
    required: true,
    name: 'someGuy',
    value: 'Avengers End Game',
    isChild: true,
    onChange: handleInputChange,
    validations: [],
  }
  function handleInputChange(e) {
    const required = {
      isInvalid: e.target.value === '',
      message: 'This is required pal'
    }
    const onlyLetters = {
      isInvalid: !onlyLetter(e.target.value),
      message: 'only letters loco'
    }
    console.log(onlyLetters)
    console.log(required)
    // simulating state changing, setState is not done yet.
    state.value = e.target.value;
    state.validations.push(required);
    state.validations.push(onlyLetters)
    InputText.setState(state)
  }
  return {
    render() {
      const withAttributes = InputText({
        name: 'someGuy',
        key: 'input-block-1',
      })
      InputText = Component({
        template: withAttributes,
        props: state,
        node: document.querySelector('.nice-form'),
        key: 'input-block-1',
      })
      return InputText;
    },
  }
}
function onlyLetter(text) {
  var letters = /^[A-Za-z\s]+$/;
  return text.match(letters) ? true : false;
}

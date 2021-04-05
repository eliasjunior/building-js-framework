import FrameWork from '../awesome-framework';
const { Component } = FrameWork();
import { InputTextTemplate } from "../awesome-framework/templates/form-elements";

export default function InputComponent() {
  let InputText = null;
  const state = {
    required: true,
    name: "someGuy",
    value: "Avengers End Game",
    isChild: true,
    onChange: handleInputChange,
    validations: [],
  };
  function handleInputChange(e) {
    const required = {
      isInvalid: e.target.value === "",
      message: "field is required",
    };
    const onlyLetters = {
      isInvalid: !onlyLetter(e.target.value),
      message: "only letters",
    };
    // simulating state changing, setState is not done yet.
    state.value = e.target.value;
    state.validations.push(required);
    state.validations.push(onlyLetters);
    InputText.setState(state);
  }
  return {
    render() {
      const withAttributes = InputTextTemplate({
        name: "name",
        key: "input-block-1",
      });
      InputText = Component({
        template: withAttributes,
        props: state,
        node: document.querySelector(".nice-form"),
        key: "input-block-1",
      });
      return InputText;
    },
  };
}
function onlyLetter(text) {
  var letters = /^[A-Za-z\s]+$/;
  return text.match(letters) ? true : false;
}

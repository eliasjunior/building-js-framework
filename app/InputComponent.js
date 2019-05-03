import FrameWork from '../awesome-framework';
import { InputText } from '../awesome-framework/form-templates';
const { Component } = FrameWork();
let Text = null;
export default class InputClass {
  handleInputChange(e) {
    const currState = getInputState(handleInputChange);
    currState.value = e.target.value;
    Text.setState(currState)
  }

  render() {
    const withAttributes = InputText({
      name: 'someGuy',
    })
    Text = Component({
      template: withAttributes,
      props: getInputState(this.handleInputChange),
      node: document.querySelector('.nice-form'),
    })
    return Text;
  }
}

function getInputState(handleInputChange) {
  return {
    required: true,
    name: 'someGuy',
    value: 'Avengers End Game',
    onChange: handleInputChange,
    isChild: true,
  }
}

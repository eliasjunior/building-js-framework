import { validation } from './helper'

export const Checkbox = function ({
  name = validation('name'),
}) {
  return (state) => {
    const {
      item = validation('item'),
      completed = validation('completed'),
    } = state;
    const checked = completed ? 'checked' : '';
    return `<div class="form-row">` +
      `<label class="label-field" >` +
      `<input  type="checkbox" class="base-input" ` +
      `name="${name}" novalidate="true" ` +
      `value="${state.item}" ${checked} required>` +
      `${item}` +
      `</label>` +
      `</div>`;
  }
}
// parameters here are attributes(name, type, data-is-child)
export const InputTextTemplate = function ({
  name = validation('name'),
  key = validation('name'),
}) {
  return (state) => {
    const { validations = [],  required} = state;
    const requiredText = required ? 'required' : '';
    const errorBlocks = validations
      .map( val => val.isInvalid ? `<div class="error-message">${val.message}</div>` : '')
      .join('')
    return `<div class="form-row" data-key="${key}">` +
      `<label class="label-field" for="name">Name</label>` +
      `<input type="text" class="base-input" ` +
      `name="${name}" novalidate="true" id="name"` +
      `value="${state.value}" ${requiredText}>` +
      `${errorBlocks}</div>`
  }
}
export const InputWrapper = function (content) {
  return () => {
    return `<div class="line-wrapper">${content}</div>`
  };
}
export const MyForm = function ({
  name = validation('form name'),
  className = 'nice-form',
  children = '',
}) {
  return `<form name="${name}" class="${className}">${children}</form>`
}
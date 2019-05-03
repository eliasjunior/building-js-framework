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
    return `<label>` +
      `<input  type="checkbox" class="base-input" ` +
      `name="${name}" novalidate="true" ` +
      `value="${state.item}" ${checked} required>` +
      `${item}</label>`;
  }
}

// parameters here are attributes(name, type, data-is-child)
export const InputText = function ({
  name = validation('name'),
}) {
  return (state) => {
    const requiredText = state.required ? 'required' : '';
    return `<input type="text" class="base-input" ` +
      `name="${name}" novalidate="true"` +
      `value="${state.value}" ${requiredText}>`
  }
}

export const InputWrapper = function (content) {
  return `<div class="line-wrapper">${content}</div>`;
}

export const MyForm = function ({
  name = validation('form name'),
  className = 'nice-form',
  children = '',
}) {
  return `<form name="${name}" class="${className}">${children}</form>`
}
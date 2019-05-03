export function validation(param = 'element') {
  throw Error(`${param} is required`);
}
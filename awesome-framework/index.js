import { validation } from './helper';

export default function FrameWork() {
  return {
    Component: function ({
      template = validation('template'),
      props = {},
      node = validation('node'),
    }) {
      if (typeof template !== "function") {
        throw Error('template must be a function or a string')
      }
      
      //addEvents(node, props);
      //addEvents(node.children, template.state);
      template = bindStateToTemplate(template, props, node);
      const component = render(template);

      
      Array.from(node.children).forEach( child => {
        console.log('child  ' , child.name, child.type)
        if(child.name &&  child.type) {
          console.log(`add Events to ${child.name} type=${child.type}`)
          console.log(`add Events to ${child.name} type=${child.type}`)
          addEvents(child, props)
        }

      })

      // form > child

      return component;
    }
  }
}


export function render(template = validation('template')) {
  const { node = validation('node') } = template;
  console.log('-- RENDER -- ')
  const html = typeof template === 'function' ? template(template.state) : template;
  if (template.state.isChild) {
    node.insertAdjacentHTML('beforeend', html);
  } else {
    node.innerHTML = html;
  }
  return node;
};

function bindStateToTemplate(template, props, node) {
  // Using defineProperties to add more control, make modifiable or not, enumerable etc.
  Object.defineProperties(template, {
    node: {
      value: node,
    },
    state: {
      value: props,
      writable: true,
    },
    setState: {
      value: function (props = {}) {
        template.state = { ...props };
        render(template);
        return template;
      }
    },
  })
  // when call the first time render
  return template;
}

function addEvents(node, props) {
  const {
    onChange,
    onClick,
  } = props;
  if (onChange) {
    console.log('onChange Event')
    if (node.type === 'text') {
      node.addEventListener('input', onChange);
    } else {
      node.addEventListener('change', onChange);
    }
  }
  if (onClick) {
    console.log('click Event')
    node.addEventListener('click', onClick);
  }
}


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
      render(template);
      // get actual node
      if(props.name && props.isChild) {
        const theNode = getActualNode(node, props)
        console.log(`add Events to ${theNode && theNode.name} type=${theNode && theNode.type} ${props.name}`)
        if(theNode) {
          template.node = theNode;
          addEvents(theNode, props)
        }
      }
      return template;
    }
  }
}

function getActualNode(node, props) {
  if(node.name === props.name ) {
    console.log('FOUND ', node.name, props.name)
    return node;
  } else {
    let FOUND = null;
    Array
    .from(node.children)
    .forEach(child =>  {
      //console.log('child ', child.name)
      FOUND = getActualNode(child, props)
    })
    return FOUND;
  }
}


export function render(template = validation('template'), update) {
  const { node = validation('node') } = template;
  console.log('-- RENDER -- ')
  const html = typeof template === 'function' ? template(template.state) : template;
  if (template.state.isChild && !update) {
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
      writable: true,
    },
    state: {
      value: props,
      writable: true,
    },
    setState: {
      value: function (props = {}) {
        template.state = { ...props };
        render(template, true);
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


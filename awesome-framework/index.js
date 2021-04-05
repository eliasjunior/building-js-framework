import { validation } from './helper';

export default function AwesomeFrameWork() {
  return {
    Component: function ({
      template = validation("template"),
      props = {},
      node = validation("node"),
      key = validation("key"),
    }) {
      if (typeof template !== "function") {
        throw Error("template must be a function or a string");
      }

      template = bindStateToTemplate({ template, props, node, key });
      render(template);
      return template;
    },
  };
}

function getActualNode(node, props, key) {
  if (node.getAttribute('data-key') === key) {
    return node;
  } else {
    let actualNode = null;
    Array.from(node.children).forEach((child) => {
      actualNode = getActualNode(child, props, key);
    });
    return actualNode;
  }
}

function bindStateToTemplate({template, props, node, key}) {
  // Using defineProperties to add more control, make modifiable or not, enumerable etc.
  Object.defineProperties(template, {
    node: {
      value: node,
      writable: true,
    },
    key: {
      value: key,
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
  return template;
}

function render(template = validation('template'), update) {
  const { node = validation('node'), state, key } = template;
  createNode(template, update)
  if (state && state.isChild) {
    const theNode = getActualNode(node, state, key)
    console.log(`add Events to `, (theNode && theNode.firstChild))
    if (theNode) {
      template.node = theNode;
      addEvents(theNode.firstChild, state);
    }
  }
};

function createNode(template = validation('template'), update) {
  const { node = validation('node'), state, key } = template;
  const html = typeof template === 'function' ? template(template.state) : template;
  console.log('-- RENDER -- ', html)
  if (template.state.isChild && !update) {
    node.insertAdjacentHTML('beforeend', html);
  } else {
    // it's not working properly just temporary, need to use DOM create elements
    if (node && node.firstChild && node.firstChild.nodeName === 'INPUT') {
      parent.innerHTML = html;
    } else {
      node.innerHTML = html;
    }
  }
  return node;
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


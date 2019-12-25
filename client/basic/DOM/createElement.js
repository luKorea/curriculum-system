/**
 * @method createElement
 * @param type {string}
 * @param props {Object}
 * @param children {string}
 */
let createElement = (type, props, ...children) => {

    props = props || {};
    let obj = {
        type: null,
        props: {
            children: children.length <= 1 ? (children[0] || '') : children
        },
        key: null,
        ref: null,
    };
    obj = {...obj, type, props: {...props, children}};
    // eslint-disable-next-line no-unused-expressions
    'key' in obj.props ? (obj.key = obj.props.key, obj.props.key = undefined) : null;
    // eslint-disable-next-line no-unused-expressions
    'ref' in obj.props ? (obj.ref = obj.props.ref, obj.props.ref = undefined) : null;
    return obj;
};

/**
 * @method render
 * @param obj {Object}
 * @param container {elementNode}
 * @param callback {function}
 */
let render = (obj, container, callback) => {

    let {type, props} = obj || {},
        newElement = document.createElement(type);

    for (const attr in props) {

        if (!props.hasOwnProperty(attr)) break; // 不是私有的直接结束遍历
        if (!props[attr]) continue; // 如果当前属性没有值，直接不处理即可
        let value = props[attr];

        // className
        if (attr === 'className') {
            newElement.setAttribute('class', value);
            continue
        }

        // style
        if (attr === 'style') {
            // 如果style为空支付串，不处理
            if (value === '') continue;
            for (const styleKey in value) {
                if (value.hasOwnProperty(styleKey)) {
                    newElement['style'][styleKey] = value[styleKey];
                }
            }
            continue
        }

        // children
        if (attr === 'children') {

            // 先将其转换为数组，后期直接操作数组即可
            // eslint-disable-next-line no-unused-expressions
            !(value instanceof Array) ? value = [value] : null;
            value.forEach((item, index) => {
               if (typeof item === "string") {
                   let text = document.createTextNode(item);
                   newElement.appendChild(text)

               } else {
                   render(item, newElement);
               }
            });
            continue
        }
        newElement.setAttribute(attr, value);   // 基于setAttribute设置的属性，可以变现在HTML的结构上
    }

    container.appendChild(newElement);
    callback && callback();
};

let elementNode = createElement(
    'div',
    {id: 'container', ref: 'main', key: new Date()},
    createElement(
        'hr'
    ),
    createElement(
        'div',
        {id: 'header'},
        '头部'
    ),
    createElement(
        'hr'
    ),
    createElement(
        'div',
        {id: 'main'},
        '主体内容'
    ),
    createElement(
        'hr'
    ),
    createElement(
        'div',
        {id: 'footer'},
        '脚注'
    ),
);

// eslint-disable-next-line no-undef
render(elementNode, root, _ => console.log('ok'))

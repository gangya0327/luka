import { useState } from 'react';

function Child(props) {
  console.log('props :>> ', props);
  return (
    <div>
      this is child, {props.name}, {props.children}
      <button onClick={() => props.onGetMessage('子组件的消息')}> 发送消息 </button>
    </div>
  );
}

export default function DemoChild() {
  const name = 'john';
  const [msg, setMsg] = useState('');
  const getMessage = (msg) => {
    console.log('msg :>> ', msg);
    setMsg(msg);
  };
  return (
    <div>
      <span>{msg}</span>
      <Child
        name={name}
        age={18}
        isTrue={false}
        list={['vue', 'react']}
        obj={{ sex: 'male' }}
        childHTML={<span>this is span</span>}
        onGetMessage={getMessage}
      >
        <span>hello</span>
      </Child>
    </div>
  );
}

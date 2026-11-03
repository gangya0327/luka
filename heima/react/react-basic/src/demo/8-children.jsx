import { useState } from 'react';

function ChildA(props) {
  const msg = 'message from child A';
  return (
    <div>
      <p>this is child A</p>
      <button onClick={() => props.onGetMessageA(msg)}> 发送消息 </button>
    </div>
  );
}

function ChildB(props) {
  return (
    <div>
      <p>this is child B, {props.msg}</p>
    </div>
  );
}

export default function DemoChildren() {
  const [msg, setMsg] = useState('');
  const getMessageA = (msg) => {
    setMsg(msg);
  };
  return (
    <div>
      <span>{msg}</span>
      <ChildA onGetMessageA={getMessageA}></ChildA>
      <ChildB msg={msg} />
    </div>
  );
}

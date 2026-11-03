import { createContext, useContext } from 'react';
const MsgContext = createContext();

function A() {
  return (
    <div style={{ border: '1px solid red', padding: '20px' }}>
      this is A
      <B />
    </div>
  );
}

function B() {
  const msg = useContext(MsgContext);
  return (
    <div style={{ border: '1px solid blue', padding: '20px' }}>
      this is B<p>{msg}</p>
    </div>
  );
}

export default function DemoContext() {
  const msg = 'hello world';
  return (
    <div>
      <MsgContext.Provider value={msg}>
        <A />
      </MsgContext.Provider>
    </div>
  );
}

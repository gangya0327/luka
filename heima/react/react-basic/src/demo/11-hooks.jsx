import { useState } from 'react';

function useToggle() {
  const [show, setShow] = useState(true);
  const toggle = () => setShow(!show);
  return [show, toggle];
}

export default function DemoHooks() {
  const [show, handleToggle] = useToggle();

  return (
    <div>
      {show && <span>this is div</span>}
      <button onClick={handleToggle}>toggle</button>
    </div>
  );
}

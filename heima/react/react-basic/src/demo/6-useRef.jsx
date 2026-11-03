import { useRef } from 'react';

export default function DemoUseRef() {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log('inputRef :>> ', inputRef.current);
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>点击</button>
    </div>
  );
}

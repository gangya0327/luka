import { useState } from 'react';

export default function DemoUseState() {
  // 修改基本类型
  const [count, setCount] = useState(1);
  const handleClick = () => {
    setCount(count + 1);
  };

  // 修改对象
  const [form, setForm] = useState({ name: 'peter' });
  const handleChange = () => {
    setForm({ ...form, name: 'john' });
  };

  return (
    <div>
      <p>
        <button onClick={handleClick}>点击</button>
        <span>count：{count}</span>
      </p>
      <p>
        <button onClick={handleChange}>点击</button>
        <span>form：{form.name}</span>
      </p>
    </div>
  );
}

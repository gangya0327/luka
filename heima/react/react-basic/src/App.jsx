const count = 10;

function hello() {
  return 'hello react';
}

const list = [
  { id: 1001, name: '小王' },
  { id: 1002, name: '小李' },
  { id: 1003, name: '小张' },
];

const isLogin = true;

function handleClick1() {
  console.log('点击了');
}

// 传递事件实参
const handleClick2 = (e) => {
  console.log('点击了', e);
};

// 传递自定义参数
const handleClick3 = (name) => {
  console.log('点击了', name);
};

// 同时传递事件实参和自定义参数
const handleClick4 = (name, e) => {
  console.log('点击了', name, e);
};

function App() {
  return (
    <div>
      <h1>开始学习 React</h1>
      {/* 使用字符串 */}
      {'hello world'}
      {/* 使用变量 */}
      {count}
      {/* 函数调用 */}
      {hello()}
      {/* js方法调用 */}
      {new Date().toLocaleDateString()}
      {/* 使用 js 对象 */}
      <div style={{ color: 'red' }}>Lorem ipsum dolor sit amet.</div>
      {/* 使用数组 */}
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {/* 条件渲染 */}
      {isLogin ? <span>home</span> : <span>login</span>}
      {/* 绑定事件 */}
      <button onClick={handleClick1}>点击1</button>
      <button onClick={handleClick2}>点击2</button>
      <button onClick={() => handleClick3('peter')}>点击3</button>
      <button onClick={(e) => handleClick4('peter', e)}>点击4</button>
    </div>
  );
}

export default App;

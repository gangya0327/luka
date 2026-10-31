import './3-style.css';

export default function DemoStyle() {
  const style = {
    color: 'red',
    fontSize: '30px',
  };

  return (
    <div>
      {/* 行内样式 */}
      <div style={style}>this is a word</div>
      {/* css样式 */}
      <div className="foo">this is another word</div>
    </div>
  );
}

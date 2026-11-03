import { useEffect, useState } from 'react';

export default function DemoUseEffect() {
  const url = 'https://60s.viki.moe/v2/ai-news';

  const [list, setList] = useState([]);

  useEffect(() => {
    const ctrl = new AbortController();
    async function getList() {
      try {
        const res = await fetch(url, { signal: ctrl.signal });
        const data = await res.json();
        setList(data.data.news);
      } catch (e) {
        if (e.name === 'AbortError') return;
        console.error('请求失败:', e.message);
      }
    }
    getList();
    return () => ctrl.abort();
  }, []);

  return (
    <div>
      新闻列表：
      <ul>
        {list.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

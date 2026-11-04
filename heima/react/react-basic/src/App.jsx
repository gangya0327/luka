// import DemoBasic from './demo/1-basic';
// import DemoUseState from './demo/2-useState';
// import DemoStyle from './demo/3-style';
// import DemoComment from './demo/4-comments';
// import DemoUseRef from './demo/6-useRef';
// import DemoChild from './demo/7-child';
// import DemoChildren from './demo/8-children';
// import DemoContext from './demo/9-context';
// import DemoUseEffect from './demo/10-useEffect';
// import DemoHooks from './demo/11-hooks';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addToNum } from './store/modules/counterStore';
import { fetchChannelList } from './store/modules/channelStore';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const { channelList } = useSelector((state) => state.channel);
  useEffect(() => {
    const ctrl = new AbortController();
    try {
      dispatch(fetchChannelList(ctrl));
    } catch (e) {
      if (axios.isCancel(e)) return;
      console.log(e);
    }
    return () => ctrl.abort();
  }, [dispatch]);
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => dispatch(increment())}> 点击+ </button>
      <button onClick={() => dispatch(decrement())}> 点击- </button>
      <button onClick={() => dispatch(addToNum(20))}> 增加 20 </button>
      <button onClick={() => dispatch(addToNum(3))}> 增加 3 </button>

      <ul>
        {channelList.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

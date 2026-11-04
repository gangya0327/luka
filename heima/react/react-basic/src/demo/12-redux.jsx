import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addToNum } from '/src/store/modules/counterStore';
import { fetchChannelList } from '/src/store/modules/channelStore';
import { useEffect } from 'react';
import axios from 'axios';

export default function DemoRedux() {
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
      123
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

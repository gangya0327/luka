import { Button, DatePicker, Input, NavBar } from 'antd-mobile';
import './index.scss';
import classNames from 'classnames';
import { billListData } from '@/contants';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import dayjs from 'dayjs';
import { addBillList } from '@/store/modules/billStore';
import { useDispatch } from 'react-redux';

const New = () => {
  const navigate = useNavigate();

  const [billType, setBillType] = useState('pay');

  const [money, setMoney] = useState(0);
  const [useFor, setUseFor] = useState('');

  const dispatch = useDispatch();
  const handleSave = () => {
    if (!money || !useFor) return alert('请填写金额并选择分类');
    const data = {
      type: billType,
      money: billType === 'pay' ? -money : +money,
      date: dayjs(date).format('YYYY-MM-DD'),
      useFor: useFor,
    };
    dispatch(addBillList(data));
    navigate('/month');
  };

  const [date, setDate] = useState(new Date());
  const [dateVisible, setDateVisible] = useState(false);
  const handleDateConfirm = (date) => {
    setDate(date);
    setDateVisible(false);
  };

  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => navigate(-1)}>
        记一笔
      </NavBar>

      <div className="header">
        <div className="kaType">
          <Button
            shape="rounded"
            className={classNames(billType === 'pay' ? 'selected' : '')}
            onClick={() => {
              setBillType('pay');
              setUseFor('');
            }}
          >
            支出
          </Button>
          <Button
            className={classNames(billType === 'income' ? 'selected' : '')}
            shape="rounded"
            onClick={() => {
              setBillType('income');
              setUseFor('');
            }}
          >
            收入
          </Button>
        </div>

        <div className="kaFormWrapper">
          <div className="kaForm">
            <div className="date">
              <img
                className="icon"
                src={`https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/ka/calendar.svg`}
                alt="icon"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <span className="text" onClick={() => setDateVisible(true)}>
                {dayjs(date).format('YYYY-MM-DD')}
              </span>
              <DatePicker
                visible={dateVisible}
                className="kaDate"
                title="记账日期"
                max={new Date()}
                onConfirm={handleDateConfirm}
                onCancel={() => setDateVisible(false)}
              />
            </div>
            <div className="kaInput">
              <Input
                className="input"
                placeholder="0.00"
                type="number"
                value={money}
                onChange={(value) => setMoney(value)}
              />
              <span className="iconYuan">¥</span>
            </div>
          </div>
        </div>
      </div>

      <div className="kaTypeList">
        {billListData[billType].map((item) => {
          return (
            <div className="kaType" key={item.type}>
              <div className="title">{item.name}</div>
              <div className="list">
                {item.list.map((item) => {
                  return (
                    <div
                      className={classNames('item', useFor === item.type ? 'selected' : '')}
                      key={item.type}
                      onClick={() => setUseFor(item.type)}
                    >
                      <div className="icon">
                        <img
                          src={`https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/ka/${item.type}.svg`}
                          alt="icon"
                          style={{
                            width: 20,
                            height: 20,
                          }}
                        />
                      </div>
                      <div className="text">{item.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="btns">
        <Button className="btn save" onClick={handleSave}>
          保 存
        </Button>
      </div>
    </div>
  );
};

export default New;

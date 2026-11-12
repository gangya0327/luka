import { NavBar, DatePicker } from 'antd-mobile';
import { useMemo, useState } from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import './index.scss';

import DailyBill from './components/DailyBill';

const Month = () => {
  const [dateVisible, setDateVisible] = useState(false);

  const [currentDate, setCurrentDate] = useState(() => dayjs(new Date()).format('YYYY年丨MM月'));

  const billList = useSelector((state) => state.bill.billList);
  const monthGroup = useMemo(() => {
    return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY年丨MM月'));
  }, [billList]);

  const currentMonthList = useMemo(() => monthGroup[currentDate] ?? [], [monthGroup, currentDate]);

  const monthResult = useMemo(() => {
    const pay = currentMonthList.filter((i) => i.type === 'pay').reduce((cur, next) => cur + next.money, 0);
    const income = currentMonthList.filter((i) => i.type === 'income').reduce((cur, next) => cur + next.money, 0);
    return { pay, income, total: pay + income };
  }, [currentMonthList]);

  const handleConfirm = (date) => {
    setDateVisible(false);
    const formatDate = dayjs(date).format('YYYY年丨MM月');
    setCurrentDate(formatDate);
  };

  // 当前月按日分组
  const dayGroup = useMemo(() => {
    const groupData = _.groupBy(currentMonthList, (item) => dayjs(item.date).format('YYYY年丨MM月DD日'));
    const keys = Object.keys(groupData);
    return { keys, groupData };
  }, [currentMonthList]);

  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date">
            <span className="text">{currentDate + ''}账单</span>
            <span className={classNames('arrow', dateVisible && 'expand')} onClick={() => setDateVisible(true)}></span>
          </div>
          {/* 统计区域 */}
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">{monthResult.pay.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.total.toFixed(2)}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            max={new Date()}
            onConfirm={handleConfirm}
            onCancel={() => setDateVisible(false)}
          />
        </div>

        {/* 单日列表统计 */}
        {dayGroup.keys.map((key) => {
          return <DailyBill key={key} date={key} billList={dayGroup.groupData[key]} />;
        })}
      </div>
    </div>
  );
};

export default Month;

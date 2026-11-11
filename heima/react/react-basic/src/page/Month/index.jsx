import { NavBar, DatePicker } from 'antd-mobile';
import { useState } from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import './index.scss';

const Month = () => {
  const [dateVisible, setDateVisible] = useState(false);

  const [currentDate, setCurrentDate] = useState(() => dayjs(new Date()).format('YYYY年丨MM月'));

  const handleConfirm = (date) => {
    setDateVisible(false);
    setCurrentDate(dayjs(date).format('YYYY年丨MM月'));
  };

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
              <span className="money">{100}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
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
      </div>
    </div>
  );
};

export default Month;

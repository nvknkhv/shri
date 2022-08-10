import React from 'react';

import classnames from 'classnames';

import styles from './styles.module.css';
import Filters from '../../components/Filters';
import TaskList from '../../components/TaskList/TaskList';
import route from './route';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
  const columns = ['Todo', 'In progress', 'Done'];
  return (
    <>
      <div className={classnames(styles.layout)}>
        <Filters />
        <div className={classnames(styles.board)}>
          {columns.map((title) => (
            <TaskList key={title} title={title} items={[{ title: 'fff', tags: ['yellow', 'green'] }]} />
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default { ...route, element: <MainPage /> };

import React from 'react';

import classnames from 'classnames';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.css';
import Filters from '../../components/Filters';
import Board from '../../components/Board';
import route from './route';

const MainPage = () => {
  return (
    <>
      <div className={classnames(styles.layout)}>
        <Filters />
        <div className={classnames(styles.layout__board)}>
          <Board />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default { ...route, element: <MainPage /> };

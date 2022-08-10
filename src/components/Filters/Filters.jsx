import React from 'react';

import classnames from 'classnames';

import styles from './styles.module.css';
import Checkbox from '../Checkbox';

const Filters = () => {
  return (
    <div className={classnames(styles.filters)}>
      <Checkbox defaultChecked>Комментарий</Checkbox>
      <Checkbox>Описание</Checkbox>
      <Checkbox>Тег</Checkbox>
    </div>
  );
};

export default Filters;

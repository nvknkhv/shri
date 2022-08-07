import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';

export const Input = ({ placeholder = '', rowsCount = 1 }) => {
  if (rowsCount === 1) return <input type="text" placeholder={placeholder} className={classnames(styles.input)} />;
  return <textarea placeholder={placeholder} rows={rowsCount} className={classnames(styles.input)} />;
};

Input.propTypes = {
  placeholder: PropTypes.string,
  rowsCount: PropTypes.number,
};

export default Input;

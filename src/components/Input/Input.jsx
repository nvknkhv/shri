import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';

export const Input = ({ placeholder = '', rowsCount = 1, defaultValue = '' }) => {
  if (rowsCount === 1)
    return (
      <input type="text" placeholder={placeholder} className={classnames(styles.input)} defaultValue={defaultValue} />
    );
  return (
    <textarea
      placeholder={placeholder}
      rows={rowsCount}
      className={classnames(styles.input)}
      defaultValue={defaultValue}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  rowsCount: PropTypes.number,
  defaultValue: PropTypes.string,
};

export default Input;

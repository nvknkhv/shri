import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useController } from 'react-hook-form';

import styles from './styles.module.css';

export const Input = ({ placeholder = '', rowsCount = 1, defaultValue = '', ...controllerProps }) => {
 /* console.log('controllerProps: ', controllerProps);
  const {
    field: { onChange, value },
  } = useController(controllerProps);*/

  if (rowsCount === 1)
    return (
      <input
        type="text"
        placeholder={placeholder}
        className={classnames(styles.input)}
        defaultValue={defaultValue}
       /* onChange={onChange}
        value={value}*/
      />
    );
  return (
    <textarea
      placeholder={placeholder}
      rows={rowsCount}
      className={classnames(styles.input)}
      defaultValue={defaultValue}
     /* onChange={onChange}
      value={value}*/
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  rowsCount: PropTypes.number,
  defaultValue: PropTypes.string,
};

export default Input;

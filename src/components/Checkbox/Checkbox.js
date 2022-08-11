import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';

export const Checkbox = ({ defaultChecked = false, children, onClick }) => {
  const [isChecked, setChecked] = useState(defaultChecked);
  return (
    <label className={classnames(styles.checkbox)}>
      <input
        type="checkbox"
        defaultChecked={isChecked}
        className={classnames(styles.checkbox__input)}
        onClick={onClick}
        onChange={(event) => setChecked(event.target.checked)}
      />
      <span className={classnames(styles.checkbox__state)}>
        <span className={classnames(styles.checkbox__control, isChecked && styles.checkbox__control_active)}>
          <svg className={classnames(styles.checkbox__icon)}>
            <path
              d="M3.33333 8.19166L0 4.85833L1.175 3.68333L3.33333 5.83333L8.825 0.34166L10 1.52499L3.33333 8.19166Z"
              fill="currentColor"
            />
          </svg>
        </span>
        {children && <span className={classnames(styles.checkbox__title)}>{children}</span>}
      </span>
    </label>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node,
  defaultChecked: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Checkbox;

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';

export const Button = ({
  children,
  accent = 'default',
  LeftIcon,
  isFullWidth = false,
  size = 'md',
  withBorder = false,
}) => {
  return (
    <button
      className={classnames(
        styles.button,
        styles[`button_${accent}`],
        styles[`button_${size}`],
        isFullWidth && styles.button_full,
        withBorder && styles.button_border,
      )}
    >
      {LeftIcon && <LeftIcon />}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  LeftIcon: PropTypes.node,
  accent: PropTypes.string,
  size: PropTypes.string,
  isFullWidth: PropTypes.bool,
  withBorder: PropTypes.bool,
};

export default Button;

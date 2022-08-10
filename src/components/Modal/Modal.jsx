import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ children, size = 'sm' }) => {
  return (
    <div className={classnames(styles.modal)}>
      <div className={classnames(styles.modal__popup, styles[`modal__popup_${size}`])}>{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
};

export default Modal;

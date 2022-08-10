import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';
import { Close } from '../../icons';

export const TagClosed = ({ accent, onClick }) => {
  return (
    <div className={classnames(styles.tag, styles.tag_closed, styles[`tag_${accent}`])}>
      <div onClick={onClick}>
        <Close />
      </div>
    </div>
  );
};

TagClosed.propTypes = {
  accent: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TagClosed;

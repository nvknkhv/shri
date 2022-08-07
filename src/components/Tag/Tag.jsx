import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';

export const Tag = ({ accent }) => {
  return <div className={classnames(styles.tag, styles[`tag_${accent}`])} />;
};

Tag.propTypes = {
  accent: PropTypes.string.isRequired,
};

export default Tag;

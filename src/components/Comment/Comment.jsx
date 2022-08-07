import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';
import { Close } from '../../icons';

export const Comment = ({ author = '', content = '' }) => {
  return (
    <article className={classnames(styles.comment)}>
      <div className={classnames(styles.comment__header)}>
        <span>{author}</span>
        <Close />
      </div>
      <p className={styles.comment__content}>{content}</p>
    </article>
  );
};

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Comment;

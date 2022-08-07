import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';
import Tag from '../Tag';
import { Dots, CommentAttention, CommentText } from '../../icons';

export const TaskCard = ({ tags, title }) => {
  return (
    <article className={classnames(styles.card)}>
      <div className={classnames(styles.card__raw)}>
        <span className={classnames(styles.card__title)}>{title}</span>
        <div className={classnames(styles.card__actions, styles.card__actions_top)}>
          <Dots />
        </div>
      </div>
      <div className={classnames(styles.card__raw)}>
        <div className={classnames(styles.card__tags)}>
          {tags.map((tagAccent) => (
            <Tag key={tagAccent} accent={tagAccent} />
          ))}
        </div>
        <div className={classnames(styles.card__actions, styles.card__actions_bottom)}>
          <CommentAttention />
          <CommentText />
        </div>
      </div>
    </article>
  );
};

TaskCard.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default TaskCard;

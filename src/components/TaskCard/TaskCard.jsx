import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';
import Tag from '../Tag';
import { CommentAttention, CommentText } from '../../icons';
import MenuButton from '../MenuButton';
import { basePath } from '../../pages/TaskPage/route';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { activeTicketSelector, setActiveTicket } from '../../reducers/slice';

export const TaskCard = ({ tags, title, description, comments, id, status }) => {
  const dispatch = useDispatch();
  const activeTicket = useSelector(activeTicketSelector);

  return (
    <article className={classnames(styles.card)}>
      <div className={classnames(styles.card__raw)}>
        <span
          className={classnames(styles.card__title)}
          onClick={() => {
            dispatch(setActiveTicket({ id, status }));
          }}
        >
          {title}
        </span>
        <div className={classnames(styles.card__actions, styles.card__actions_top)}>
          <Link to={`${basePath}/${id}`}>
            <MenuButton />
          </Link>
        </div>
      </div>
      <div className={classnames(styles.card__raw)}>
        <div className={classnames(styles.card__tags)}>
          {tags.map((tagAccent) => (
            <Tag key={tagAccent} accent={tagAccent} />
          ))}
        </div>
        <div className={classnames(styles.card__actions, styles.card__actions_bottom)}>
          {description && <CommentAttention />}
          {comments.length > 0 && <CommentText />}
        </div>
      </div>
    </article>
  );
};

TaskCard.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.shape({ author: PropTypes.string, text: PropTypes.string })),
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default TaskCard;

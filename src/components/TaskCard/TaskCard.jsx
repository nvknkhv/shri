import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';
import Tag from '../Tag';
import { CommentAttention, CommentText } from '../../icons';
import MenuButton from '../MenuButton';
import TaskModal from '../../modals/TaskModal';
import { useGlobalModal } from '../globalModal';
import CreateTaskPage from '../../pages/CreateTaskPage/CreateTaskPage';
import {basePath} from '../../pages/TaskPage/route';
import { Link } from 'react-router-dom';

export const TaskCard = ({ tags, title }) => {
  const { setModal } = useGlobalModal();
  return (
    <article className={classnames(styles.card)}>
      <div className={classnames(styles.card__raw)}>
        <span className={classnames(styles.card__title)}>{title}</span>
        <div className={classnames(styles.card__actions, styles.card__actions_top)}>
          <Link to={`${basePath}/1`}>
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

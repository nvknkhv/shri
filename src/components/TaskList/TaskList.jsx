import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';
import TaskCard from '../TaskCard';
import Button from '../Button';
import { Plus } from '../../icons';
import { Link } from 'react-router-dom';

export const TaskList = ({ title, cards, status }) => {
  return (
    <div className={classnames(styles.taskList)}>
      <span className={classnames(styles.taskList__title)}>{title}</span>
      <div className={classnames(styles.taskList__content)}>
        {cards.length > 0 &&
          cards.map((card) => (
            <TaskCard
              key={card.id}
              id={card.id}
              title={card.title}
              tags={card.tags}
              description={card.description}
              comments={card.comments}
              status={status}
            />
          ))}
        {title !== 'Done' && (
          <Link to="create">
            <Button LeftIcon={Plus} isFullWidth accent="active" onClick={() => {}}>
              Добавить
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string.isRequired, tags: PropTypes.arrayOf(PropTypes.string) }),
  ),
};

export default TaskList;

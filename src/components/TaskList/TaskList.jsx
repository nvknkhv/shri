import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';
import TaskCard from '../TaskCard';
import Button from '../Button';
import { Plus } from '../../icons';
import { useGlobalModal } from '../globalModal';
import TaskModal from '../../modals/TaskModal';
import { Link } from 'react-router-dom';
import CreateTaskPage from "../../pages/CreateTaskPage";

export const TaskList = ({ title, items }) => {
  const { setModal } = useGlobalModal();
  return (
    <div className={classnames(styles.taskList)}>
      <span className={classnames(styles.taskList__title)}>{title}</span>
      <div className={classnames(styles.taskList__content)}>
        <TaskCard title={items[0].title} tags={items[0].tags} />
        {title !== 'Done' && (
          <Link to={CreateTaskPage.path}>
            <Button LeftIcon={Plus} isFullWidth accent="active">
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
  items: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string.isRequired, tags: PropTypes.arrayOf(PropTypes.string) }),
  ),
};

export default TaskList;

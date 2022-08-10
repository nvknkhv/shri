import React, { useState } from 'react';

import classnames from 'classnames';

import styles from './styles.module.css';
import Input from '../../components/Input/Input';
import MultiSelect from '../../components/Multiselect';
import Button from '../../components/Button';
import MenuButton from '../../components/MenuButton';
import Comment from '../../components/Comment';
import { Plus, Return } from '../../icons';
import { useGlobalModal } from '../../components/globalModal';
import CommentModal from '../../modals/CommentModal';
import DeleteModal from '../../modals/DeleteModal/DeleteModal';
import route from './route';
import { Outlet } from 'react-router-dom';
import CommentPage from "../CommentPage/CommentPage";
import { Link } from 'react-router-dom';

const TaskPage = () => {
  const { setModal } = useGlobalModal();
  const [isEditing, setEditing] = useState(false);
  return (
    <>
      <div className={classnames(styles.layout)}>
        <Button accent="transparent" size="flat" LeftIcon={Return} onClick={() => {}}>
          Вернуться к задаче
        </Button>
        <div className={classnames(styles.content)}>
          <div className={classnames(styles.content__title)}>
            <span>Todo</span>
            <MenuButton
              actions={[
                {
                  name: 'Удалить',
                  callback: () => {
                    setModal(<DeleteModal />);
                  },
                },
                {
                  name: 'Редактировать',
                  callback: () => {
                    setEditing(true);
                  },
                },
              ]}
            />
          </div>
          <div className={classnames(styles.content__body)}>
            <Input placeholder="Название" isDisabled={!isEditing} />
            <Input placeholder="Описание" rowsCount={6} isDisabled={!isEditing} />
            <MultiSelect defaultValue={['yellow', 'violet', 'green2']} tagsCount={6} onlyRead />
            <div className={classnames(styles.comments)}>
              <Comment
                author="Иван Иванов"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />
            </div>
            <Link to={CommentPage.path}>
              <Button
                accent="transparent"
                LeftIcon={Plus}
                color="grey"
                size="flat"
                isDisabled={!isEditing}
              >
                Добавить комментарий
              </Button>
            </Link>
            {isEditing && (
              <div className={classnames(styles.container_centered)}>
                <Button accent="active" onClick={() => setEditing(false)}>
                  Сохранить
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default { ...route, element: <TaskPage /> };

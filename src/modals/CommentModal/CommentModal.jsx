import React from 'react';
import classnames from 'classnames';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';
import { Close } from '../../icons';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import TaskPage from '../../pages/TaskPage';

export const CommentModal = () => {
  const navigate = useNavigate();
  return (
    <Modal>
      <header className={classnames(styles.modal__title)}>
        <div
          className={classnames(styles.modal__close)}
          onClick={() => {
            navigate(TaskPage.path);
          }}
        >
          <Close />
        </div>
        <div>Добавить комментарий</div>
      </header>
      <div className={classnames(styles.modal__inner)}>
        <div className={classnames(styles.modal__content)}>
          <Input placeholder="Имя" />
          <Input placeholder="Комментарий" rowsCount={6} />
          <Button accent="active" isFullWidth onClick={() => {}}>
            Сохранить
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CommentModal;

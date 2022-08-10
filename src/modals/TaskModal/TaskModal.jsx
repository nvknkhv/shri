import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';
import { useGlobalModal } from '../../components/globalModal';
import { Close } from '../../icons';
import Input from '../../components/Input/Input';
import MultiSelect from '../../components/Multiselect';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

import { useNavigate } from 'react-router-dom';
import MainPage from '../../pages/MainPage';

export const TaskModal = ({ data }) => {
  const { resetModal } = useGlobalModal();
  const navigate = useNavigate();
  const isEditing = !!data;
  return (
    <Modal>
      <header className={classnames(styles.modal__title)}>
        <div
          className={classnames(styles.modal__close)}
          onClick={() => {
            resetModal();
            navigate(MainPage.path);
          }}
        >
          <Close />
        </div>
        <div>{isEditing ? 'Редактировать' : 'Создать тикет'}</div>
      </header>
      <div className={classnames(styles.modal__inner)}>
        <div className={classnames(styles.modal__content)}>
          <Input placeholder="Название" defaultValue={isEditing ? data.title : ''} />
          <Input placeholder="Описание" rowsCount={6} defaultValue={isEditing ? data.description : ''} />
          <MultiSelect defaultValue={isEditing ? data.tags : []} />
          <Button accent="active" isFullWidth onClick={() => {}}>
            Сохранить
          </Button>
        </div>
      </div>
    </Modal>
  );
};

TaskModal.propTypes = {
  //data: PropTypes.strin,
};

export default TaskModal;

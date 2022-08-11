import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.css';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import { useGlobalModal } from '../../components/globalModal';
import { removeTicketAsync } from '../../reducers/slice';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainPage from '../../pages/MainPage';

export const DeleteModal = () => {
  const { resetModal } = useGlobalModal();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Modal size="xs">
      <div className={classnames(styles.modal__inner)}>
        <div className={classnames(styles.modal__title)}>Удалить тикет?</div>
        <div className={classnames(styles.modal__buttons)}>
          <Button
            className={classnames(styles.modal__button)}
            onClick={() => dispatch(removeTicketAsync()).then(() => navigate(MainPage.path))}
          >
            Да
          </Button>
          <Button className={classnames(styles.modal__buttons)} onClick={resetModal}>
            Нет
          </Button>
        </div>
      </div>
    </Modal>
  );
};

DeleteModal.propTypes = {};

export default DeleteModal;

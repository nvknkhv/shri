import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.module.css';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import { useGlobalModal } from '../../components/globalModal';

export const DeleteModal = () => {
  const { resetModal } = useGlobalModal();
  return (
    <Modal size="xs">
      <div className={classnames(styles.modal__inner)}>
        <div className={classnames(styles.modal__title)}>Удалить тикет?</div>
        <div className={classnames(styles.modal__buttons)}>
          <Button className={classnames(styles.modal__button)}>Да</Button>
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

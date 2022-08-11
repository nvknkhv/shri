import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './styles.module.css';
import { Close } from '../../icons';
import Input from '../../components/Input';
import MultiSelect from '../../components/MultiSelect';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import MainPage from '../../pages/MainPage';
import {
  createTicketAsync,
  getTicketsAsync,
  statusSelector,
  activeTicketSelector,
  resetActiveTicket,
} from '../../reducers/slice';
import { useDispatch, useSelector } from 'react-redux';
import TicketsService from '../../services/TicketsService';

export const TaskModal = () => {
  const navigate = useNavigate();
  const activeTicket = useSelector(activeTicketSelector);
  const [data, setData] = useState(null);
  const params = useParams();
  const isEditing = !!params?.ticketId;

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      title: data?.title ?? '',
      description: data?.description ?? '',
      tags: data?.tags ?? [],
    },
  });

  useEffect(() => {
    async function fetchTicket() {
      if (activeTicket) {
        const ticket = await TicketsService.getTicket({
          targetStatus: activeTicket.status,
          targetId: activeTicket.id,
        });
        setData({ ...ticket });
      }
    }
    fetchTicket();
  }, [activeTicket]);

  const handleCreate = (formData) => {
    console.log('formData: ', formData);
    dispatch(createTicketAsync(formData)).then(() => dispatch(getTicketsAsync()).then(() => navigate(MainPage.path)));
  };

  const handleEdit = () => {
    console.log('edit!');
  };

  const onSubmit = (data) => console.log(data);

  return (
    <Modal>
      <header className={classnames(styles.modal__title)}>
        <div
          className={classnames(styles.modal__close)}
          onClick={() => {
            dispatch(resetActiveTicket());
            navigate(MainPage.path);
          }}
        >
          <Close />
        </div>
        <div>{isEditing ? 'Редактировать' : 'Создать тикет'}</div>
      </header>
      <div className={classnames(styles.modal__inner)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classnames(styles.modal__content)}>
            <Controller
              control={control}
              name="title"
              render={({ field: { onChange, value } }) => (
                <Input placeholder="Название" defaultValue={data?.title ?? ''} value={value} onChange={onChange} />
              )}
            />
            <Input
              placeholder="Описание"
              rowsCount={6}
              defaultValue={data?.description ?? ''}
              name="description"
              control={control}
            />
            <MultiSelect defaultValue={data?.tags ?? []} name="tags" control={control} />
            <Button accent="active" isFullWidth onClick={handleCreate}>
              Сохранить
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

TaskModal.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default TaskModal;

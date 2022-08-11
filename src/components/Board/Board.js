import React, { useEffect } from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import TaskList from '../TaskList';
import { useDispatch, useSelector } from 'react-redux';
import { getTicketsAsync, ticketsSelector, statusSelector, activeTicketSelector } from '../../reducers/slice';
import { useNavigate } from 'react-router-dom';

const columnMap = {
  todo: 'Todo',
  in_progress: 'In progress',
  done: 'Done',
};

const Board = () => {
  const navigate = useNavigate();
  const tickets = useSelector(ticketsSelector);
  const dispatch = useDispatch();

  const activeTicket = useSelector(activeTicketSelector);

  //initial state
  useEffect(() => {
    dispatch(getTicketsAsync());
  }, []);

  useEffect(() => {
    if (activeTicket) navigate(`edit/${activeTicket.id}`);
  }, [activeTicket]);

  return (
    <div className={classnames(styles.board)}>
      {Object.entries(columnMap).map(([columnName, columnTitle]) => (
        <TaskList key={columnName} title={columnTitle} cards={tickets[columnName]} status={columnName} />
      ))}
    </div>
  );
};

export default Board;

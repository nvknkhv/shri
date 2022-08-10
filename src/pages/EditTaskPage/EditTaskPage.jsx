import React, { useEffect } from 'react';
import TaskModal from '../../modals/TaskModal';
import route from './route';
import { useGlobalModal } from '../../components/globalModal';
import { useParams } from 'react-router-dom';

const EditTaskPage = () => {
  const { ticketId } = useParams();
  const { setModal } = useGlobalModal();
  useEffect(
    () => setModal(<TaskModal data={{ title: 'gggg', description: 'ololo', tags: ['yellow', 'violet', 'green2']}} />),
    [],
  );
  return null;
};

export default {
  ...route,
  element: <EditTaskPage />,
};

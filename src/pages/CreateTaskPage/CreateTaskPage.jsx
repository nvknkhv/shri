import React, { useEffect } from 'react';
import TaskModal from '../../modals/TaskModal';
import route from './route';
import { useGlobalModal } from '../../components/globalModal';

const CreateTaskPage = () => {
  const { setModal } = useGlobalModal();
  useEffect(() => setModal(<TaskModal />), []);
  return null;
};

export default {
  ...route,
  element: <CreateTaskPage />,
};

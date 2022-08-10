import React, { useEffect } from 'react';
import CommentModal from '../../modals/CommentModal';
import route from './route';
import { useGlobalModal } from '../../components/globalModal';

const CommentPage = () => {
  const { setModal } = useGlobalModal();
  useEffect(() => setModal(<CommentModal />), []);
  return null;
};

export default {
  ...route,
  element: <CommentPage />,
};

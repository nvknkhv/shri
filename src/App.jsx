import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import { GlobalModal, GlobalModalProvider } from './components/globalModal';
import Modal from './components/Modal';
import CommentModal from './modals/CommentModal';
import TaskModal from './modals/TaskModal';
import MainPage from './pages/MainPage';
import TaskPage from './pages/TaskPage';

function App() {
  return (
    <GlobalModalProvider>
      <Routes>
        <Route {...MainPage}>
          <Route
            path="create"
            element={
              <Modal>
                <TaskModal />
              </Modal>
            }
          />
          <Route
            path="edit/:ticketId"
            element={
              <Modal>
                <TaskModal />
              </Modal>
            }
          />
        </Route>
        <Route {...TaskPage}>
          <Route
            path="comment/add"
            element={
              <Modal>
                <CommentModal />
              </Modal>
            }
          />
          <Route path="*" element={<Navigate replace to={TaskPage.path} />} />
        </Route>
        <Route path="*" element={<Navigate replace to={MainPage.path} />} />
      </Routes>
      <GlobalModal />
    </GlobalModalProvider>
  );
}

export default App;

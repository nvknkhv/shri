import React from 'react';
import MainPage from './pages/MainPage';
import TaskPage from './pages/TaskPage';
import { GlobalModal, GlobalModalProvider } from './components/globalModal';
import { Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import CreateTaskPage from './pages/CreateTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import CommentPage from './pages/CommentPage';

function App() {
  return (
    <GlobalModalProvider>
      <Routes>
        <Route {...MainPage}>
          <Route {...CreateTaskPage} />
          <Route {...EditTaskPage} />
        </Route>
        <Route {...TaskPage}>
          <Route {...CommentPage} />
        </Route>
        {/*<Route path="*" element={<Navigate replace to={MainPage.path} />} />*/}
      </Routes>
      <GlobalModal />
    </GlobalModalProvider>
  );
}

export default App;

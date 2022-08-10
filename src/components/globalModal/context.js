import { createContext, useContext } from 'react';

const initialState = {
  modalContent: null,
  setModal: () => {},
  resetModal: () => {},
};

export const ModalContext = createContext(initialState);

export const useGlobalModal = () => useContext(ModalContext);
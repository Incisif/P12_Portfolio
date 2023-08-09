import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    content: null, // Vous pouvez stocker le contenu spécifique de la modal ici, si nécessaire
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.content = action.payload; // Si vous souhaitez passer un contenu spécifique à la modal
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.content = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectModalState = (state) => state.modal;

export default modalSlice.reducer;

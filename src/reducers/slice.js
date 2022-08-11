import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import TicketsService from '../services/TicketsService';

const initialState = {
  tickets: {
    todo: [],
    in_progress: [],
    done: [],
  },
  status: 'idle',
  activeTicket: JSON.parse(localStorage.getItem('ACTIVE_TICKET_ID')),
};

export const getTicketsAsync = createAsyncThunk('getTickets', async () => {
  const response = await TicketsService.requestAllTickets();
  return response;
});

export const createTicketAsync = createAsyncThunk('createTicket', async () => {
  await TicketsService.createTicket({ title: 'ffff', description: 'ololo' });
});

export const removeTicketAsync = createAsyncThunk('removeTicket', async () => {
  await TicketsService.removeTicket({ deleteStatus: 'todo', deleteId: '444' });
});

export const getSingleTicketAsync = createAsyncThunk('getSingleTickets', async () => {
  const response = await TicketsService.getTicket({ targetStatus: 'todo', targetId: '444' });
  return response;
});

export const dataSlice = createSlice({
  name: 'tickets',
  initialState,

  reducers: {
    setActiveTicket: (state, action) => {
      state.activeTicket = action.payload;
      localStorage.setItem('ACTIVE_TICKET_ID', JSON.stringify(state.activeTicket));
    },
    resetActiveTicket: (state) => {
      state.activeTicket = null;
      localStorage.removeItem('ACTIVE_TICKET_ID');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTicketsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTicketsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.tickets = action.payload;
      })
      .addCase(createTicketAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createTicketAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        //state.tickets = action.payload;
      })
      .addCase(removeTicketAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeTicketAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        //state.tickets = action.payload;
      });
  },
});

export const { setActiveTicket, resetActiveTicket } = dataSlice.actions;

export const statusSelector = createSelector(
  (state) => state.status,
  (status) => status,
);

export const ticketsSelector = createSelector(
  (state) => state.tickets,
  (items) => items,
);

export const activeTicketSelector = createSelector(
  (state) => state.activeTicket,
  (items) => items,
);

export default dataSlice.reducer;

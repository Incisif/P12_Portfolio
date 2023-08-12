import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const submitContactForm = createAsyncThunk(
  'contactForm/submit',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post('https://formspree.io/f/xqkvpdbp', formData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState: {
    status: 'idle',
    message: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.status = 'succeeded';
        state.message = 'Merci pour votre message!';
      })
      .addCase(submitContactForm.rejected, (state) => {
        state.status = 'failed';
        state.message = 'Quelque chose s\'est mal passé. Veuillez réessayer plus tard.';
      });
  },
});

export default contactFormSlice.reducer;

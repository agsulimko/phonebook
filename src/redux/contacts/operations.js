import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'api/auth';

// import { toast } from 'react-toastify';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  '/contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await instance('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  '/contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await instance.post('/contacts', {
        name: name,
        number: number,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, thunkAPI) => {
    try {
      console.log(instance.defaults.headers.common.Authorization);
      const response = await instance.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContacts = createAsyncThunk(
  'contacts/editContacts',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const response = await instance.patch(`/contacts/${id}`, {
        name: name,
        number: number,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

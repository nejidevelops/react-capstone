import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  URL, Company, Companies, Sectors,
} from './data';

const API_KEY = '4b3dee40e1fd4ba3c0487bd88caa6ed7';

const fetchCompanies = createAsyncThunk(
  'companies/getCompanies',
  async (sector) => {
    const baseUrl = `${URL}${Companies}?sector=${sector}&apikey=${API_KEY}`;
    const response = await axios.get(baseUrl);
    return response.data;
  },
);

const fetchCompany = createAsyncThunk(
  'company/fetchCompany',
  async (symbol) => {
    const baseUrl = `${URL}${Company}${symbol}?apikey=${API_KEY}`;
    const response = await axios.get(baseUrl);
    return response.data[0];
  },
);

const fetchSectors = createAsyncThunk(
  'sectors/fetchSectors',
  async () => {
    const baseUrl = `${URL}${Sectors}?apikey=${API_KEY}`;
    const response = await axios.get(baseUrl);
    return response.data;
  },
);

export default fetchCompanies;
export { fetchCompany, fetchSectors };

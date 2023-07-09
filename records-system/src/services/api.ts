import axios from 'axios';
import { getItem, setItem } from '../utils/storage';
import { RegiterUserData, UserData } from '../types/types';

const URL = 'http://localhost:8000';

async function registerUser(user: RegiterUserData): Promise<UserData> {
  const response = await axios.post(`${URL}/user/register`, user);
  return response.data;
}

async function loginUser(user: UserData): Promise<UserData> {
  const response = await axios.post(`${URL}/user/login`, user);

  const { token } = response.data;
  setItem('token', token);

  return response.data;
}

async function getUser(): Promise<UserData> {
  const response = await axios.get(`${URL}/user`, {
    headers: {
      Authorization: `Bearer ${getItem('token')}`
    }
  });

  return response.data;
}

export const api = {
  registerUser,
  loginUser,
  getUser
};

import axios from 'axios';
import { LoginData, RegiterUserData, UpdateUserData, UserData } from '../types/types';
import { getItem, setItem } from '../utils/storage';

const URL = 'http://localhost:8000';

async function registerUser(user: RegiterUserData): Promise<UserData> {
  const response = await axios.post(`${URL}/user`, user);
  return response.data;
}

async function loginUser(user: LoginData): Promise<UserData> {
  const response = await axios.post(`${URL}/login`, user);

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

async function updateUser(user: UpdateUserData): Promise<UserData> {
  const response = await axios.put(`${URL}/user`, user, {
    headers: {
      Authorization: `Bearer ${getItem('token')}`
    }
  });

  return response.data;
}

async function deleteUser(): Promise<UserData> {
  const response = await axios.delete(`${URL}/user`, {
    headers: {
      Authorization: `Bearer ${getItem('token')}`
    }
  });

  return response.data;
}

export const api = {
  registerUser,
  loginUser,
  getUser,
  updateUser,
  deleteUser
};

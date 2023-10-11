import axios from 'axios';
import {
  ClientData,
  HomeData,
  ListClientsData,
  LoginData,
  NewPasswordData,
  RegisterClientData,
  RegiterUserData,
  UpdateUserData,
  UserData
} from '../types/types';
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

async function newPassword(user: NewPasswordData): Promise<UserData> {
  const response = await axios.put(`${URL}/user/newPassword`, user, {
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

async function getHomeData(): Promise<HomeData> {
  const response = await axios.get(`${URL}/home`, {
    headers: {
      Authorization: `Bearer ${getItem('token')}`
    }
  });

  return response.data;
}

async function listClients(
  page: number,
  perPage: number,
  order: string,
  status: string,
  name: string
): Promise<ListClientsData> {
  const response = await axios.get(`${URL}/client`, {
    params: {
      page,
      perPage,
      order,
      status,
      name
    },
    headers: {
      Authorization: `Bearer ${getItem('token')}`
    }
  });

  return response.data;
}

async function registerClient(client: RegisterClientData): Promise<ClientData> {
  const response = await axios.post(`${URL}/client`, client, {
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
  deleteUser,
  newPassword,
  getHomeData,
  listClients,
  registerClient
};

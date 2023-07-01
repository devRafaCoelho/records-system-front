import axios from 'axios'
import { getItem, setItem } from '../utils/storage'

const URL = 'https://localhost:7172'

type UserData = {
  id: number
  name: string
  email: string
  password: string
  cpf: string
  phone: string
}

async function registerUser(user: UserData): Promise<UserData> {
  const response = await axios.post(`${URL}/user/register`, user)
  return response.data
}

async function loginUser(user: UserData): Promise<UserData> {
  const response = await axios.post(`${URL}/user/login`, user)

  const { token } = response.data
  setItem('token', token)

  return response.data
}

async function getUser(): Promise<UserData> {
  const response = await axios.get(`${URL}/user`, {
    headers: {
      Authorization: `Bearer ${getItem('token')}`
    }
  })

  return response.data
}

export const api = {
  registerUser,
  loginUser,
  getUser
}

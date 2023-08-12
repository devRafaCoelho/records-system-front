export type UserData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  cpf: string;
  phone: string;
};

export type RegiterUserData = {
  firstName: string;
  lastName: string;
  email: string;
  cpf: string | undefined;
  phone: string | undefined;
  password: string;
  confirmPassword: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type UpdateUserData = {
  firstName: string;
  lastName: string;
  email: string;
  cpf: string | undefined;
  phone: string | undefined;
  password: string;
};

export type ToastData = {
  type: string;
  message: string;
};

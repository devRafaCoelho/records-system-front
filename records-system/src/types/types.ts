export type UserData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
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

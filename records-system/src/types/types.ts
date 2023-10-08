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

export type NewPasswordData = {
  password: string;
  newPassword: string;
  confirmNewPassword: string;
};

export type ToastData = {
  type: string;
  message: string;
};

export type ClientData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  cpf: string | undefined;
  phone: string | undefined;
  address: string;
  complement: string;
  zip_code: string;
  district: string;
  city: string;
  uf: string;
  status: string;
};

export type ListClientsData = {
  page: number;
  totalPages: number;
  totalClients: number;
  clients: ClientData[];
};

export type RecordData = {
  recordId: number;
  id_clients: string;
  description: string;
  due_date: Date;
  value: number;
  paid_out: boolean;
  status: string;
  clientName: string;
};

export type HomeData = {
  totalValuePayed: string;
  totalValuePending: string;
  totalValueExpired: string;
  payedRecords: {
    total: number;
    records: RecordData[];
  };
  pendingRecords: {
    total: number;
    records: RecordData[];
  };
  expiredRecords: {
    total: number;
    records: RecordData[];
  };
  defaulterClients: {
    total: number;
    clients: ClientData[];
  };
  upToDateClients: {
    total: number;
    clients: ClientData[];
  };
};

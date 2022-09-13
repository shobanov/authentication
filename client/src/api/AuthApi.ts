import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import {
  AuthResponse,
  IUser,
  LoginDto,
  PasswordRecoveryDto,
  PasswordUpdateDto,
  RegistrationDto,
} from '../types';

export const instance = axios.create({
  baseURL: 'http://localhost:5000/',
  withCredentials: true,
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  // eslint-disable-next-line no-param-reassign
  config.headers!.Authorization = `Bearer ${localStorage.getItem(
    'accessToken',
  )}`;

  return config;
});

export const AuthApi = {
  async login(dto: LoginDto): Promise<AxiosResponse<AuthResponse>> {
    return instance.post<AuthResponse>('login', dto);
  },
  async registration(
    dto: RegistrationDto,
  ): Promise<AxiosResponse<AuthResponse>> {
    return instance.post<AuthResponse>('registration', dto);
  },
  async logout(): Promise<void> {
    return instance.post('logout');
  },
  async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return instance.get<IUser[]>('users');
  },
  async passwordUpdate(dto: PasswordUpdateDto): Promise<AxiosResponse<void>> {
    return instance.post('password_update', dto);
  },
  async passwordRecovery(
    dto: PasswordRecoveryDto,
  ): Promise<AxiosResponse<void>> {
    return instance.post('password_recovery', dto);
  },
  async me(): Promise<AxiosResponse<AuthResponse>> {
    return instance.get<AuthResponse>('me');
  },
  async refreshToken(): Promise<AxiosResponse<AuthResponse>> {
    return instance.post<AuthResponse>('refreshToken');
  },
};

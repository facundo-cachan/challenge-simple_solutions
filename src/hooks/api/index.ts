import axios from 'axios'

import { session } from '@providers/recoil/atoms/session'
import { getRecoil, setRecoil } from '@providers/state-management/Nexus'

import type {
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

type Interceptor = {
  request: AxiosInterceptorManager<InternalAxiosRequestConfig<any>>;
  response: AxiosInterceptorManager<AxiosResponse<any, any>>;
}

export enum Environment {
  'local', 'myApi'
}

export const DEFAULT_ENV = Environment.local
export const message = 'notification { type message }';
const getBaseUrl = (env: Environment = DEFAULT_ENV) => {
  switch (env) {
    case Environment.myApi: {
      return 'https://myApi.com/graphql/'
    }
    default: {
      return 'http://localhost:3001/'
    }
  }
}

export const apiInstance: AxiosInstance = axios.create(
  {
    baseURL: getBaseUrl(),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
)
const { interceptors }: { interceptors: Interceptor } = apiInstance;

interceptors.request.use(async (config: InternalAxiosRequestConfig<any>) => {
  const getSession = getRecoil(session)
  if (getSession) {
    const { headers }: { headers: AxiosRequestHeaders } = config;
    headers.Authorization = `Bearer ${getSession.token}`
  }
  return config
});

interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response;
    if (data?.token) {
      const { expiresIn, token, user } = data;
      setRecoil(session, { expiresIn, token })
      return user
    }
    return data
  },
  (error: unknown) => {
    return Promise.reject(error)
  }
);

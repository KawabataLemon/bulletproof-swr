import { Result } from './../types/result';
import { fetcher } from './axios';
import useSWR from 'swr';

export const fetch = <T>(path: string): Result<T> => {
  const { data, error, isLoading } = useSWR<T>(path, fetcher);

  if (error) {
    return {
      status: 'error',
      data: undefined,
    };
  }

  if (isLoading) {
    return {
      status: 'loading',
      data: undefined,
    };
  }
  
  return {
    status: 'ok',
    data: data!,
  };
};
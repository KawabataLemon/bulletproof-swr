import { Result } from './../types/result';
import { poster } from './axios';

export const post = async <T, K>(path: string, dto:K): Promise<Result<T>> => {
  try {
    const result = await poster<T, K>(path, dto);
    
    return {
      status: 'ok',
      data: result,
    };
  } catch {
    return {
      status: 'error',
      data: undefined,
    };
  }
};
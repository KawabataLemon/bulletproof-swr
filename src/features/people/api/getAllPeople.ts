import { PeopleResponse } from './../types/index';
import { fetch } from '../../../libs/fetch';

export const getAllPeople = () => fetch<PeopleResponse>('/people')
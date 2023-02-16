import { PeopleAvator } from '../components/PeopleAvator'
import {PeopleResponse } from "../types";
import useSWR from 'swr'
import { getAllPeople } from '../api/getAllPeople';
export const PeopleList = () => {
  const { status, data } = getAllPeople();

  if (status === 'loading') {
    return <div>Loading...</div>
  }
  
  if (status === 'error') {
    return (
      <div>
        <span>Something Wrong</span>
      </div>
    )
  }

  const listPeople = data?.results.map(p => <li><PeopleAvator people={p}/></li>)
  return <ul>{listPeople}</ul>
}
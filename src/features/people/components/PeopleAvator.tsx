import { People } from '../types/index'
import styles from './PeopleAvator.module.css'

const PeopleAvator = ({ people }: { people: People }) => {
  return (
    <div className={styles['people-container']}>
      <span> {people.name} </span>
      <p> { people.birth_year } </p>
    </div>
  )
}

export {
  PeopleAvator
}
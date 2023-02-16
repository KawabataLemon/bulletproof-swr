import { Routes, Route } from 'react-router-dom'
import { PeopleList } from './PeopleList'
export const PeopleRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PeopleList />} />
    </Routes>
  )
}
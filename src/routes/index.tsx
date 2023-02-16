import { Outlet } from "react-router-dom"
import { PeopleRoutes } from '../features/people/routes'

const App = () => {
  return <div>
    <span>Best peoples</span>
      <Outlet />
  </div>
}

export const routes =[
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/people', element: <PeopleRoutes />}
    ]
  }
]
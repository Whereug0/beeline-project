import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import { ROUTES } from '../../utils/routes'
import AllVacancies from '../../pages/AllVacancies/AllVacancies'

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path={ROUTES.VACANCIES} element={<AllVacancies/>}/>
    </Routes>
  )
}

export default AppRoutes

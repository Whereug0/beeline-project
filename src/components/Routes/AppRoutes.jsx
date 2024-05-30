import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import { ROUTES } from '../../utils/routes'
import AllVacancies from '../../pages/AllVacancies/AllVacancies'
import SingleVacancy from '../../pages/SingleVacancy/SingleVacancy'

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path={ROUTES.VACANCIES} element={<AllVacancies/>}/>
      <Route path={ROUTES.SINGLE_VACANCY} element={<SingleVacancy />}/>
    </Routes>
  )
}

export default AppRoutes

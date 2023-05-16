import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import HeaderPoke from './shared/HeaderPoke'

const ProtectedRoutes = () => {
  
  const trainer = useSelector(state => state.trainer)

if(trainer){
  return (<>
    <HeaderPoke/>
    <Outlet/>
    <hr />
    
  </>
  )
}else{
  return <Navigate to='/'/>
}

}

export default ProtectedRoutes
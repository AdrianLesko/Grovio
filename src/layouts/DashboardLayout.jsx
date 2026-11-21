import {Outlet} from 'react-router-dom'


export default function DashboardLayout () {
  return (
    <div className='min-h-screen flex flex-col bg-base-200'>
     <Outlet />
    </div>
  )
}
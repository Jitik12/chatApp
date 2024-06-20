import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'
import { Box } from '@mui/material'

const Root = () => {
  return (
    <div style={{display:'flex', justifyContent:'flex-start', }}>
      <SideBar />
      <Box sx={{flexGrow: 1, width: "100%"}}>
        <Outlet/>
      </Box>
    </div>
  )
}

export default Root
import { Box, Typography, Button } from '@mui/material'
import React, { useContext } from 'react'
import { StatusContext } from '../context/Status'

const SideBar = () => {

  const {view, setView} = useContext(StatusContext);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "20vw",
        color: "white",
        border: "3px green solid",
      }}
    >
      <Box>
        <Typography variant="h6" color="">
          <Button onClick={() => setView(2)}>Forms</Button>
        </Typography>
        <Typography variant="h6" color="">
          <Button onClick={() => setView(1)}>Chat</Button>
        </Typography>
        <Typography variant="h6" color="">
          <Button onClick={() => setView(3)}>
            Reimbursement
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}

export default SideBar
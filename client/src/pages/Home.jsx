import React, { useContext } from 'react'
import { StatusContext } from '../context/Status'
import Chat from './Chat';
import Form from './Form';
import Reimbursement from './Reimbursement';
import { Box } from '@mui/material';

const Home = () => {
  const {view, setView} = useContext(StatusContext);
  

  return (
    <Box>
      {view === 1 && <Chat />}
      {view === 2 && <Form />}
      {view === 3 && <Reimbursement />}
    </Box>
  );
}

export default Home
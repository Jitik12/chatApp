import './App.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/Root';
import Home from './pages/Home';
import Chat from './pages/Chat';
import NotFound from './NotFount';
import socketIO from "socket.io-client";
import { useContext } from 'react';
import { StatusContext } from './context/Status';

const socket = socketIO.connect("http://localhost:4000");

function App() {
  const { username , setUsername , oyoID , setOyoID , usersInRoom , setUsersInRoom } = useContext(StatusContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root />,
      errorElement: <NotFound />,
      children:[
        {
          path:"",
          element: <Chat socket={socket} />,
        },
        // {
        //   path: "chat",
        //   element: (username === "" || oyoID === "" ) ? <Home socket={socket}/> : <Chat socket={socket} />
        // }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;

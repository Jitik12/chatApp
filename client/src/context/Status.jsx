import React, { createContext, useState } from 'react'



const StatusContext = createContext();


const Status = ({children}) => {
  const [ username , setUsername ] = useState("");
  const [ oyoID , setOyoID ] = useState("");
  const [ usersInRoom , setUsersInRoom ] = useState([]);

  const [view, setView] = useState(1);

  return (
    <StatusContext.Provider value={{ username , setUsername , oyoID , setOyoID , usersInRoom , setUsersInRoom, view, setView }}>
      {children}
    </StatusContext.Provider>
  )
}

export {StatusContext}
export default Status
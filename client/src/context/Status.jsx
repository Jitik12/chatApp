import React, { createContext, useState } from 'react'



const StatusContext = createContext();


const Status = ({children}) => {
  const [ username , setUsername ] = useState("");
  const [ oyoID , setOyoID ] = useState("");
  const [ usersInRoom , setUsersInRoom ] = useState([]);

  return (
    <StatusContext.Provider value={{ username , setUsername , oyoID , setOyoID , usersInRoom , setUsersInRoom }}>
      {children}
    </StatusContext.Provider>
  )
}

export {StatusContext}
export default Status
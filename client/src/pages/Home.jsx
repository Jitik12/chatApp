import React, { useContext, useState } from 'react';
import {StatusContext} from '../context/Status';
import {useNavigate} from 'react-router-dom';

const Home = () => {


  const navigate = useNavigate();
  const { username, setUsername , oyoID , setOyoID } = useContext(StatusContext);
  const [ tempName , setTempName ] = useState("");
  const [ tempOyoID , setTempOyoID ] = useState("");



  const handleSubmit = () => {
    if( tempName !== "" && tempOyoID !== "" )
    {
      setUsername(tempName);
      setOyoID(tempOyoID);
      navigate('/chat');
    }
    else{
      alert("Fill the only voids you see in the page");
    }
  }


  return (
    <section className='login'>
      <div>
        <h1>This is My Submission for Lamda</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">UserName : </label>
            <input type="text" id='username' name='username' onChange={(e)=>setTempName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="oyoID">OYO ID : </label>
            <input type="text" name='oyoID' id='oyoID' onChange={(e)=>setTempOyoID(e.target.value)} />
          </div>
          <button type='submit'>Get IN</button>
        </form>
      </div>
    </section>
  )
}

export default Home
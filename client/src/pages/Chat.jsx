import React , {useContext , useState} from 'react'
import { StatusContext } from '../context/Status';
import { useNavigate } from 'react-router-dom';


const Chat = ({socket}) => {
  const { username, setUsername, oyoID, setOyoID } = useContext(StatusContext);
  const [ message , setMessage ] = useState("");
  const [ messageThread , setMessageThread ] = useState([]);
  const navigate = useNavigate();

  // displaying the messages
  socket.on(`${oyoID}_Response`, (data) => {
    if ( data.oyoID === oyoID )
    {
      setMessageThread([...messageThread , data]);
    }
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    if( message !== "" )
    {
      socket.emit("message",{
        sender: username ,
        oyoID: oyoID,
        text: message ,
        textID : `${Math.random()}`,
        socketID: socket.id,
      })
    }
    else{
      console.log("Empty Message");
    }
    setMessage("");
  }

  const handleLeave = () => {
    navigate("/");
  }

  return (
    <section className='chat'>
      <div className='roomName'>
        <h1>Room : {oyoID}</h1>
      </div>
      <div className='chatPanel'>
        {
          messageThread.map( (eachMessage) => {
            if( eachMessage.sender === username )
            {
              return (
                <div className='you'>
                  {/* <p className=''>You : </p> */}
                  <p className='text'> {eachMessage.text}</p>
                </div>
              )
            }
            else if( eachMessage.sender !== username )
            {
              return (
                <div className='sender'>
                  {/* <p className=''>{eachMessage.sender} : </p> */}
                  <p className='text'>{eachMessage.text}</p>
                </div>
              )
            }
            return () => {};
          })
        }

      </div>
      <div className='send'>
        <form onSubmit={handleSendMessage}>
          <input type="text" name="message" id="message" value={message} onChange={(e)=>setMessage(e.target.value)} />
          <button type='submit'>Send</button>
        </form>
      </div>

      <div className='leaveRoom'>
        <button onClick={handleLeave}>Get Back to the Real World</button>
      </div>

    </section>
  )
}

export default Chat
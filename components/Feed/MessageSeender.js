
import './MessageSender.css'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import React , { useState} from 'react';
import { useStateValue } from '../StateProvider/StateProvider';

const MessageSeender = () => {
  const [{user}, dispatch] = useStateValue()

  const[input , setInput] = useState ('')
  const[imageURL , setImageUrl] = useState ('')

  const handleSubmit = e =>{
    e.preventDefault ();
      // db stuff
    setImageUrl("")
    setInput("")

  }
  return (
    <div className="messageSender">
        <div className="messageSender_top">
          <Avatar
          src={user.photoURL}/>
          <form>
            <input 
            value = {input}
            onChange = { e =>{
              setInput(e.target.value)
            }}
            className='messangeSender_input' 
            placeholder={"What's your mind? "}
            />
            <input
            value = {imageURL}
            onChange = {(e =>{
              setImageUrl(e.target.value)
            })}
             placeholder='Image URL (Optional)' />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
            </button>
          </form>

        </div>
        <div className="messageSender_bottom">
          <div className="messageSender_option">  
            <VideocamIcon fontSize='large' style ={{color : "#f3425f"}} />
          <h3>Live Video</h3></div>
          <div className="messageSender_option">  
            <PhotoLibraryIcon fontSize="large" style ={{color : "#45db62"}}/>
            <h3>Photo/Video</h3></div>
            <div className="messageSender_option">  
            <InsertEmoticonIcon fontSize ="large" style = {{color :"f7b928"}}/>
          <h3>Feeling/Activity</h3>
          </div>
          </div>
            
        </div>
    
  )
}

export default MessageSeender
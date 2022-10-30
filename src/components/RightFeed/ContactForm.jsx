import {useState} from 'react';
import axios from 'axios';
import {TextField, Button} from '@mui/material';
import { IoSend } from "react-icons/io5";

const ContactForm = ()=>{
    const [formData, setFormData] = useState({
      "name":"",
      "email":"",
      "message":""
    })
    const handleChange = (e)=>{
      setFormData({...formData, [e.target.name]:e.target.value})
    }
    const handleSubmit = async(e)=>{
      e.preventDefault();
      
     try{
      const response = await axios.post("https://portfolio-backend-apis.herokuapp.com/sendmail",{
        ...formData,
        "time": new Date().toLocaleString("en-GB")
       })
       console.log(response)
     }
     catch(error){
      console.log(error)

     }

    }

    return <div style={{display:"flex", justifyContent:"center", marginBottom:"5px"}}>
      <div>
      <h2 >Want to say something?</h2>
      <form onSubmit={handleSubmit}>
      <TextField name='name' value={formData.name} onChange={handleChange} label="Your Name" variant="outlined" size="small" style={{marginBottom:"6px"}} fullWidth required/><br/>
      <TextField name='email' value={formData.email} onChange={handleChange} label="Email" variant="outlined" size="small"style={{marginBottom:"6px"}} fullWidth/> <br/>
      <TextField name='message' value={formData.message} onChange={handleChange} label="Your Message" variant="outlined" size="small" style={{marginBottom:"6px"}} multiline rows={3}fullWidth />
      <div style={{display:"flex",justifyContent:"center"}}>
        <Button type='submit' variant="contained" endIcon={<IoSend />} fullWidth>Send</Button>
      </div>
      </form>
      </div>
    </div>
}


export default ContactForm;
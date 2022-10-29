import {TextField, Button} from '@mui/material';
import { IoSend } from "react-icons/io5";
const ContactForm = ()=>{
    return <div style={{display:"flex", justifyContent:"center", marginBottom:"5px"}}>
      <div>
      <h2 >Want to say something?</h2>
      <TextField label="Your Name" variant="outlined" size="small" style={{marginBottom:"6px"}} fullWidth/><br/>
      <TextField label="Email" variant="outlined" size="small"style={{marginBottom:"6px"}} fullWidth/> <br/>
      <TextField label="Your Message" variant="outlined" size="small" style={{marginBottom:"6px"}} multiline rows={3}fullWidth />
      <div style={{display:"flex",justifyContent:"center"}}><Button variant="contained" endIcon={<IoSend />} size="small" fullWidth>Send</Button></div>
      </div>
    </div>
}


export default ContactForm;
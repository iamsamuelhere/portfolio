import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { TextField, Button } from '@mui/material';
import { IoSend } from "react-icons/io5";

import { createClient } from '@supabase/supabase-js';

const getSupabaseClient = () => {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
  const supabaseKey = process.env.REACT_APP_SUPABASE_ANONKEY
  const supabase = createClient(supabaseUrl, supabaseKey)
  return supabase;
}

const postDetailsSupabase = async ({ name, emailId, message }) => {
  try {
    const supabase = getSupabaseClient();

    const dbResponse = await supabase
      .from('Portfolio-ContactForm')
      .insert([
        {
          name: name,
          email: emailId,
          message: message,
        },
      ])
    return dbResponse.status;

  } catch (err) {
    console.log("Error while sending contact details", err);
    throw new Error(err);
  }

}

const ContactForm = () => {

  const initalData = {
    "name": "",
    "emailId": "",
    "message": ""
  };
  const [formData, setFormData] = useState(initalData)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      postDetailsSupabase(formData)
        .then((responseStatus) => {
          if (responseStatus == 201) {
            console.log("Contact details sent")
            toast.success("Your message is sent. Will reply back you soon! 😊", {
              position: "bottom-center",
              theme: "colored"
            })
          } else {
            console.log("Contact details sending failure")
            toast.error("Something went wrong! Try after some time. 🧐", {
              position: "bottom-center",
              theme: "colored"
            })
          }
        })
        .catch(() => {
          console.log("Contact details sending failure")
          toast.error("Something went wrong! Try after some time. 🧐", {
            position: "bottom-center",
            theme: "colored"
          })
        })

      setFormData(initalData);
    }
    catch (error) {
      console.log(error)
      toast.error("Something went wrong! Try after some time. 🧐", {
        position: "bottom-center",
        theme: "colored"
      })
      setFormData(initalData);
    }
          // const response = await axios.post("https://portfolio-service-apis.vercel.app/sendmail", {
      //   ...formData,
      //   "time": new Date().toLocaleString("en-GB")
      // })
      // console.log(response.data.status)
      // if (response.data.status === 201) {
      //   toast.success("An auto-reply mail is sent to you and will reply back to your message soon! 😊", {
      //     position: "bottom-center",
      //     theme: "colored"
      //   })
      // } else {
      //   toast.error("Something went wrong! Try after some time. 🧐", {
      //     position: "bottom-center",
      //     theme: "colored"
      //   })
      // }

  }

  return <div style={{ display: "flex", justifyContent: "center", marginBottom: "5px" }}>
    <div>
      <h2 >Want to say something?</h2>
      <form onSubmit={handleSubmit}>
        <TextField name='name' value={formData.name} onChange={handleChange} label="Your Name" variant="outlined" size="small" style={{ marginBottom: "6px" }} fullWidth required /><br />
        <TextField name='emailId' value={formData.email} onChange={handleChange} label="Email" variant="outlined" size="small" style={{ marginBottom: "6px" }} fullWidth required /> <br />
        <TextField name='message' value={formData.message} onChange={handleChange} label="Your Message" variant="outlined" size="small" style={{ marginBottom: "6px" }} multiline rows={3} fullWidth required />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type='submit' variant="contained" endIcon={<IoSend />} fullWidth>Send</Button>
        </div>
      </form>
    </div>
    <ToastContainer />
  </div>
}


export default ContactForm;

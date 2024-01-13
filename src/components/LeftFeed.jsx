import { Grid, IconButton, Button } from '@mui/material';

import { HiSpeakerWave } from "react-icons/hi2";
import { MdOutlineWork, MdEmail, MdLocationOn } from "react-icons/md";
import { CgProfile } from "react-icons/cg";


import profilePic from '../images/profile.jpeg';
import textToSpeech from '../utils/textToSpeech';
import SocialHandle from './SocialHandle';

const LeftFeed = () => {
    return <Grid item xs={12} md={3}>
        <div style={{ height: "100vh", backgroundColor: "#F4F5F7", display:"flex", alignItems:"center", borderRadius:"30px" }}>
            <div>
                {/* image */}
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
                <img src={profilePic} style={{ margin:"auto", height:"75%", width:"75%", borderRadius: "50%" }} />
            </div>
            {/* Intro */}
            <p style={{ textAlign: "center" }}>Samuel T
                <IconButton onClick={() => { textToSpeech("Samuel T") }}>
                    <HiSpeakerWave style={{ color: "#0A66C2" }} />
                </IconButton>
            </p>
            <ul style={{ listStyle: "none" }}>
                <li><MdOutlineWork /> Software Engineer at Allstate</li>
                <li><MdEmail /><a href="mailto:iamsamuelhere@gmail.com"> iamsamuelhere@gmail.com</a></li>
                <li><MdLocationOn /> Bangalore, India</li>
            </ul>
            {/* socialLinks */}
            <SocialHandle />

            <div style={{ textAlign: "center", marginTop: "5px",  }}>
                <a style={{textDecoration:"none"}}href="https://drive.google.com/file/d/1InbTNbiIBrApiw3RB1xy9AArCctD-jTP/view?usp=sharing" target="_blank">
                <Button variant="contained" startIcon={<CgProfile />} >
                    View Resume
                </Button>
                </a>
            </div>
            </div>

        </div>
    </Grid>
}

export default LeftFeed;
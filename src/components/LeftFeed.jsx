import { Grid, IconButton, Button } from '@mui/material';

import { HiSpeakerWave } from "react-icons/hi2";
import { MdOutlineWork, MdEmail, MdLocationOn } from "react-icons/md";
import { GrLinkedin, GrGithub, GrTwitter } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";


import profilePic from '../images/profile.jpg';
import textToSpeech from '../utils/textToSpeech';

const LeftFeed = () => {
    return <Grid item xs={12} md={3}>
        <div style={{ height: "100vh", backgroundColor: "#F4F5F7" }}>
            {/* image */}
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
                <img src={profilePic} style={{ margin: "auto", height: "120%", width: "75%", borderRadius: "50%" }} />
            </div>
            {/* Intro */}
            <p style={{ textAlign: "center" }}>Samuel T
                <IconButton onClick={() => { textToSpeech("Samuel T") }}>
                    <HiSpeakerWave style={{ color: "#0A66C2" }} />
                </IconButton>
            </p>
            <ul style={{ listStyle: "none" }}>
                <li><MdOutlineWork />Associate Software Eng at Allstate</li>
                <li><MdEmail /> iamsamuelhere@gmail.com</li>
                <li><MdLocationOn /> Bangalore, India</li>
            </ul>
            {/* socialLinks */}
            <div style={{ textAlign: "center" }}>
                <a href="https://www.linkedin.com/in/iamsamuelt/" target="_blank">
                    <IconButton>
                        <GrLinkedin style={{ color: "#0A66C2" }} />
                    </IconButton>
                </a>
                <a href="https://github.com/iamsamuelhere" target="blank">

                    <IconButton>
                        <GrGithub style={{ color: "#24292F" }} />
                    </IconButton>
                </a>
                <a href="https://twitter.com/iamsamuelcool" target="_blank">

                    <IconButton>
                        <GrTwitter style={{ color: "#1C96E8" }} />
                    </IconButton>
                </a>

            </div>

            <div style={{ textAlign: "center", marginTop: "3px" }}>
                <Button variant="contained" startIcon={<CgProfile />} size="small">
                    View Resume
                </Button>
            </div>

        </div>
    </Grid>
}

export default LeftFeed;
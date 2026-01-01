import { Grid, IconButton, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';



import { HiSpeakerWave } from "react-icons/hi2";
import { MdOutlineWork, MdEmail, MdLocationOn,  MdKeyboardDoubleArrowDown   } from "react-icons/md";


import profilePic from '../images/profile.jpeg';
import textToSpeech from '../utils/textToSpeech';
import SocialHandle from './SocialHandle';



const LeftFeed = () => {
    const theme = useTheme();
    const isLowerMediumResolution = useMediaQuery(theme.breakpoints.down("md"))

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
                <li><MdOutlineWork style={{ color: "#0A66C2" }}  /> Senior Software Engineer at American Airlines</li>
                <li><MdEmail style={{ color: "#0A66C2" }}  /><a href="mailto:iamsamuelhere@gmail.com"> iamsamuelhere@gmail.com</a></li>
                <li><MdLocationOn style={{ color: "#0A66C2" }}  /> Hyderabad, India</li>
            </ul>
            {/* socialLinks */}
            <SocialHandle />
            {isLowerMediumResolution&&
            <div style={{display:"flex", justifyContent:"center", margin:"10px"}}>
            <MdKeyboardDoubleArrowDown size={'2em'}   style={{ color: "#0A66C2", height:"2em"}} />
                </div>
            }
            
            </div>

        </div>
    </Grid>
}

export default LeftFeed;
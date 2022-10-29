import Grid from '@mui/material/Grid';
import { TypeAnimation } from 'react-type-animation';

import WorkExperience from './workExperience';
import Project from './Projects';
import Education from './Education';
import ContactForm from './ContactForm';
import Footer from './Footer';

const RightFeed = () => {
    return <Grid item xs={12} md={9}>
        {/* intro */}
        <h2 style={{ fontSize: "2rem", textAlign: "center" }}>Hola, I'm Samuel
            <img height="30px" src="https://user-images.githubusercontent.com/39955420/147578264-bae0526c-028a-49d2-8af8-d08bb4edbd2a.gif" />
        </h2>
        <div style={{ textAlign:"center", display: "flex", justifyContent:"center" }}>
            <h1>I build</h1>
            <TypeAnimation
                cursor={false}
                sequence={[' <FullStack Apps/>', 1000, ' <Hybrid Mobile Apps/>', 1000, ' <Chatbots/>', 1000]}
                style={{ color: "#1C96E8",marginLeft:"5px" }}
                repeat={Infinity}
                wrapper="h1" 
                speed={75}
            />
        </div>
        <WorkExperience/>
        <Project/>
        <Education/>
        <ContactForm/>
        <Footer/>
            </Grid>
}

export default RightFeed;
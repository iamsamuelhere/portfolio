import { GrLinkedin, GrGithub, GrTwitter, GrMail } from "react-icons/gr";
import { IoMail } from "react-icons/io5";

import { IconButton } from '@mui/material';


const socialHandleData = [
    {
        "icon": <GrLinkedin style={{ color: "#0A66C2" }} />,
        "url": "https://www.linkedin.com/in/iamsamuelt/"
    },
    {
        "icon": <GrGithub style={{ color: "#24292F" }} />,
        "url": "https://github.com/iamsamuelhere"
    },
    {
        "icon": <GrTwitter style={{ color: "#1C96E8" }} />,
        "url": "https://twitter.com/iamsamuelcool"
    },
    {
        "icon": <IoMail style={{ color: "#1C96E8" }} />,
        "url": "mailto:iamsamuelhere@gmail.com"
    }
    
]

const SocialHandle = () => {
    return <div style={{ textAlign: "center", marginBottom:"5px" }}>
        {
            socialHandleData.map(social => {
                return <a href={social.url} target="_blank">
                    <IconButton>
                        {social.icon}
                    </IconButton>
                </a>
            })
        }

    </div>
}

export default SocialHandle;
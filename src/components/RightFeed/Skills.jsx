import { Card, CardMedia, CardContent, CardActions, Typography, Grid, Chip, Button } from '@mui/material';
import { GrReactjs } from 'react-icons/gr';
import {FaNodeJs} from 'react-icons/fa';
import {SiFlutter, SiMongodb, SiMysql, SiFirebase, SiExpress, SiAmazonaws, SiJavascript, SiPostman, SiDocker } from 'react-icons/si'
import { headerUnderlineStyle } from "../../styles";

const skillData = [
    {
        "icon": <GrReactjs style={{ color: "white" }} size="20px" />,
        "label": "ReactJS"
    },
    {
        "icon": <FaNodeJs style={{ color: "white" }} size="20px" />,
        "label": "NodeJS"
    },
    {
        "icon": <SiExpress style={{ color: "white" }} size="20px" />,
        "label": "ExpressJS"
    },
    {
        "icon": <GrReactjs style={{ color: "white" }} size="20px" />,
        "label": "React Native"
    },
    {
        "icon": <SiFlutter style={{ color: "white" }} size="20px" />,
        "label": "Flutter"
    },
    {
        "icon": <SiMongodb style={{ color: "white" }} size="20px" />,
        "label": "MongoDB"
    },
    {
        "icon": <SiMysql style={{ color: "white" }} size="20px" />,
        "label": "MySQL"
    },
    {
        "icon": <SiFirebase style={{ color: "white" }} size="20px" />,
        "label": "Firebase"
    },
    {
        "icon": <SiAmazonaws style={{ color: "white" }} size="20px" />,
        "label": "AWS"
    },
    {
        "icon": <SiDocker style={{ color: "white" }} size="20px" />,
        "label": "Docker"
    },
    {
        "icon": <SiJavascript style={{ color: "white" }} size="20px" />,
        "label": "JavaScipt"
    },
    {
        "icon": null,
        "label": "C++"
    },
    {
        "icon": <SiPostman style={{ color: "white" }} size="20px" />,
        "label": "Design & Build APIs"
    },
   
]




const Skills = () => {
    return <>
        <h2 style={headerUnderlineStyle}>Technologies & Tools</h2>
        <Card>
            <CardContent>
                {
                    skillData.map(skill => {
                        return <Chip icon={skill.icon} label={skill.label} size="medium" style={{ backgroundColor: "#2196F3", color: "white", marginRight: "5px", marginBottom: "5px" }} />

                    })
                }
            </CardContent>
        </Card>

    </>
}

export default Skills;
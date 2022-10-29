import { Card, CardMedia, CardContent, CardActions, Typography, Grid, Chip,Button } from '@mui/material';
import { SiFlutter,SiFirebase,SiSqlite, SiExpress, SiNodedotjs, SiMysql } from "react-icons/si";

const projectData = [
    {
        "title":"Juro App",
        "description":"A Hybrid Platform Flutter App to get latest news, having community chats, saving and taking notes of the news, with dark mode feature.",
        "labels":[
            {
                "icon":<SiFlutter style={{color:"white"}}/>,
                "label":"Flutter"
            },
            {
                "icon":<SiFirebase style={{color:"white"}}/>,
                "label":"Firebase"
            },
            {
                "icon":<SiSqlite style={{color:"white"}}/>,
                "label":"SQFLite"
            },
            {
                "icon":null,
                "label":"Provider"
            },
            {
                "icon":null,
                "label":"Rest APIs"
            }
        ],
        "url":"https://github.com/iamsamuelhere/JuroApp"
    },
    {
        "title":"Campus Connect",
        "description":"A Fullstack Web App to to exchange products among peers. Has feature to get your rank amoung your classmates in the semester exam",
        "labels":[
            {
                "icon":<SiNodedotjs style={{color:"white"}}/>,
                "label":"NodeJS"
            },
            {
                "icon":<SiExpress style={{color:"white"}}/>,
                "label":"ExpressJS"
            },
            {
                "icon":<SiMysql style={{color:"white"}}/>,
                "label":"MySQL"
            },
            {
                "icon":null,
                "label":"EJS"
            },
            {
                "icon":null,
                "label":"Rest APIs"
            }
        ],
        "url":"https://github.com/iamsamuelhere/CampusProject"
    }
]

const Project = () => {
    return <>
        <h2 style={{ textAlign: "center" }}>Personal Projects</h2>
        <Grid container >
            
                {projectData.map(project=>{
                    return <Grid item sm={12} md={6} >
                    
                    <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {project.title}
                        </Typography>
                        {
                           project.labels.map(item=>{
                       return <Chip icon={item.icon} label={item.label} onClick={()=>{}} size="small" style={{backgroundColor:"#2196F3", color:"white", marginRight:"2px", marginBottom:"2px"}} />
                            })
                        }
                        <Typography variant="body2" color="text.secondary">
                            {project.description}
                        </Typography>
                        <a href={project.url} target="_blank" style={{textDecoration:"none", display:"flex", justifyContent:"center"}}>
                        <Button variant="contained" size="small">View project</Button>
                        </a>
                    </CardContent>
                </Card>
                </Grid>
                })}
                
        
           

        </Grid>

    </>
}

export default Project;
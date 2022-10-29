import Grid from '@mui/material/Grid';

import LeftFeed from "./LeftFeed";
import RightFeed from './RightFeed/RightFeed';
const Feed= ()=>{
    return <Grid container>
        <LeftFeed/>
        <RightFeed/>
    </Grid>
}


export default Feed;
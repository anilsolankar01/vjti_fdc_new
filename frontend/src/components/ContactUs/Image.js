import {Grid,Card,CardMedia} from '@mui/material'
import vbnikam from './vbnikam.png';

export default function Image(){

    
    return(<Grid item xs={3}>
        <Card raised={true} style={{height: '100%'}}>
        <CardMedia
        component="img"
        image={vbnikam}
      />
        </Card>
    </Grid>)
}
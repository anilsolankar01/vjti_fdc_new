import { Grid, Typography,CardMedia,Grow,Card,CardContent } from "@mui/material";


export default function Supporter(props){
    return(
        
                <Grid item xs={6}>
                    
                <Grow in={true} timeout={3000}>
                
                <Card raised = {true} sx={{m:1}} style={{height: '100%'}} >
                
                                <CardMedia
                        component="img"
                        height="70%"
                        alt="icon"
                        src={`data:image/png;base64,${props.supporter.image}`}
                    />
                
                <CardContent>
                    <Typography align='center' variant = "h6" color="text.secondary">
                        {props.supporter.name}
                    </Typography>   
                </CardContent>
                 </Card>
                </Grow>
                
            </Grid>
            
        
    )
}
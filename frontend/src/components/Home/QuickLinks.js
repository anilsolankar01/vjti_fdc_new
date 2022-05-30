import {Grid,Card,CardContent,Typography,List,ListItem,ListItemText} from '@mui/material'
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

export default function QuickLinks(){
    return (<Grid item xs={3}>
        <Card raised={true} style={{height: '100%'}}>
            <CardContent>
            <Typography
                
                variant="h5"
                component="h2"
                sx={{mb:2}}
                color="text.secondary"
            >
                <LinkOutlinedIcon fontSize='small'/>{" Quick Links"}
            </Typography>
            
            <List>
                <ListItem button divider>
                    <ListItemText primary="DBATU"/>
                </ListItem>
                
                <ListItem button divider>
                    <ListItemText primary="MHRD"/>
                </ListItem>
                
                <ListItem button divider>
                    <ListItemText primary="DST"/>
                </ListItem>
                
                <ListItem button divider>
                    <ListItemText primary="DTE"/>
                </ListItem>
                
                <ListItem button>
                    <ListItemText primary="VJTI"/>
                </ListItem>
            </List>
            </CardContent>
        </Card>
    </Grid>)
}
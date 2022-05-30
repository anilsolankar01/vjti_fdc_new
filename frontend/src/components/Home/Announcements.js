import {Grid,Card,CardContent,Typography,List} from '@mui/material'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useEffect,useState } from 'react';
import Announcement from './Announcement.js'
import axios from 'axios';

export default function Announcements(){

    const [announcements,setAnnouncements] = useState([]);

    async function fetchData(){
        const res = await axios.get('http://localhost:8000/announcements');
        setAnnouncements(await res.data);
    }

    useEffect(() => {
        fetchData()
    },[])

    return(<Grid item xs={3}>
        <Card raised={true} style={{height: '50vh',overflow:'auto'}}>
            <CardContent>
            <Typography
                
                variant="h5"
                component="h2"
                sx={{mb:2}}
                color="text.secondary"
            >
                <NotificationsNoneOutlinedIcon fontSize='small'/>{" Announcements"}
            </Typography>
            
            <List>
                {announcements.map((announcement) => 
                    <Announcement key = {announcement.id} announcement = {announcement} />
                )}
                                
            </List>
            </CardContent>
        </Card>
    </Grid>)
}
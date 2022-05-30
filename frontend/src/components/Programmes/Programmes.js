import {Typography,Card,CardContent,Container,List,ListItem,ListItemText} from '@mui/material'
import {useEffect,useState} from 'react'
import axios from 'axios'

export default function Programmes(){

/*     const items = [
        'FDP 1:GIS, Geo-Spatial Technologies & ICT',
        'FDP 2:Artificial Intelligence and Machile Learning',
        'FDP 3:Spatial & Graph Databases: Data Modelling, Designing & Query Processing',
        'Workshop1:Pedagogies and Credit based Evaluation'
    ] */

    const [items,setItems] = useState([]);

    async function fetchData(){
        const res = await axios.get(`http://localhost:8000/programmes`);
        setItems(await res.data)
    }

    useEffect(()=>{
        fetchData()
    },[])

    return(
    
    <Container maxWidth='lg'>
        <Card raised={true} style={{height: '100%'}}>
            <CardContent>
            <Typography
                
                variant="h5"
                component="h2"
                sx={{mb:2}}
                color="text.secondary"
            >
                {" Programmes"}
            </Typography>
            
            <List>

                {items.map((item) => (
                    <ListItem key={item._id}>
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
             
                
            </List>
            </CardContent>
        </Card>
        <br/>
    </Container>
    
    )
}
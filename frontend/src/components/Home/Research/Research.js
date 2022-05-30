import ResearchItem from './ResearchItem';
import {Grid,Divider,Typography,Button} from '@mui/material';
import {Link} from 'react-router-dom';
import { LazyLoad } from 'react-observer-api';
import {useState,useEffect} from 'react'
import axios from 'axios'

export default function Research(){

    const [researchItems,setResearchItems] = useState([]);

    async function fetchData(){
        const res = await axios.get(`http://localhost:8000/research_projects`);
        setResearchItems(await res.data.slice(0,10))
    }

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <Grid item xs={12}>
        {/* <Card raised={true} style={{height: '100%'}}> */}
             <Typography     
                style={{padding:'10px'}}  
                variant="h4"
                component="h4"
                sx={{mb:2}}
                color="text.secondary"
                align='center'
            >
                Research Achievements
                </Typography>
                <Divider light={true} variant="middle"/>
                <LazyLoad>
            <Grid container spacing={4} columns={15}>
                {
                    researchItems.map((researchItem,i) =>
                    
                        <ResearchItem key={i} item={researchItem}/>
                        
                    )
                }
            </Grid>
            <Link to='./research'>
            <Button style={{display:'flex',margin:'auto'}} size='large'>View More</Button>
            </Link>
            </LazyLoad>
        
        {/* </Card> */}
    </Grid>
    )
}
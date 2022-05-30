import ResearchItem from './ResearchItem';
import {Grid,Divider,Typography} from '@mui/material';
import {useState,useEffect} from 'react'
import axios from 'axios'

export default function Research(){

    const [researchItems,setResearchItems] = useState([]);

    async function fetchData(){
        const res = await axios.get(`http://localhost:8000/research_projects`);
        setResearchItems(await res.data)
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
                Research
                </Typography>
                <Divider light={true} variant="middle"/>
                
            <Grid container spacing={4} columns={15}>
                {
                    researchItems.map((researchItem,i) =>
                    
                        <ResearchItem key={i} item={researchItem}/>
                        
                    )
                }
            </Grid>
          
        
        {/* </Card> */}
    </Grid>
    )
}
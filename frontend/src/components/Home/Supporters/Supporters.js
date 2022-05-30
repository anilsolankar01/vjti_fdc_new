import Supporter from './Supporter';
import {Grid,Divider,Typography} from '@mui/material';
import { LazyLoad } from 'react-observer-api';
import {useEffect,useState} from 'react'
import axios from 'axios'

export default function Supporters(){

    const [supporters,setSupporters] = useState([])

    async function fetchData(){
        const res = await axios.get('http://localhost:8000/supporters')
        setSupporters(await res.data)
    }

    useEffect(()=>fetchData(),[])

    return(
        <>
        {/* <Card raised={true} style={{height: '100%'}}> */}
             <Typography     
                style={{padding:'10px'}}  
                variant="h4"
                component="h4"
                sx={{mb:2}}
                color="text.secondary"
                align='center'
            >
                Our Supporters
                </Typography>
                <Divider light={true} variant="middle"/>
                <LazyLoad>
            <Grid container spacing={4}>
                {
                    supporters.map((supporter) =>
                    
                        <Supporter key={supporter._id} supporter={supporter}/>
                        
                    )
                }
            </Grid>
            </LazyLoad>
        {/* </Card> */}
        </>
    )
}
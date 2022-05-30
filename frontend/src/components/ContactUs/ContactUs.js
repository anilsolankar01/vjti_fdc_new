import { Grid,Container } from '@mui/material';
import AboutVJTI from './AboutVJTI';
import Image from './Image'

export default function ContactUs(){
    return(
        <>
    <Container maxWidth='lg'>
            <Grid container spacing={4}>
                <Image/>
            <AboutVJTI/>                           
            </Grid>
        </Container>
        <br/>
    </>
    )
}
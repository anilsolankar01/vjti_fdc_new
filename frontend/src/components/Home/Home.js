import Carrousel from './Carousel';
import './Home.css'
import { Grid,Container } from '@mui/material';
import Announcements from './Announcements';
import AboutFDC from './AboutFDC';
import Research from './Research/Research';
import Supporters from './Supporters/Supporters';

export default function Home(){
    return (
        <>

        
        <Carrousel/>
        
        <br/>
        <Container maxWidth='lg'>
            <Grid container spacing={4}>
{/*                 <QuickLinks/>
 */}                <AboutFDC/>
                <Announcements/>   
                            
            </Grid>
            <br/>
            <br/>
            <Research/>
            <br/>
            <br/>
            <Supporters/>
        </Container>
        <br/>

        </>
    )
}
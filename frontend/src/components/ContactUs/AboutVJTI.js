import {Grid,Card,CardContent,Typography} from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function AboutVJTI(){
    return (<Grid item xs={9}>
        <Card raised={true} style={{height: '100%'}}>
            <CardContent>
            <Typography
                
                variant="h5"
                component="h2"
                sx={{mb:2}}
                color="text.secondary"
            >
                
                <InfoOutlinedIcon fontSize='small'/>{" About VJTI"}
            </Typography>
            
            <Typography  variant="body1" gutterBottom>
            Established in 1887 as Victoria Jubilee Technical Institute, VJTI Mumbai is one of the pioneer in country’s engineering education, research and training. In 1913, declared as Central Technological Institute of Bombay province and in 1997; renamed as Veermata Jijabai Technological Institute, VJTI Mumbai is Maharashtra’s state funded autonomous institute located in Matunga(E), South Mumbai. Post independence (during 1955-1970), VJTI has played a pivotal role in setting up IITs and RECs of India. Currently VJTI has 9 UG programs (B Tech), 17 PG programs (M Tech) and PhD programs in 7 disciplines (with approx.4400 students including Diploma and MCA programs). VJTI Mumbai is committed to high quality self-sustainable engineering education ecosystem and innovating Technology for Society.      </Typography>
            </CardContent>
        </Card>
    </Grid>)
}
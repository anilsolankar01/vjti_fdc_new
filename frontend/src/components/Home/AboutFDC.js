import {Grid,Card,CardContent,Typography} from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function AboutFDC(){
    return (<Grid item xs={9}>
        <Card raised={true} style={{height: '50vh'}}>
            <CardContent>
            <Typography
                
                variant="h5"
                component="h2"
                sx={{mb:2}}
                color="text.secondary"
            >
                
                <InfoOutlinedIcon fontSize='small'/>{" About FDCs"}
            </Typography>
            
            <Typography  variant="body1" gutterBottom>
            VJTI Mumbai has been approved as a Faculty Development Centre (FDC) jointly with Dr Babasaheb Ambedkar Technological University Lonere under the scheme of Pandit Madan Mohan Malaviya National Mission on Teachers and Teaching (PMMMNMTT), Department of Higher Education, MHRD, in Aug 2018. MHRD has sanctioned a grant to establish Faculty Development Centre for building expertise in GIS, AI and Product Design domains, through faculty development programs, trainings, workshops, orientation programs, industry connects, and collaborative activities with industries and institutions. The program activities under FDC are carefully designed to provide insights on empowering the teachers with required skills and competencies to teach in the GIS, AI and Product design verticals. A hands-on course to introduce elements of geospatial technologies, GIS and their capabilities with state-of-art case study based approach to develop an understanding and capacity building of geospatial tools and technologies. Located in South Mumbai, VJTI is an autonomous institution of repute, owned by Maharashtra State Government
      </Typography>
            </CardContent>
        </Card>
    </Grid>)
}
import { Modal,Grid,Box, Typography,CardActionArea,Grow,Card,CardContent } from "@mui/material";
import {useState} from 'react';
import paper from './paper.png';
import video from './video.png';
import ReactPlayer from 'react-player';



export default function ResearchItem(props){
    const type = props.item.type;
    const title = props.item.description;
    const url = props.item.url;
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        if(type !== 'Case Study Based Mini Project'){
            window.open(url)
        }
        else{
            handleOpen()
        }
    }
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
        
                <Grid item xs={3}>
                <Grow in={true} timeout={2500}>
                <Card sx={{boxShadow:0,m:1}} >
                <CardActionArea onClick={handleClick}>
    
                <img style={{display: 'block',margin:'auto',width:'70%'}} 
                src = {type === 'Case Study Based Mini Project'?video:paper} alt="icon"/>
                
                 <CardContent>
                    <Typography align='center' variant = "h6" color="text.secondary">
                        {title.length > 53? title.substring(0,53)+'...' :title}
                    </Typography>   
                </CardContent>
                </CardActionArea>
                    </Card>
                </Grow>
            </Grid>
        
        <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
         {/*  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <ReactPlayer style={{marginTop:'10px'}} controls playing={true} url ={url} />
        </Box>
      </Modal> 
        </>
    )
}
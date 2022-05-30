import Carousel from 'react-material-ui-carousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Container } from '@mui/material';

export default function PhotoGallery() {
  var items = [
    {
        url:'https://www.vjti-fdc.in/images/gallery-1.JPG'
    },
    {
        url:'https://www.vjti-fdc.in/images/gallery-2.JPG'
    },
    {
        url:'https://www.vjti-fdc.in/images/gallery-3.JPG'
    },
    {
        url:'https://www.vjti-fdc.in/images/gallery-4.JPG'
    },
    {
        url:'https://www.vjti-fdc.in/images/gallery-5.JPG'
    },
    {
        url:'https://www.vjti-fdc.in/images/gallery-6.JPG'
    },
    {
        url:'https://www.vjti-fdc.in/images/gallery-7.JPG'
    },
    {
        url:'https://www.vjti-fdc.in/images/gallery-8.JPG'
    },
    {
        url:'https://www.vjti-fdc.in/images/gallery-9.JPG'
    },
    {
        url:'https://www.vjti-fdc.in/images/gallery-10.JPG'
    },
    {
        url:'https://www.vjti-fdc.in/images/gallery-11.JPG'
    },
    {
        url:'https://www.vjti-fdc.in/images/gallery-12.JPG'
    },
    {
        url:'https://www.vjti-fdc.in/images/gallery-13.JPG'
    },
]
  return(
      <Container md>
    <Carousel NextIcon={<ArrowForwardIosIcon/>}
    PrevIcon={<ArrowBackIosIcon/>}>
      {
                items.map( (item, i) => <Item key={i} item={item} /> )
      }
    </Carousel>
    </Container>
  )
} 
function Item(props)
{
    return (
      <div style={{display:'flex',justifyContent:'center'}}>
      <img style={{maxHeight:'85vh',borderRadius:'5px'}} src = {props.item.url} alt="caroussel images"/>
      </div>
    )
}

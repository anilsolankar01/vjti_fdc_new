import Carousel from 'react-material-ui-carousel';
import {useState,useEffect} from 'react'
import axios from 'axios'

export default function Carrousel() {

  const [items,setItems] = useState([])

  async function fetchData() {
    const res = await axios.get('http://localhost:8000/images')
    setItems(await res.data)
  }

  useEffect(()=>{
    fetchData()
  },[])

/*   var items = [
    {
      url:'https://www.vjti-fdc.in/images/facultyPM.jpeg'
    },
    {
      url:'https://www.vjti-fdc.in/images/fPM.jpeg'
    },
    {
      url:'https://www.vjti-fdc.in/images/mhrd.jpeg'
    }
    
] */
  return(
    <Carousel>
      {
                items.map( (item, i) => <Item key={i} item={item} /> )
      }
    </Carousel>
  )
} 
function Item(props)
{
    return (
      <div style={{display:'flex',justifyContent:'center'}}>
      <img style={{ paddingTop:'10px',minWidth:'100vw',borderRadius:'5px'}} src = {`data:image/png;base64,${props.item.image}`} alt="caroussel images"/>
      </div>
    )
}

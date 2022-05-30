import {ListItem,ListItemText} from '@mui/material'
import axios from 'axios'


export default function Announcement({announcement}){
    

    return(
        <>
        <ListItem key={announcement.id} button onClick={() => {
            axios.get(`http://localhost:8000/announcements_pdf/${announcement.id}`)
            .then((res) => {
                let pdfWindow = window.open("")
                pdfWindow.document.write(
                    "<iframe width='100%' height='100%' src='data:application/pdf;base64, " +
                    encodeURI(res.data[0].file) + "'></iframe>"
                )
            })        
        }}>
        <ListItemText primary={announcement.text}/>
    </ListItem>
    </>
    )
}
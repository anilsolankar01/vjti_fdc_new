import {Container,Typography,Card,CardContent,Table,TableHead,TableRow,TableCell,TableBody} from '@mui/material';
import {useState,useEffect} from 'react'
import axios from 'axios'

export default function People(){

/*     const rows = [
        {
            name:'Dr. V.B.Nikam',	
            affiliation:'HOD-CE/IT,VJTI'
        },
        {
            name:'Prof. Sumit Sen',	
            affiliation:'IITB'
        },
        {
            name:'Prof. Milind Sohoni',	
            affiliation:'IITB'
        },
        {
            name:'Dr. Rathi',	
            affiliation:'Rolta Industries'
        },
        {
            name:'Prof. Sowmiya Raksha',	
            affiliation:'Ass.Prof. - IT,VJTI'
        },
        {
            name:'Prof. Nikhil Khandare',	
            affiliation:'Ass.Prof. - MCA,VJTI'
        },
        {
            name:'Prof. Gauri Nalawade',	
            affiliation:'Ass.Prof. - CE/IT,VJTI'
        },
        {
            name:'Prof. Suchita Dange',	
            affiliation:'Ass.Prof. - CE/IT,VJTI'
        },
        {
            name:'Prof. Priyanka Bubna',	
            affiliation:'Ass.Prof. - CE/IT,VJTI'
        },
        {
            name:'Ms. Manisha Galphade',	
            affiliation:'Research Scholar CE,VJTI'
        },
        {
            name:'Ms. Manjusha Gaikwad',	
            affiliation:'Research Scholar CE,VJTI'
        },
      ]; */
    
    const [people,setPeople] = useState([]);

    async function fetchData(){
      const res = await axios.get(`http://localhost:8000/people`);
      setPeople(await res.data)
    }

    useEffect(()=>{
      fetchData();
    },[])

    return(
        <Container maxWidth='md'>
            <Card raised>
                <CardContent>
            <Typography
                
                variant="h5"
                component="h2"
                sx={{mb:2}}
                color="text.secondary"
            >
                {" People"}
            </Typography>
            
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell >Name</TableCell>
            <TableCell align="right">Affiliation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((person) => (
            <TableRow hover
              key={person._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {person.name}
              </TableCell>
              <TableCell align="right">{person.position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </CardContent>
            </Card>
            <br/>
        </Container>
    )
}
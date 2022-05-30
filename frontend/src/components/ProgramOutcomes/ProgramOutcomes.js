import {Container,Typography,Card,CardContent,Table,TableHead,TableRow,TableCell,TableBody} from '@mui/material';

export default function ProgramOutcomes(){

    const rows = [
        {
            name:'Spatial & Graph Databases: Data Modelling, Designing & Query Processing',
            outcomes:'Multivariate',
            summary:'Classification'
        }
      ];

    return(
        <Container maxWidth='lg'>
            <Card raised>
                <CardContent>
            <Typography
                
                variant="h5"
                component="h2"
                sx={{mb:2}}
                color="text.secondary"
            >
                {" Program Outcomes"}
            </Typography>
            
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Program Name</TableCell>
            <TableCell align="right">Program Outcomes</TableCell>
            <TableCell align="right">Summary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
            hover
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.outcomes}</TableCell>
              <TableCell align="right">{row.summary}</TableCell>
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
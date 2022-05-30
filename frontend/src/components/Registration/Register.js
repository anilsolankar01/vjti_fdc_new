import { Card,Snackbar, Grid,Typography,CardContent, TextField,Container,FormControl,InputLabel, Select, MenuItem, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import {makeStyles} from '@mui/styles';
import {useState} from 'react';
import 'date-fns'
//import DateFnsUtils from '@date-io/date-fns'
//import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers'
import axios from 'axios'


export default function Register(){

    const Input = styled('input')({
  display: 'none',
});

    const [open,setOpen] = useState(false)
    const [submitOpen,setSubmitOpen] = useState(false)
    const formdata = new FormData()
/* const fileToBase64 = (file, cb) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      cb(null, reader.result)
    }
    reader.onerror = function (error) {
      cb(error, null)
    }
  } */

const onUploadFileChange = ({ target }) => {
    if (target.files < 1 || !target.validity.valid) {
      return
    }
    //const formdata = new FormData();
    formdata.append('image', target.files[0])
    /* axios.post(`http://localhost:8000/upload`, formdata, {
          headers:{
            "Content-Type": "multipart/form-data",
          }
      }
      )
      .then(res => {
        console.log(res)
        setOpen(true)
      })
    fileToBase64(target.files[0], (err, result) => {
      if (result) {
        setValues({
            ...values,
            ['permissionLetter']:target.files[0].name,
            //['file']:data
        })
    
//setFileName(target.files[0])
      }
    }) */
  }

    const useStyle = makeStyles(theme =>({
        root:{
            '& .MuiFormControl-root':{
                width:'75%',
                margin:'auto',
                display:'flex',
                marginTop:'20px',
                marginBottom:'20px'
            }
        }
    }))

    const initialValues = {
        firstName:'',
        middleName:'',
        lastName:'',
        designation:'',
        department:'',
        gender:'',
        state:'',
        instituteName:'',
        email:'',
        address:'',
        mobileNo:'',
        altMobileNo:'',
        accomodation:'',
        permissionLetterPath:''
/*         arrivalDate:new Date(),
        arrivalMode:'',
        depDate:new Date(),
        depMode:'', */
    }

    const designations = [
        {
            id:0,
            name:'Principal'
        },
        {
            id:1,
            name:'HOD'
        },
        {
            id:2,
            name:'Professor'
        },
        {
            id:3,
            name:'Research Scholar'
        },
        {
            id:4,
            name:'Student'
        },
        {
            id:5,
            name:'Associate Professor'
        },
        {
            id:6,
            name:'Assistant Professor'
        }
    ]

    const departments = [
        {
            id:0,
            name:'Computer Engineering'
        },
        {
            id:1,
            name:'Electronics & Telecommunication'
        },
        {
            id:2,
            name:'Information Technology'
        },
        {
            id:3,
            name:'Civil & Environment'
        },
        {
            id:4,
            name:'Structural Engineering'
        },
        {
            id:5,
            name:'Electrical Engineering'
        },
        {
            id:6,
            name:'Mechanical Engineering'
        },
        {
            id:7,
            name:'Production Engineering'
        },
        {
            id:8,
            name:'Textile Manufacturing'
        },
        {
            id:9,
            name:'Technical & Applied Chemistry'
        },
        {
            id:10,
            name:'Mathematics'
        },
        {
            id:11,
            name:'Physics'
        },
        {
            id:12,
            name:'Humanities & Management'
        },
        {
            id:13,
            name:'MCA'
        },
        {
            id:14,
            name:'Others'
        }
    ]

    const states = [ "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"]

    const [values,setValues] = useState(initialValues);
    const classes = useStyle();

    const handleInputChange = e => {
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('here')
        axios.post(`http://localhost:8000/upload`, formdata, {
          headers:{
            "Content-Type": "multipart/form-data",
          }
      }
      )
      .then(res => {
        console.log(res)
        const path = res.data.path
        console.log(path)
        setOpen(true)
        
        console.log(values)
        let newUser = values
        newUser.permissionLetterPath = path
        axios.post('http://localhost:8000/register',newUser,{
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=>{
            console.log(res)
            setSubmitOpen(true)
        }).catch((err)=>{
            console.log(err)
        })
      })
      

      /* })
        const newUser = values;
        console.log(newUser)
        const config = {
            headers:{
                'Content-Type':'application.json'
            }
        }
        
        axios.post('http://localhost:8000/upload',newUser)
        .then((res)=>{

                console.log('SUCCESS')
                console.log(res)
                setSubmitOpen(true)
            
        }).catch((err)=>{
            console.log(`Error: `+err)
        }) */
    }

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
                {"Registration"}
            </Typography>
        <form className={classes.root}>
            
            <Grid container>
                <Grid item xs={4}>
                    <TextField 
                    variant='outlined'
                    label='First name'
                    name='firstName'
                    value={values.firstName}
                    onChange={handleInputChange}
                    />
                    <FormControl
                        variant='outlined'
                    >
                    <InputLabel>Designation</InputLabel>
                    <Select
                        name='designation'
                        value={values.designation}
                        label='Designation'
                        onChange={handleInputChange}
                    >
                        <MenuItem value="">Select Designation</MenuItem>
                        {
                            designations.map((designation)=>(
                                <MenuItem key={designation.id} value={designation.name}>{designation.name}</MenuItem>
                            ))
                        }
                    </Select>
                        </FormControl>
                        <FormControl
                        variant='outlined'
                    >
                    <InputLabel>State</InputLabel>
                    <Select
                        name='state'
                        value={values.state}
                        label='State'
                        onChange={handleInputChange}
                    >
                        <MenuItem value="">Select State</MenuItem>
                        {
                            states.map((state,i)=>(
                                <MenuItem key={i} value={state}>{state}</MenuItem>
                            ))
                        }
                    </Select>
                        </FormControl>
                    <TextField 
                    variant='outlined'
                    label='Address'
                    name='address'
                    value={values.address}
                    onChange={handleInputChange}
                    />
                    <FormControl
                        variant='outlined'
                    >
                    <InputLabel>Accomodation</InputLabel>
                    <Select
                        name='accomodation'
                        value={values.accomodation}
                        label='Accomodation'
                        onChange={handleInputChange}
                    >
                        <MenuItem value="">Select Accomodation</MenuItem>
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                    </Select>
                        </FormControl>
                </Grid>
                <Grid item xs={4}>
                <TextField 
                    variant='outlined'
                    label='Middle Name'
                    name='middleName'
                    value={values.middleName}
                    onChange={handleInputChange}
                    />
                    <FormControl
                        variant='outlined'
                    >
                    <InputLabel>Department</InputLabel>
                    <Select
                        name='department'
                        value={values.department}
                        label='Department'
                        onChange={handleInputChange}
                    >
                        <MenuItem value="">Select Department</MenuItem>
                        {
                            departments.map((department)=>(
                                <MenuItem key={department.id} value={department.name}>{department.name}</MenuItem>
                            ))
                        }
                    </Select>
                        </FormControl>
                    <TextField 
                    variant='outlined'
                    label='Institute Name'
                    name='instituteName'
                    value={values.instituteName}
                    onChange={handleInputChange}
                    />
                    <TextField 
                    variant='outlined'
                    label='Mobile No.'
                    name='mobileNo'
                    value={values.mobileNo}
                    onChange={handleInputChange}
                    />
                    {/* <MuiPickersUtilsProvider utils = {DateFnsUtils}>
                            <KeyboardDatePicker
                                variant='outlined'
                                format='MM/dd/yyy'
                                label='Arrival Date'
                                value={values.arrivalDate}
                                onChange={handleInputChange}
                            />
                        </MuiPickersUtilsProvider> */}
{/*                     <TextField 
                    variant='outlined'
                    label='Arrival Date'
                    name='arrivalDate'
                    value={values.arrivalDate}
                    onChange={handleInputChange}
                    /> */}
                    <label htmlFor="contained-button-file">
                    
                    <Input id='contained-button-file' type="file" onChange={onUploadFileChange} name="filetobase64" accept="application/pdf" />
                    <Button style={{display:'flex',width:'75%',height:'55px',margin:'auto'}} variant='contained' component='span'>
                        Upload Permission Letter
                    </Button>
                    </label>
                </Grid>
                <Grid item xs={4}>
                <TextField 
                    variant='outlined'
                    label='Last Name'
                    name='lastName'
                    value={values.lastName}
                    onChange={handleInputChange}
                    />
                    <FormControl
                        variant='outlined'
                    >
                    <InputLabel>Gender</InputLabel>
                    <Select
                        name='gender'
                        value={values.gender}
                        label='Gender'
                        onChange={handleInputChange}
                    >
                        <MenuItem value="">Select Gender</MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                    </Select>
                        </FormControl>
                    <TextField 
                    variant='outlined'
                    label='Email'
                    name='email'
                    value={values.email}
                    onChange={handleInputChange}
                    />
                    <TextField 
                    variant='outlined'
                    label='Alternate No.'
                    name='altMobileNo'
                    value={values.altMobileNo}
                    onChange={handleInputChange}
                    />
                    {/* <TextField 
                    variant='outlined'
                    label='Departure Date'
                    name='depDate'
                    value={values.depDate}
                    onChange={handleInputChange}
                    /> */}
                    <Button onClick={onSubmit} color='success' style={{display:'flex',width:'75%',height:'55px',margin:'auto'}} variant='contained' component='span'>
                        Submit
                    </Button>
                </Grid>
                
            </Grid>
        </form>
        </CardContent>
        </Card>
        <Snackbar open={open} autoHideDuration={6000} onClose={()=>{setOpen(false)}}>
        <Alert onClose={()=>{setOpen(false)}} severity="success" sx={{ width: '100%' }}>
          File Uploaded!
        </Alert>
      </Snackbar>
      <Snackbar open={submitOpen} autoHideDuration={6000} onClose={()=>{setSubmitOpen(false)}}>
        <Alert onClose={()=>{setSubmitOpen(false)}} severity="success" sx={{ width: '100%' }}>
          Registration Successful!
        </Alert>
      </Snackbar>
      <br/>
        </Container>
    )
}
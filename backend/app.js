const express = require("express");
const { MongoClient } = require('mongodb');
const fs = require("fs");
const cors = require('cors');
const User = require('./models/User');
const bodyParser = require("body-parser");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const uploader = require('./upload')
//const multer = require('multer');
//const uploader = multer({ dest: "public/files" });


const app = express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
//app.set('view engine', 'ejs');
//app.use('*/css', express.static('public/css'));

const JWT_SECRET = 'lkjfirjiorhtojtio5hohowhrohru4iy8y5t5jksdnfiuerh84u39p304580udfjoirht94u0'


const url = "mongodb+srv://admin:sRscRmyT3AQ2by2@vjti-fdc.rg33c.mongodb.net/VJTI-FDC?retryWrites=true&w=majority";
//have to make this disappear into environment 

mongoose.connect(url, {
})

app.get("/", function (req, res) {
  res.send('Hello World!')
});

//done
app.get('/people', (req, res) => 
{

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("People");
    dbo.collection("Names").find({}).toArray(function(err, result) {
      if (err) throw err;
      // console.log(result)
      res.json(result);
      db.close();
    });
  });
});

app.get('/supporters', (req, res) => 
{
 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Supporters");
    dbo.collection("Names").find({}).toArray(function(err, result) {
      if (err) throw err;
      // console.log(result)
      res.json(result);
      db.close();
    });
  });
});










app.get('/announcements', (req, res) => {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Announcements");
    dbo.collection("Announcement").find({}).toArray(function(err, result) {
      if (err) throw err;
      // console.log(result)
      res.json(result);
      db.close();
    });
  });  
  



});
  


app.get('/announcements_pdf/:id', (req, res) => {
 
  var ida= parseInt(req.params.id);



  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Announcements");
    var query = { id: ida};
  
    dbo.collection("Pdfs").find(query).toArray(function(err, result) {
      if (err) throw err;
      res.json(result);
      db.close();
    });
  });

});

app.get('/programmes', (req, res) => 
{


  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Programes");
    dbo.collection("Programes").find({}).toArray(function(err, result) {
      if (err) throw err;
      // console.log(result)
      res.json(result);
      db.close();
    });
  });
});

app.get('/images', (req, res) => 
{
  

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Images");
    dbo.collection("Images").find({}).toArray(function(err, result) {
      if (err) throw err;
      // console.log(result)
      res.json(result);
      db.close();
    });
  });
});






// app.get('/research_projects', (req, res) => {
//     res.send('Hello World!')
// });


app.get('/research_projects', (req, res) => {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Research");
    dbo.collection("Research").find({}).toArray(function(err, result) {
      if (err) throw err;
      // console.log(result)
      res.json(result);
      db.close();
    });
  });  
  



});






app.get('/video/:name', (req, res) => {
  res.sendFile('videos/'+ req.params.name , { root: __dirname });
});



app.post('/register',  async(req, res) => {
  const { email, //password: plainTextPassword,     
    firstName,
    middleName,
    lastName,
    designation,
    department,
    gender,
    state,
    instituteName,
    address,
    mobileNo,
    altMobileNo,
    accomodation,
    permissionLetterPath
  } = req.body

  console.log(req.body)

	if (!email || typeof email !== 'string') {
		return res.json({ status: 'error', error: 'Invalid email' })
	}

	/* if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (plainTextPassword.length < 5) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
	}

	const password = await bcrypt.hash(plainTextPassword, 10)
 */
	try {
		const response = await User.create({
			email,
			//password,
      firstName,
      middleName,
      lastName,
      designation,
      department,
      gender,
      state,
      instituteName,
      address,
      mobileNo,
      altMobileNo,
      accomodation,
      permissionLetterPath
		})
		console.log('User created successfully: ', response)
	} catch (error) {
		if (error.code === 11000) {
			// duplicate key
			return res.json({ status: 'error', error: 'email already in use' })
		}
		throw error
	}

	res.json({ status: 'ok' })
});


app.post('/login', async (req, res) => {
	const { email, password } = req.body
	const user = await User.findOne({ email }).lean()

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid email/password' })
	}

	if (await bcrypt.compare(password, user.password)) {
		// the email, password combination is successful

		const token = jwt.sign(
			{
				id: user._id,
				email: user.email
			},
			JWT_SECRET
		)

		return res.json({ status: 'ok', data: token })
	}

	res.json({ status: 'error', error: 'Invalid email/password' })
})

app.post('/upload',uploader.single('image'), (req, res, next) => {
  //console.log(req.body)
  //console.log(req)
  res.json({
    path:req.file.path
  })
  /* let uploadFile = req.file
  uploadFile.mv(
    `${__dirname}/public/files/test`,
    function (err) {
      if (err) {
        return res.status(500).send(err)
      }
      res.json({
        file: `public/test`,
      })
    },
  ) */
})


app.listen(8000, function() {
    console.log("Server started on port 8000.");
  });




  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("People");
  //   var myobj = [
  //     {name:"Dr. V.B.Nikam", position: "HOD-CE/IT, VJTI"},
  //     {name:"Prof. Sumit Sen",position: "IITB"},
  //     {name:"Prof. Milind Sohoni",position:	"IITB"},
  //     {name:"Dr. Rathi",position:	"Rolta Industries"},
  //     {name:"Prof. Sowmiya Raksha",position:	"Ass.Prof. - IT, VJTI"},
  //     {name:"Prof. Nikhil Khandare",position:	"Ass.Prof. - MCA, VJTI"},
  //     {name:"Prof. Gauri Nalawade",position:	"Ass.Prof. - CE/IT, VJTI"},
  //     {name:"Prof. Suchita Dange",position:	"Ass.Prof. - CE/IT, VJTI"},
  //     {name:"Prof. Priyanka Bubna",position:	"Ass.Prof. - CE/IT, VJTI"},
  //     {name:"Ms. Manisha Galphade",position:	"Research Scholar CE, VJTI"},
  //     {name:"Ms. Manjusha Gaikwad",	position:"Research Scholar CE, VJTI" }

  //   ];
  //   dbo.collection("Names").insertMany(myobj, function(err, res) {
  //     if (err) throw err;
  //     console.log("Number of documents inserted: " + res.insertedCount);
  //     db.close();
  //   });
  // });


// app.get('/tp', (req, res) => {


//   MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Research");
//   var myobj = [
//     {
//       description:"QGIS Installation, Administration and Experimentation", 
//       type: "Academic Materiall",
//       url: "https://vjti-fdc.in/data/QGISmanual.pdf"
//     },
//     {
//       description:"Experimental survey of geospatial big data platforms", 
//       type: "Research Paper",
//       url: "https://ieeexplore.ieee.org/document/8634070"
//     },
//     {
//       description:"Machine Learning on High Performance Computing for Urban Greenspace Change Detection: Satellite Image Data Fusion Approach", 
//       type: "Research Paper",
//       url: "https://www.tandfonline.com/doi/abs/10.1080/19479832.2020.1749142?journalCode=tidf20"
//     },
    
//     {
//       description:"Deep Learning Techniques for Geospatial Data Analysis", 
//       type: "Book Chapter",
//       url: "https://link.springer.com/chapter/10.1007%2F978-3-030-49724-8_3"
//     },
//     {
//       description:"High-Performance Computing: A Deep Learning Perspective", 
//       type: "Book Chapter",
//       url: "https://link.springer.com/chapter/10.1007/978-3-030-60265-9_15"
//     },
//     {
//       description:"Understanding Deep Learning: Case Study Based Approach", 
//       type: "Book Chapter",
//       url: "https://link.springer.com/chapter/10.1007%2F978-3-030-60265-9_9"
//     },
//     {
//       description:"Optimal Positioning of Small Cells for Coverage and Cost Efficient 5G Network Deployment: A Smart Simulated Annealing Approach", 
//       type: "Research Paper",
//       url: "https://ieeexplore.ieee.org/document/9221257"
//     },
//     {
//       description:"PARBAC: Priority-Attribute-Based RBAC Model for Azure IoT Cloud", 
//       type: "Research Paper",
//       url: "https://ieeexplore.ieee.org/document/8949518"
//     },
//     {
//       description:"Enhancing Privacy and Security in Medical Information with AES and DES", 
//       type: "Research Paper",
//       url: "https://link.springer.com/chapter/10.1007%2F978-981-15-0633-8_23"
//     },
//     ////////////////////////////
//     {
//       description:"Air Quality Management", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/Air%20Quality%20Mapping.mp4"
//     },
//     {
//       description:"Analysis Of Crops In India", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/AnalyisiOfCropsInIndia.mp4"
//     },
//     {
//       description:"Covid 19 Tracking and Availability", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/Covid_19_Tracking_and_availability.mp4"
//     },
//     {
//       description:"Covid-19 Vaccination Centers Of Ratnagiri District", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/Covid-19_Vaccination%20Centers%20Of%20Ratnagiri%20District.mp4"
//     },
//     {
//       description:"Doorstep Services", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/Doorstep%20Services.mp4"
//     },
//     {
//       description:"Deployment Video Tracking Agriculture Using Qgis", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/Deployment%20Video%20Tracking%20Agriculture%20Using%20Qgis.mp4"
//     },
//     {
//       description:"Educational Institution Search Web App", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/Educational%20Institution%20Search%20Web%20App.mp4"
//     },
//     {
//       description:"Hospital Search", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/Hospital%20Search.mp4"
//     },
//     {
//       description:"Live Tracking Of Airplanes", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/Live%20Tracking%20Of%20Airplanes.mp4"
//     },
//     {
//       description:"Parking Helper", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/Parking%20Helper.mp4"
//     },
//     {
//       description:"Plasma donator and receiver tracking", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/Plasma%20donator%20and%20receiver%20tracking.mp4"
//     },
//     {
//       description:"Plotting Weighted Mean Centroids", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/Plotting%20Weighted%20Mean%20Centroids.mp4"
//     },
//     {
//       description:"Real time Navigator", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/Real%20time%20Navigator.mp4"
//     },
//     {
//       description:"Rent a house", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/Rent%20a%20house.mp4"
//     },
//     {
//       description:"Restaurant Near Me", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/Restaurant%20Near%20Me.mp4"
//     },
//     {
//       description:"Smart Guide App", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/Smart%20Guide%20App.mp4"
//     },
//     {
//       description:"Tracking Slum Population of India", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/Tracking%20Slum%20Population%20of%20India.mp4"
//     },
//     {
//       description:"Tracking Of Starbucks Cafes In India", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/Tracking%20Of%20Starbucks%20Cafes%20In%20India.mp4"
//     },
//     {
//       description:"Tracking Restaurants In Bengaluru", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/Tracking%20Restaurants%20In%20Bengaluru.mp4"
//     },
//     {
//       description:"Tracking Veterinaries In Mumbai", 
//       type: "Case Study Based Mini Project",
//       url: "https://vjti-fdc.in/data/Tracking%20Veterinaries%20In%20Mumbai.mp4"
//     },
    
 

//   ];
//   dbo.collection("Research").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });


// res.send('Hello World!')

// });




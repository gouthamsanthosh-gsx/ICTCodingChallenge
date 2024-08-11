const mongoose = require("mongoose");
//Write missing code 
mongoose.connect(
	"mongodb+srv://gouthamsanthoshxyz:gouthamsanthosh@cluster0.fahnduf.mongodb.net/empapp?retryWrites=true&w=majority&appName=Cluster0"
	).then(()=>{
		console.log("Connected to db");
	}).catch((err)=>{
		console.log(err);
	})

const express = require('express');
const http=require('http');
const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var app=express();

app.use(function(req, res, next) {
console.log("middle ware called");

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
mongoose.connect("mongodb://admin:admin123@ds245971.mlab.com:45971/carspa")

let offerSchema=new mongoose.Schema({
  offer:String

});
let offerModel=mongoose.model("offer",offerSchema);//permission for accessing diff drives
let reviewSchema=new mongoose.Schema({
review :String

});
let reviewModel=mongoose.model("review",reviewSchema);//permission for accessing diff drives

let bookSchema=new mongoose.Schema({
        nameenter:String,
        phnoenter:String,
        enteremail:String,
        entercarreg:String,
        enteraddress:String,
        enterservice:String,
        enterid:String,
       mrngslotid:String,
       noonslotid:String
  });
let bookModel=mongoose.model("booking",bookSchema);

let appointSchema=new mongoose.Schema({
  appointname:String,
  appointphno:String,
  appointemail:String,
  appointadress:String,
  appointcarregno:String,
  appointservice:String
});
let appointModel=mongoose.model("appontments",appointSchema);


let partsSchema=new mongoose.Schema({
partsenter1:String,
partsenter2:String,
partsenter3:String,
partsenter4:String,
partsenter5:String,
partsenter6:String,
partsenter7:String,
partsenter8:String
});
let partsModel=mongoose.model("partsreplace",partsSchema);


let userSchema=new mongoose.Schema({
emailenter:String,
passwordenter:String,
confirmpasswordenter:String
});
let userModel=mongoose.model("userlogin",userSchema);



let storeSchema=new mongoose.Schema({
  emailenter1:String,
  passwordenter1:String,
  confirmpasswordenter1:String
});
let storeModel=mongoose.model("storelogin",storeSchema);


let accountSchema=new mongoose.Schema({
  emailenter2:String,
  passwordenter2:String,
  confirmpasswordenter2:String
});
let accountModel=mongoose.model("accountlogin",accountSchema);

let teamleaderSchema=new mongoose.Schema({
  emailenter3:String,
  passwordenter3:String,
  confirmpasswordenter3:String
});
let teamleaderModel=mongoose.model("teamleaderlogin",teamleaderSchema);



app.get("/",function(req,res){
  res.writeHead("200",{"Content-Type":"application/json"});
  fs.createReadStream(__dirname+"/model/data.json").pipe(res);
});


app.get("/account",function(req,res){
res.writeHead("200",{"Content-Type":"application/json"});
fs.createReadStream(__dirname+"/model/account.json").pipe(res);
});

app.get("/offer",function(req,res){
  offerModel.find({},function(err,data){
    //res.writeHead("200",{"Content-Type":"application/json"});
      res.json(data);
      console.log(data);
})
  //fs.createReadStream(__dirname+"/model/offer.json").pipe(res);
});
 app.post("/offeradd",function(req,res){
    offerModel(req.body).save();
});

app.get("/review",function(req,res){
  reviewModel.find({},function(err,data1){
    //res.writeHead("200",{"Content-Type":"application/json"});
      res.json(data1);
      console.log(data1);
})
  //fs.createReadStream(__dirname+"/model/offer.json").pipe(res);
});
 app.post("/reviewadd",function(req,res){
    reviewModel(req.body).save();
});

app.post("/book",function(req,res){
  bookModel.find({},function(err,data2){
    //res.writeHead("200",{"Content-Type":"application/json"});
      res.json(data2);
      console.log(data2);
      appointModel(req.body).save();
})
  //fs.createReadStream(__dirname+"/model/offer.json").pipe(res);
});



 app.post("/bookadd",function(req,res){
    bookModel(req.body).save();
});


app.get("/parts",function(req,res){
  partsModel.find({},function(err,data3){
    //res.writeHead("200",{"Content-Type":"application/json"});
      res.json(data3);
      console.log(data3);
})
  //fs.createReadStream(__dirname+"/model/offer.json").pipe(res);
});
 app.post("/partsadd",function(req,res){

    partsModel(req.body).save();
});

app.post("/userlogin",function(req,res){

  var email=req.body.emailenter;
  var password=req.body.passwordenter;

  userModel.findOne({"emailenter":email,"passwordenter":password},function(err,data4){
    console.log(email);
    if(err){
      console.log(err);
      return res.status(500).send();
      console.log('error');
    }
    if(!data4){
      console.log('fail');
      return res.status(404).send();
    }
    console.log('success');
    res.send({message:"success full login"});
    //res.writeHead("200",{"Content-Type":"application/json"});
    //  res.json(data4);
  //    console.log(data4);
})
  //fs.createReadStream(__dirname+"/model/offer.json").pipe(res);
});


 app.post("/userloginadd",function(req,res){

    userModel(req.body).save();
});


app.post("/storelogin",function(req,res){

  var email=req.body.emailenter1;
  var password=req.body.passwordenter1;

  storeModel.findOne({"emailenter1":email,"passwordenter1":password},function(err,data5){
    console.log(email);
    if(err){
      console.log(err);
      return res.status(500).send();
      console.log('error');
    }
    if(!data5){
      console.log('fail');
      return res.status(404).send();
    }
    console.log('success');
    res.send({message:"success full login"});
    //res.writeHead("200",{"Content-Type":"application/json"});
    //  res.json(data4);
  //    console.log(data4);
})
  //fs.createReadStream(__dirname+"/model/offer.json").pipe(res);
});


 app.post("/storeloginadd",function(req,res){

    storeModel(req.body).save();
});


app.post("/accountlogin",function(req,res){

  var email=req.body.emailenter2;
  var password=req.body.passwordenter2;

  accountModel.findOne({"emailenter2":email,"passwordenter2":password},function(err,data6){
    console.log(email);
    if(err){
      console.log(err);
      return res.status(500).send();
      console.log('error');
    }
    if(!data6){
      console.log('fail');
      return res.status(404).send();
    }
    console.log('success');
    res.send({message:"success full login"});
    //res.writeHead("200",{"Content-Type":"application/json"});
    //  res.json(data4);
  //    console.log(data4);
})
  //fs.createReadStream(__dirname+"/model/offer.json").pipe(res);
});


 app.post("/accountloginadd",function(req,res){

    accountModel(req.body).save();
});

app.post("/teamleaderlogin",function(req,res){
  teamleaderModel.find({},function(err,data7){
    //res.writeHead("200",{"Content-Type":"application/json"});
      res.json(data7);
//      console.log(data5);
})
  //fs.createReadStream(__dirname+"/model/offer.json").pipe(res);
});
 app.post("/teamleaderloginadd",function(req,res){
    teamleaderModel(req.body).save();
});

app.post("/fetchAppointment",function(req,res){
  console.log(req.body.appId);
  appointModel.find({"app_id":req.body.appId},function(err,data){
    if(err) throw err;
    console.log(data);
    res.json(data);
  });

});

app.listen(3000);
console.log("server started");
console.log("done");

   


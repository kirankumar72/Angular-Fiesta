const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser : true,
    useUnifiedTopology :true
}).then(()=>console.log("mongodb connected"))
.catch(err => console.log(err));

const UserSchema = new mongoose.Schema({

    email: String,
    password :String,
    firstName :String,
    lastName : String,
    gender :String,
    education : String,
    status : String,
    experience :String,
    date :String,
    resume : String
});

const SignUpSchema = new mongoose.Schema({
  firstName : String,
  surName : String,
  dob : String,
  gender : String,
  mobileOrEmail :String,
  password : String
})

const User = mongoose.model('User',UserSchema);
const SignUp = mongoose.model('SignUp', SignUpSchema);

app.post('/api/users', async (req, res)=>{
      try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
})

app.post('/api/fbusers', async (req,res)=>{
  try{
    const user = new SignUp(req.body);
    const result = await user.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
})

app.post('/api/fbusers/login',async (req, res)=>{
 const {email, password} = req.body;
  try{
    const user = await SignUp.findOne({mobileOrEmail : email, password});
    if(user){
      res.json({
        success : true,
        message : 'Login successful',
      })
     
    }else{
      res.json({
        success : false,
        message : 'Invalid email or password'
      })
    }
  }
  catch (err){
    res.status(500).json({message :'server error'});
  }
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

const User= require('../models/user');
// const {v4:uuidv4}=require('uuid');
const {setUser} =  require('../service/userauth')

async function handelUserSignUp(req, res) {
  const { email, password, name } = req.body;
  await User.create(
    {
       name,
       email,
       password
    }
  )
  return res.redirect("/")
}

async function handelUserLogin(req, res) {
  const { email, password} = req.body;
  const user= await User.findOne({email,password})
  
  if(!user) return res.render('login',{
    error:"Invalid user or password"
  })

  // const sessionId=uuidv4();
  // res.cookie("uid",sessionId)
  const token=setUser(user);
  res.cookie("token",token);
  return res.redirect("/")
// return res.json({token})
}


module.exports={
    handelUserSignUp,
    handelUserLogin
};

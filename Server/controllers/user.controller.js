const userModel = require("../models/user.model");
const bcrypt = require("bcrypt")
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken")
const  secret = process.env.SECRET
const dotenv = require('dotenv');   
dotenv.config()


const signUp = (req,res) =>{
    res.send([
        {
            firstName:'Shola',
            lastName:'bola',
            email:'hola@gmail.com'
        },
        {
            firstName:'Shola',
            lastName:'bola',
            email:'hola@gmail.com'
        },
        {
            firstName:'Shola',
            lastName:'bola',
            email:'hola@gmail.com'
        },
    ])    
}


const signUpPost =  async (req,res) => {
    try {
        let {firstName, lastName, email, password} = req.body
        let user = new userModel({firstName:firstName, lastName:lastName, email:email, password:password});
        await user.save()
        console.log("user saved:", user);
        // res.render("signIn")
        res.send(user)
    } catch (error) {
        console.log(error);
        console.log("user not saved");
    }

}

const signIn = (req,res) =>{
    res.send('this is the sign in page')
}

const signInPost = async (req,res) =>{

    const {email, password}=req.body
    let user;
    try{
        user = await userModel.findOne({email: email})
        console.log(user);
    }catch(err){
        return new Error
    
    }
        if (user){
           


    
    const correctPassword = bcrypt.compareSync(password, user.password)
    if (!correctPassword) {
        res.status(400).json({
            Message:"Wrong login details"
        })
        console.log("Wrong login details");
    }
    else{
        const token = jwt.sign({user:user.email}, secret, {expiresIn: 50})
        res.status(200).json({
            Message: "User logged in successfully",
            status: true, token: token
        })
        console.log("User logged in succesfully");
    }

}

    // try {
    //     let  {password,email} = req.body
    //     let userReceive = await userModel.find({password:password, email:email })
    //     console.log("user found:",userReceive);
    //     res.status(200).send("user found")
        
    // } 
    // catch (err) {
    //     console.log("user not found", err);
    //     res.status(400).send("user not found")    }

    
}
const dashboard = (req,res)=>{
userModel.find().then((data)=>{
res.send({data:data})
})
}

const verified = (req,res)=>{
let token = req.headers.authorization.split(" ")[1];
jwt.verify(token, secret, (err, result)=>{
    if (err){
    res.send({message: "authenticated failed", status:false, user: err});
    console.log(err);
} else{
    res.send({message: "authenticated user", status:true, user: result});
    console.log(result);
}
})
}


const sendMail = (req,res)=>{
    // console.log("mail sent");
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass:  process.env.PASSWORD,
        },
    })

        let mailOptions =  {
            from: process.env.EMAIL,
            to: "muizzadeyanju@gmail.com", // list of receivers
            subject: "Hello Manmui✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
          }
        
          transporter.sendMail(mailOptions).then((info)=>{
            console.log(info);
            res.status(201).json({message: "mail sent successfully", status: true})
          }).catch((error)=>{
        console.log(error);
        res.status(500).json({message: "mail failed to send", status: false})
          });
}


module.exports ={signUp, signUpPost,signIn,signInPost,dashboard, verified, sendMail,}
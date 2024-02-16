import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js"
import mailer from "../middleware/mailer.js"

// Register User 
export const register = async (req, res) => {
    try{
        const { fullName, email, password,  phone } = req.body;
        if(!fullName || !email || !password || !phone){
            throw Error('All Fields must be filled')
        }
        
        const exists = await User.findOne({ email })
        if(exists){
            throw Error('Email already Exist');
        }
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName, email, phone, password: passwordHash, verification: false
        })
        const savedUser = await  newUser.save();

        if(savedUser){
            mailer('emailVerification', savedUser)
            // console.log("done")
        }
        res.status(201).json(savedUser);
    } catch(err){
        res.status(500).json({error: err.message})
    }
}

// login
export const login = async(req, res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email : email }); 
        if(!user) return res.status(400).json({ msg: "User Does not exist." })

        const validPass = await bcrypt.compare(password, user.password)
        if (!validPass ) return res.status(400).json({ msg: 'Invalid Password' })
        
        let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET , { expiresIn: '1d'});
        delete user.password;
        res.status(200).json({ token, user})

    }catch(err){
        res.status(500).json({error: err.message})
    }
}


export const emailVerification = async (req, res) => {
    const checkingEmail = await jwt.verify(req.params.token, process.env.JWT_SECRET)
    const verifyUser = await User.findOne({email : checkingEmail.email})
    if ( verifyUser && verifyUser.verification === true ) throw Error('Your account is already exists')
    const verifyEmail = await User.updateOne({ email: checkingEmail.email }, { $set: { verification: true } })
    console.log(verifyEmail)
    if(!verifyEmail){
        throw Error("You need to active your account")
    }else {
        res.redirect('http://localhost:3000/login')
    }
}
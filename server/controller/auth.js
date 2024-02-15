import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js"


// Register User 
export const register = async (req, res) => {
    try{
        const { fullName, email, password } = req.body;
        // if(!fullName || !email || !password){
        //     throw Error('All Fields must be filled')
        // }
        // if(!validator.isEmail(email)){
        //     throw Error('Email is Not Valid')
        // }
        // if(!validator.isStrongPassword(password)){
        //     throw Error('Password Not Strong Enough')
        // }
        // const exists = await this.findOne({ email })
        // if(exists){
        //     throw Error('Email already Exist');
        // }
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName, email, password: passwordHash,
        })
        const savedUser = await  newUser.save();
        res.status(201).json(savedUser);
        console.log("done")
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

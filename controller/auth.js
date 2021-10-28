import User from '../models/user.js'
import jwt from 'jsonwebtoken';

export const signup = (req, res) => {

    User.findOne({
        email: req.body.email,
    }).exec((error,user) => {
        if(user) return res.status(400).json({
            message: "user already exist"
        });

        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;
        const _user = new User({
            firstName,
            lastName,
            email,
            password,
            username: Math.random().toString()
        });

        _user.save((error,data) => {
            if(error) return res.status(400).json({
                message: "something went wrong"
            });
            if(data){
                return res.status(201).json({
                    message : "user created successfully"
                });
            }
        });
    })
}

export const signin = (req, res) => {
    User.findOne({ email: req.body.email})
    .exec((error,user) => {
        if(error) return res.status(400).json({
            error

    })
    if(user){
        if(user.authenticate(req.body.password)){

            const token = jwt.sign(
                {_id:user._id,role:user.role},
                process.env.JWT_SECRET,
                { expiresIn: '1h'}
            );
            const {
                _id,
                firstName,
                lastName,
                email,
                role,fullName
            } = user;
            res.status(200).json({ token , user:{
                _id,
                firstName,
                lastName,
                email,
                role,fullName
             }})

        }
        else{
            return res.status(400).json({
                message: 'Authentication failed'
            })
        }
      
    }
    else{
        return res.status(400).json({
            message: "something went wrong"
        })
    }

});
}




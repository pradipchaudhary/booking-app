import User from "../models/User.js";


// Get all Users
export const getUsers = async (req, res, next) => {
    // const failed = true;
    // if(failed) return next(err);

    try{
        const users = await User.find()
        res.status(200).json(users);
    }catch(err){
        // req.stale(500).json(err);
        next(err);
    }
}

// Get User by Id
export const getUser = async (req, res, next) => {
    try{
        const user = await User.findById(req.parmse.id);
        res.status(200).json(user);

    }catch(err){
        next(err);
    }
}

// Update User 
export const updateUser = async (req, res, next) => {
    try{
        const updateUser = await User.findByIdAndUpdate(req.parmse.id, {$set:req.body}, {new:true});
        res.status(200).json(updateUser);

    }catch(err){
        next(err);
    }
}

// Delete User 
export const deleteUser = async (req, res, next) => {
    try{
        await User.findByIdAndDelete(req.parmse.id);
        res.status(200).json("User has heen deleted!");
    }catch(err){
        next(err)
    }
}
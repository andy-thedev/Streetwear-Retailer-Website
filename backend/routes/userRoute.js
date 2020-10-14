import express from 'express';
import User from '../models/userModel';
import { getToken, isAuth, isAdmin } from '../util';

const router = express.Router();
  

router.post('/signin', async (req, res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if (signinUser){
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
        })
    } else {
        res.status(401).send({msg: 'Invalid Email or Password.'})
    }
})

router.post('/register', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const newUser = await user.save();
    if (newUser){
        res.send({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        })
    } else {
        res.status(401).send({msg: 'Invalid User Data.'})
    }
})

router.post("/createadmin", async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isAdmin: true
    });
    const newUser = await user.save();
    if (newUser) {
        res.send({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser),
        });
    } else {
        res.status(401).send({msg: 'Invalid Admin Data.'})
    }
})

router.put("/:id", isAuth, async(req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user){
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        const updatedUser = await user.save();
        res.send({
            _id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: getToken(updatedUser),
        });
    } else {
        return res.status(404).send({message: 'User not Found.'});
    }
});

router.get("/", isAuth, isAdmin, async(req, res) => {
    const users = await User.find({});
    res.send(users);
});

router.delete("/:id", isAuth, isAdmin, async(req, res) => {
    const deletedUser = await User.findById(req.params.id);
    if (deletedUser) {
        await deletedUser.remove();
        res.send({message: "User Deleted"});
    } else {
        res.send("Error in Deletion.");
    }
})

export default router;
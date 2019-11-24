const router = require('express').Router();
let User = require("../models/user.model");

router.route('/').get((req, res)=>{ //First endpoint that handles incoming HTTP get requests
  User.find() //Get the users collection
  .then(users => res.json(users)) //Return the response as json
  .then(err => res.status(400).json('Error', err)); //If it's not found, error out.
});

router.route('/add').post((req, res)=> {
  const username = req.body.username; //Get the body text of the request
  const newUser = new User({username}); //Create a new user based on our schema
  newUser.save() //Saves the information to the DB
    .then(()=> res.json('User added!'))
    .catch(err => res.status(400).json('Error', err))
});

module.exports = router;
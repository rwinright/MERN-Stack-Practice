const router = require('express').Router();
let Exercise = require("../models/exercise.model");

router.route('/').get((req, res) => { //First endpoint that handles incoming HTTP get requests
  Exercise.find() //Get the users collection
    .then(users => res.json(users)) //Return the response as json
    .then(err => res.status(400).json('Error', err)); //If it's not found, error out.
});

router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username,
        exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error', err))
    })
    .catch(err => res.status(400).json('Error', err))
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const exercise = new Exercise({
    username,
    description,
    duration,
    date
  })

  exercise.save() //Saves the information to the DB
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error', err))
});

module.exports = router; //Export the router
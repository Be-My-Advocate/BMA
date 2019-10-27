const User =  require('../model/user');

const userController = {}

userController.authenticate = (req, res) => {
  User.findByEmail(req.params.email).then((user)=>{
    res.status(200).json({
      message: "Success",
      data:user
    });
  }).catch(err => {
    // If something goes wrong it logs the error in the console and sends it as a JSON object
    console.log(err);
    res.status(500).json({err});
  });
}

userController.addUser = (req, res) => {
  User.addUser(req.body.email, req.body.firstname, req.body.lastname, req.body.username, req.body.password, req.body.userRole)
    .then( () => {
        res.status(200).json({
          message: "Success",
        });
    }).catch(err => {
      // If something goes wrong it logs the error in the console and sends it as a JSON object
      console.log(err);
      res.status(500).json({err});
  });
}

module.exports = userController

const User =  require('../model/accounts');

const accountController = {}

accountController.authenticate = (req, res) => {
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

accountController.addUser = (req, res) => {
  User.addUser(req.body.email, req.body.password, req.body.userRole)
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

module.exports = accountController

const User = require('../models/user');
const userRoutes = (app, fs) => {
  //read
  app.get('/user', (req, res) => {
    User.find({}, (err, user) => {
      if (err) {
        res.status(404);
        res.send('Users not found!');
      }
    res.send(user);
    })
  });

  app.get('/users/:name', (req, res) => {
    User.find({name: req.params.name}, (err, user) => {
      if (err) {
        res.status(404);
        res.send('User not found');
      }
      res.send(user); 
    })
  });

  app.get('/user/seed', (req, res) => {
    // create some events
    const users = [
        {
            name: "andrew",
            password: "test111",
            profession: "dev"
        },
        {
          name: "ben",
          password: "test222",
          profession: "IT"
      }
    ];

    // use the Event model to insert/save
    User.deleteMany({}, (err, user) => {
      if (err) {
        console.log(err);
        res.status(400).send('cannot delete user');
      }
    });
    for (user of users) {
      let newUser = new User(user);
      newUser.save(err => {
          console.log(err);
      })
    } 
    res.send('seed!');
});

  //create
  app.post('/user', (req, res) => {
    let user = new User( {
      name: req.body.name,
      password: req.body.password,
      profession: req.body.profession
    });
    user.save(err => {
      if(err) {
        console.log(err);
        res.status(400).send('cannot create user');
      }
      res.status(200).send('user added.')
    })//insert和save的区别：有主键时save会修改原数据，insert会报错
  });

//update
app.put('/users/:name', (req, res) => {
  User.updateOne({name: req.params.name}, {
    name: req.body.name,
      password: req.body.password,
      profession: req.body.profession
  }, (err => {
    if(err) {
      console.log(err);
      res.status(400).send('cannot update user');
    }
    res.status(200).send('user updated')
  }));
});

  //delete
  app.delete('/users/:name', (req, res) => {
    User.deleteOne({name: req.params.name}, (err, user) => {
      if (err) {
        console.log(err);
        res.status(400).send('cannot delete user');
      }
      res.send('user deleted'); 
    })
  });

};

module.exports = userRoutes;
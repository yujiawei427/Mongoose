const fs = require('fs');

fs.readFile('./data/user1.json','utf-8' ,  function (err,data) {
  if (err) {
    throw err;
    // console.log(err);
  }
  console.log(data);
});
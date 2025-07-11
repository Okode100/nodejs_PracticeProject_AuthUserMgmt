const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{

  // Update the code here

  res.send(friends,null,4)//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{
  // Update the code here
  const email = req.params.email;
  res.send(friends[email])//This line is to be replaced with actual return value
});


// POST request: Add a new friend
router.post("/",(req,res)=>{
  // Update the code here
  if(req.body.email){
    friends[req.body.email] = {
      "firstName": req.body.firstName,
      "lastName": req.body.lastName,
      "DOB": req.body.DOB
    }
  }
  res.send(`Friend with email ${req.body.email} has been added successful`);    
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  // Update the code here
  const email = req.params.email;
  let friend = friends[email];
  if(friend){
    let DOB = req.body.DOB;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;

    if(DOB){
      friend.DOB = DOB;
    }
    if(firstName){
      friend.firstName = firstName;
    }
    if(lastName){
      friend.lastName = lastName
    }
    friends[email] = friend;
    res.send(`Friends with the email ${email} has been updated successfully`);
  } else {
    res.send(`Friend with the email ${email} not found`);
  }
  
  //This line is to be replaced with actual return value
});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  // Update the code here
  const email = req.params.email;
  if(email){
    delete friends[email];
    res.send(`Friend with the email ${email} has been deleted successfully`);
  } else {
    res.send(`Friend with the email ${email} not found`);
  }
  //This line is to be replaced with actual return value
});

module.exports=router;

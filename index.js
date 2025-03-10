const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const { error } = require("console");

// middleware

const app = express()
const PORT = 8000;
// middleware build in middleware
app.use(express.urlencoded({extended: false})) 
// req, res, next 
app.use((req, res, next) => {
  console.log("This is first middleware");
  const myUserName = req.first_name;
  next();
})




// routes
app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map(user => `<li>${user.first_name}, ${user.last_name}</li>`).join("")}
  </ul>
  `;
  return res.send(html)
})

// app.use((req,res, next) => {
//   console.log("\n This is second middleware ");
// next();
// })

app.route('/api/users/:id')
.get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => 
    user.id === id
  );
  return res.json(user);
}).patch((req, res) => {
  const id = req.params.id;
  const user = users.find((user) =>{
    if(user.id === id){
      users.pop(body)
    }
  }
    
)
const body = req.body;
users.push(body);
fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(error, data) => {

  return res.json({status: "Success!"})
})
}).delete((req, res) => {
  return res.json({status: "Pending"})
})

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({...body, id: users.length + 1});
  fs.writeFile("./MOCK_DATA.json",JSON.stringify(users), (error, data) => {

    return res.json({Status : "Success", id: users.id})
  })
})

// app.patch("/api/users/:id", (req, res) => {
//   // edit user
// })

// app.delete("/api/users/:id", (req, res) => {
//   // delete
// })

app.listen(PORT, () => {
  console.log("Server Connected Successfully!");
})
//  it has functions that we will attatched to the router
const User = require('../models/user')
async function handleGetAllUsers(req, res) {
  const user = await User.find();
  const html = `
  <ul>
  ${user.map(User => `<li>${User.first_name}, ${User.id}</li>`).join("")}
  </ul>
  `;
  return res.send(html)
}

async function handleGetUserById (req, res) {
  try {
    const id = req.params._id; // No need to convert to a number
    const user = await User.findById(id); // Use async/await

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function handlePatchUserById(req, res){
  return res.status(200).json({status: "Success"})
}

async function handleDeleteUserById(req, res) {
  return res.status(200).json({Status: "Success in deletion"})
}

async function handlePostUsers (req, res) {
  const body = req.body;
  if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.department){
    return res.status(400).json({ msg: "All Fields are required!"})
  }
   const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    department: body.department

   });
   return res.status(201).json({msg: "Success" })
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handlePatchUserById,
  handleDeleteUserById,
  handlePostUsers
};

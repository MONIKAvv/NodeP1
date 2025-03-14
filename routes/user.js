const express = require('express');
// index main app.get etc k use karte hai, but when we deal with routes we will use router in place of app
const router = express.Router();
const {handleGetAllUsers, handleGetUserById, handlePatchUserById, handleDeleteUserById, handlePostUsers} = require('../controllers/user')

router.route("/").get(handleGetAllUsers).post(handlePostUsers);

router.route('/:id')
.get(handleGetUserById).patch(handlePatchUserById
).delete(handleDeleteUserById)

// router.post("/", handlePostUsers)

module.exports = router;
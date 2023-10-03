const express = require('express')
const router = express.Router()
const notesController = require('../controllers/notesController')

router.route('/')
    .get(notesController.getAllNotes) // get all notes
    .post(notesController.createNewNote) // create a new note
    .patch(notesController.updateNote) // update a note
    .delete(notesController.deleteNote) // delete a note

module.exports = router
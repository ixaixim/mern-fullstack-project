const express = require('express')
const router = express.Router()
const path = require('path')

// Serve static files from the React app
router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

module.exports = router
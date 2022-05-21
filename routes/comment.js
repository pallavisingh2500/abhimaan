const express = require('express');
const router = express.Router();
const Comment=require('../models/comment');
const { isLoggedIn } = require('../middleware');


router.post('/api/comments',isLoggedIn, (req, res) => {
    const comment = new Comment({
        username: req.body.username,
        comment: req.body.comment
    })
    comment.save().then(response => {
        res.send(response)
        // console.log(response);
    })

})

router.get('/api/comments', (req, res) => {
    Comment.find().then(function(comments) {
        res.send(comments)
        
    })
})



module.exports = router;
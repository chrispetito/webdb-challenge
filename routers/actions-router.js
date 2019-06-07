const express = require('express');
const db = require('../ models/actions-model')

const router = express.Router();


router.get('/', (req, res) => {
    db.getActions().then(actions => {
        res.status(200).json(actions)
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    db.add(req.body).then(action => {
        res.status(201).json(action)
    }).catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;
const express = require('express');
const db = require('../ models/projects-model')

const router = express.Router();


router.get('/', (req, res) => {
    db.getProjects().then(projects => {
        res.status(200).json(projects)
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    db.add(req.body).then(project => {
        res.status(201).json({message: `Project added successfully!`})
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    db.getProjectById(req.params.id).then(project => {
        res.status(200).json(project)
    }).catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', (req, res) => {
    db.update(req.params.id, req.body).then(project => {
        res.status(200).json(project)
    }).catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;
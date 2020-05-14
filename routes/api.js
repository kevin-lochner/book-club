let express = require('express')
let db = require('../models')
let PotentialBook = db.PotentialBook
let Sequelize = require('sequelize')

let router = express.Router()

router.get('/PotentialBooks', function(req, res, next) {
    PotentialBook.findAll( { order: ['authorLastName']} ).then( PotentialBooks => {
        return res.json(PotentialBooks)
    })
    .catch (err => next(err))
})

router.post('/PotentialBooks', function(req, res, next) {
    PotentialBook.create( req.body).then( data => {
        return res.status(201).send('ok')
    }).catch( err => {
        if (err instanceof Sequelize.ValidationError) {
            let messages = err.errors.map( e => e.message )
            // 400 status = bad request from user 
            return res.status(400).json(messages)
        }
        return next(err)
    } )
})

router.patch('/potentialBooks/:id', function(req, res, next) {
    PotentialBook.update(req.body, { where: {id: req.params.id} } )
        .the( rowModified => {
            return res.send('ok')
        })
})

router.delete('/potentialBooks/:id', function(req, res, next) {
    PotentialBook.destroy( { where: {id: req.params.id} } )
        .then( rowModified => {
            return res.send('ok')
        })
})

module.exports = router  
const express = require('express');
const works = require('../models/workouts');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        works.getAll().then(x=> res.send( x.map(work=> ({ ...work}) ) ) )
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        works.get(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/types', (req, res, next) => {
        works.getTypes().then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        works.search(req.query.q).then(x=> res.send( x ) )
        .catch(next);
    })
    .post('/', (req, res, next) => {
        works.add(
            req.body.Owner_id,
            req.body.Privacy_Setting, 
            req.body.Start_Time, 
            req.body.End_Time, 
            req.body.Exercise_Type,
            req.body.Note,
            req.body.Distance,
            req.body.Sets,
            req.body.Reps_Per_Set,
            req.body.Weight,
        ).then(newwork => {
            res.send( newwork );
        }).catch(next)
    })
   .put('/:id', (req, res, next) => {
        works.update( req.params.id,
            req.body.Owner_id,
            req.body.Privacy_Setting, 
            req.body.Start_Time, 
            req.body.End_Time, 
            req.body.Exercise_Type,
            req.body.Note,
            req.body.Distance,
            req.body.Sets,
            req.body.Reps_Per_Set,
            req.body.Weight,
        ).then(newwork => {
            res.send( newwork );
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        works.remove(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })
module.exports = router;
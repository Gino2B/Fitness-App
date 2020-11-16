const express = require('express');
const ets = require('../models/Exercise_Types');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        ets.getAll().then(x=> res.send( x.map(et=> ({ ...et}) ) ) )
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        ets.get(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/types', (req, res, next) => {
        ets.getTypes().then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        ets.search(req.query.q).then(x=> res.send( x ) )
        .catch(next);
    })
    .post('/', (req, res, next) => {
        ets.add(
            req.body.Name,
            req.body.Type, 
            req.body.Muscle_Group, 
            req.body.Video_Url, 
            req.body.Relative_Dificulty 
        ).then(newet => {
            res.send( newet );
        }).catch(next)
    })
   .put('/:id', (req, res, next) => {
        ets.update( req.params.id,
            req.body.Name,
            req.body.Type, 
            req.body.Muscle_Group, 
            req.body.Video_Url, 
            req.body.Relative_Dificulty 
        ).then(newet => {
            res.send( newet );
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        ets.remove(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })
module.exports = router;
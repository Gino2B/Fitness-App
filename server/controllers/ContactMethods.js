const express = require('express');
const cms = require('../models/ContactMethods');
const user = require('../models/users')

const router = express.Router();

router
    .get('/', (req, res, next) => {
        cms.getAll().then(x=> res.send( x.map(cm=> ({ ...cm}) ) ) )
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        cms.get(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/:email', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        cms.get(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/types', (req, res, next) => {
        cms.getTypes().then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        cms.search(req.query.q).then(x=> res.send( x ) )
        .catch(next);
    })
    .post('/', (req, res, next) => {
        cms.add(
            req.body.Type,
            req.body.Value, 
            req.body.IsPrimary, 
            req.body.CanSpam, 
            user.get.id, 
        ).then(newcm => {
            res.send( newcm );
        }).catch(next)
    })
   .put('/:id', (req, res, next) => {
        cms.update( req.params.id,
            req.body.Type,
            req.body.Value, 
            req.body.IsPrimary, 
            req.body.CanSpam, 
            user.get.id, 
        ).then(newcm => {
            res.send( newcm );
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        cms.remove(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })
module.exports = router;
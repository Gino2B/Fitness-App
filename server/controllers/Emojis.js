const express = require('express');
const reactions = require('../models/Emojis');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        reactions.getAll().then(x=> res.send( x ) ) 
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        reactions.get(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        reactions.search(req.query.q).then(x=> res.send( x ) )
        .catch(next);
    })
    .post('/', (req, res, next) => {
        reactions.add(
            req.body.Name, 
            req.body.Description, 
            req.body.Code, 
            req.body.Type_id,
        ).then(newEmoji => {
            res.send( newEmoji );
        }).catch(next)
    })
   .put('/:id', (req, res, next) => {
        reactions.update( req.params.id,
            req.body.Name, 
            req.body.Description, 
            req.body.Code, 
            req.body.Type_id,
        ).then(newEmoji => {
            res.send( newEmoji );
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        reactions.remove(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })
module.exports = router;
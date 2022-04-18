const route = require('express').Router();
const lightOperation = require('./db');

route.post('/addLight',(req,res)=>{
    lightOperation.addLight(req.body,res);
})

route.post('/demoLight',(req,res)=>{
    lightOperation.demoLight(req.body,res);
})

route.get('/getLights',(req,res)=>{
    lightOperation.getLights(res);
})

route.post('/getOneLight',(req,res)=>{
    lightOperation.getOneLight(req.body,res);
})
module.exports = route;
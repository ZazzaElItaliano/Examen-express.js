'use strict'

const express =require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.render('index', {titulo:"Tu colección de videojuegos"})
})


module.exports=router;
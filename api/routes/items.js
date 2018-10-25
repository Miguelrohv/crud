const express = require('express');//import express
const router = express.Router();//import express Router. conviniently handle routes with diff endpoints etc.
const mc = require('../../db_con');

router.get('/',(req,res,next)=>{
    mc.query('SELECT * FROM items', 
     (error, results, fields)=> {
        if (error) throw error;
        return res.status(201).json({ error: false, data: results, message: 'fetch success', });
    });
});
//get a specific item
router.get('/:itemId',(req,res,next)=>{
    const id = req.params.itemId;
    mc.query('SELECT * FROM items where id=?', id, 
     (error, results, fields)=> {
        if (error) throw error;
        return res.status(201).json({ error: false, data: results[0] });
    });
});
//post an item
router.post('/',(req,res,next)=>{
        var name = req.body.name;
        var qty = req.body.qty;
        var amount = req.body.amount;
        mc.query(`INSERT INTO items set name ='${name}',amount =${qty},qty =${amount}`,(error, results, fields)=> {
            if (error) throw error;
            return res.status(202).json({ error: false, data: results, message: 'item successfully added.' });
        });
});
//edit an item
router.put('/:itemId',(req,res,next)=>{
    res.status(200).json({message:"success",function:"edit an item"});
});
//delete an item by giving an id
router.delete('/:itemId',(req,res,next)=>{
    res.status(200).json({message:"success",function:"delete an item"});
});

module.exports = router;
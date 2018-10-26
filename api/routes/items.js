const express = require('express');//import express
const router = express.Router();//import express Router. conviniently handle routes with diff endpoints etc.
const mc = require('../../db_con');

router.get('/API',(req,res,next)=>{
    mc.query('SELECT * FROM items', 
     (error, results, fields)=> {
        if (error) throw error;
        return res.status(201).json({ error: false, data: results, message: 'fetch success', });
    });
});
//get a specific item
router.get('/API/:itemId',(req,res,next)=>{
    const id = req.params.itemId;
    mc.query('SELECT * FROM items where id=?', id, 
     (error, results, fields)=> {
        if (error) throw error;
        return res.status(201).json({ error: false, data: results[0] });
    });
});
//post an item
router.post('/API',(req,res,next)=>{
        var name = req.body.name;
        var qty = req.body.qty;
        var amount = req.body.amount;
        mc.query(`INSERT INTO items set name ='${name}',amount =${amount},qty =${qty}`,(error, results, fields)=> {
            if (error) throw error;
            return res.status(202).json({ error: false, data: results, message: 'item successfully added.' });
        });
});
//edit an item
router.put('/API/:itemId',(req,res,next)=>{
    let id = req.params.itemId;
    let name = req.body.newName;
    let qty = req.body.newQty;
    let amount = req.body.newAmount;
    var sql = "UPDATE items SET ";

    if ( !name && !qty && !amount) {
        return res.status(400).json({ error:error, message: 'Please provide a new name and/or a new amount and/or a new qty' });
    }
    if(name){
        sql+=` name ='${name}'`;
    }
    if(qty){
        sql+=`, qty ='${qty}'`;
    }
    if(amount){
        sql+=`, amount ='${amount}'`;
    }
    sql += ` WHERE id ='${id}'`;   
    mc.query(sql,
      (error, results, fields)=> {
        if (error) throw error;
        return res.status(200).json({ error: false, data: results, message: 'product has been successfully updated.' });
    });
});
//delete an item by giving an id
router.delete('/:itemId',(req,res,next)=>{
    const id = req.params.itemId;
    if (!id) {
        return res.status(400).send({ error: true, message: 'no id found' });
    }
    mc.query('DELETE FROM items WHERE id = ?', id, 
     (error, results, fields) =>{
        if (error) throw error;
        return res.status(201).json({ error: false, data: results, message: 'item deleted.' });
    });
});

router.get('/', function(req, res) {
    mc.query('SELECT * FROM items', 
     (error, results, fields)=> {
        if (error) throw error;
        return res.render('pages/index',{error:false,data:results});
       
    });
    
});

module.exports = router;
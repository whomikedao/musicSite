var express = require('express');
var router = express.Router();
var data = require('../data/data.json');

router.get('/', (req, res)=>{
    let albumList = []
    let description = data.TenD;

    description.forEach((albumObj)=>{
        albumList = albumList.concat(albumObj.album);
    })

    console.log(albumList);
    res.send('TenD')
})

module.exports = router;
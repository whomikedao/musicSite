var express = require('express');
var router = express.Router();
var data = require('../data/data.json');

router.get('/', (req, res)=>{
    let albumList = []
    let tenaciousD = data.TenD;

    tenaciousD.forEach((albumObj)=>{
        albumList = albumList.concat(albumObj.album);
    })

    // console.log(albumList);
    // res.send('TenD')
    res.render('index', {
        album: tenaciousD
    })
})

module.exports = router;
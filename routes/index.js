var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Express'
    });
});

var numRankData = {
    '2014': [{
        name: '农业',
        num: 1000
    }, {
        name: '作业；运输',
        num: 900
    }, {
        name: '化学；冶金',
        num: 800
    }, {
        name: '纺织 造纸',
        num: 500
    }, {
        name: '固定建筑物',
        num: 400
    }, {
        name: '机械工程、照明、加热',
        num: 200
    }, {
        name: '物理',
        num: 100
    }, {
        name: '电学',
        num: 90
    }],
    '2013': [{
        name: '农业',
        num: 800
    }, {
        name: '纺织 造纸',
        num: 600
    }, {
        name: '机械工程、照明、加热',
        num: 300
    }, {
        name: '作业；运输',
        num: 200
    }, {
        name: '固定建筑物',
        num: 90
    }, {
        name: '电学',
        num: 80
    }, {
        name: '物理',
        num: 50
    }, {
        name: '化学；冶金',
        num: 20
    }],
};

var speedRank = {
    '2014': [{
        name: '农业',
        speed: 1.25
    }, {
        name: '作业；运输',
        speed: 0.9
    }, {
        name: '化学；冶金',
        speed: 0.8
    }, {
        name: '纺织 造纸',
        speed: 0.5
    }, {
        name: '固定建筑物',
        speed: 0.4
    }, {
        name: '机械工程、照明、加热',
        speed: 0.2
    }, {
        name: '物理',
        speed: 0.1
    }, {
        name: '电学',
        speed: -0.8
    }],
    '2013': [{
        name: '农业',
        speed: 1.2
    }, {
        name: '作业；运输',
        speed: 0.9
    }, {
        name: '化学；冶金',
        speed: 0.8
    }, {
        name: '纺织 造纸',
        speed: 0.3
    }, {
        name: '固定建筑物',
        speed: 0.1
    }, {
        name: '机械工程、照明、加热',
        speed: -0.2
    }, {
        name: '物理',
        speed: -0.6
    }, {
        name: '电学',
        speed: -0.9
    }]
}

router.get('/patent/num-rank', function(req, res) {
    var year = req.param('year');
    res.send(numRankData[year]);
});

router.get('/patent/speed-rank', function(req, res) {
    var year = req.param('year');
    res.send(speedRank[year]);
});

router.get('/patent/comprehensive-rank', function(req, res) {
    var year = req.param('year');
    res.send(numRankData[year]);
});

module.exports = router;
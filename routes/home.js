var express = require('express');

var router = express.Router();
router.get('/GetNotesList', function (req, res, next) {
    res.json({
        code: 100,
        data: new Array(100).fill(0).map((v, index) => {
            return { id: index, title: `笔记${index}`, createTime: Date.now() }
        }),
        total: 100,
        msg: null,
    })
});

module.exports = router;

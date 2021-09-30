var express = require('express');
const fs = require('fs')
const path = require('path')

const reactImagePath = path.resolve(__dirname, 'images/react.png')
const vueImagePath = path.resolve(__dirname, 'images/vue.png')
const nodeImagePath = path.resolve(__dirname, 'images/node.png')
let reactImage = ""
let vueImage = ""
let nodeImage = ""
fs.readFile(reactImagePath, (err, imageResponse) => {
    if (err) {
        console.error(err)
        return
    }
    // console.log(imageResponse)
    // console.log(imageResponse.toString('base64'))
    reactImage = `data:image/png;base64,${imageResponse.toString('base64')}`
})
fs.readFile(vueImagePath, (err, imageResponse) => {
    if (err) {
        console.error(err)
        return
    }
    vueImage = `data:image/png;base64,${imageResponse.toString('base64')}`
})
fs.readFile(nodeImagePath, (err, imageResponse) => {
    if (err) {
        console.error(err)
        return
    }
    nodeImage = `data:image/png;base64,${imageResponse.toString('base64')}`
})
var router = express.Router();
router.get('/GetNotes', function (req, res, next) {
    // console.log(req,res)
    const response = [
        { id: 1, title: 'React JS', image: reactImage, description: '渐进式JavaScript框架', createTime: Date.now() },
        { id: 2, title: 'Vue JS', image: vueImage, description: '用于构建用户界面的JavaScript库', createTime: Date.now() },
        { id: 3, title: 'Node JS', image: nodeImage, description: '一个开源与跨平台的JavaScript运行时环境', createTime: Date.now() }
    ]
    res.json({
        code: 100,
        data: response,
        total: 3,
        msg: null,
    })
});
router.post('/CollectNotes', function (req, res, next) {
    res.json({
        code: 100,
        data: null,
        msg: "点赞成功",
    })
});

module.exports = router;

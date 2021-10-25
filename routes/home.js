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
    // /Home/GetNotes?page=1
    console.log('req.app：', req.app) //express instance
    console.log('req.baseUrl：', req.baseUrl) //Home
    console.log('req.body：', req.body) //{}
    console.log('req.cookies：', req.cookies) // [Object: null prototype] {}
    console.log('req.fresh：', req.fresh) //false
    console.log('req.hostname：', req.hostname) //192.162.0.109
    console.log('req.ip：', req.ip) //::ffff:192.162.0.109
    console.log('req.ips：', req.ips)  //[]
    console.log('req.method：', req.method)  //GET
    console.log('req.originalUrl：', req.originalUrl) // /Home/GetNotes?page=1
    console.log('req.params：', req.params)  //{}
    console.log('req.path：', req.path)  // /GetNotes
    console.log('req.protocol：', req.protocol)  //http
    console.log('req.query：', req.query)  //{page:'1'}
    console.log('req.route：', req.route)  /* Route { path: '/GetNotes',stack: [Layer {
                                                        handle: [Function],
                                                        name: '<anonymous>',
                                                        params: undefined,
                                                        path: undefined,
                                                        keys: [],
                                                        regexp: /^\/?$/i,
                                                        method: 'get'
                                                    }],methods: { get: true }}
                                            */
    console.log('req.secure：', req.secure)  //false
    console.log('req.signedCookies：', req.signedCookies)  //[Object: null prototype] {}
    console.log('req.stale：', req.stale) //true
    console.log('req.subdomains：', req.subdomains)  //[]
    console.log('req.xhr', req.xhr) //false
    console.log("req.get('Content-Type')：",req.get('Content-Type'))  //application/json
    console.log("req.is('application/json')：",req.is('application/json'))  //null
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
    // /Home/CollectNotes  body { id: 10}
    console.log('req.app：', req.app) //express instance
    console.log('req.baseUrl：', req.baseUrl) //Home
    console.log('req.body：', req.body) //[Object: null prototype] { id: '10' }
    console.log('req.cookies：', req.cookies) // [Object: null prototype] {}
    console.log('req.fresh：', req.fresh) //false
    console.log('req.hostname：', req.hostname) //192.162.0.109
    console.log('req.ip：', req.ip) //::ffff:192.162.0.109
    console.log('req.ips：', req.ips)  //[]
    console.log('req.method：', req.method)  //POST
    console.log('req.originalUrl：', req.originalUrl) // /Home/CollectNotes
    console.log('req.params：', req.params)  //{}
    console.log('req.path：', req.path)  // /CollectNotes
    console.log('req.protocol：', req.protocol)  //http
    console.log('req.query：', req.query)  //{}
    console.log('req.route：', req.route)  /* Route { path: '/CollectNotes',stack: [Layer {
                                                        handle: [Function],
                                                        name: '<anonymous>',
                                                        params: undefined,
                                                        path: undefined,
                                                        keys: [],
                                                        regexp: /^\/?$/i,
                                                        method: 'post'
                                                    }],methods: { post: true }}
                                            */
    console.log('req.secure：', req.secure)  //false
    console.log('req.signedCookies：', req.signedCookies)  //[Object: null prototype] {}
    console.log('req.stale：', req.stale) //true
    console.log('req.subdomains：', req.subdomains)  //[]
    console.log('req.xhr', req.xhr) //false
    res.json({
        code: 100,
        data: null,
        msg: "点赞成功",
    })
});

module.exports = router;

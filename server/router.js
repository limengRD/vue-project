const express = require('express')
const router = express.Router()

const conn = require('./mysql')

//路由

router.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  
    if (req.method == 'OPTIONS') {
      res.send(200); /让options请求快速返回/
    }
    else {
      next();
    }
  });

router.post('/register',(req,res) => {
    if(req.body.username.length <=0 || req.body.password.length <=0 || req.body.nickname <= 0) {
        return res.json({err_code: 1,message: '注册失败，请填写完整的表单!'})
    }
    conn.query('select count(*) as count from users where username= ?',req.body.username, (err,result) => {
        if(result[0].count !==0) {
            return res.json({err_code: 1 ,message: '用户名已存在!'})
        }
    })
    conn.query('insert into users set ?',req.body,(err,result) => {
        if(result.affectedRows !== 1) return res.json({err_code: 1,message: '注册用户失败'})
        res.json({err_code: 0 ,message: '注册用户成功！'})
    })
})

router.post('/login',(req,res) => {
    var username = req.body.username
    var password = req.body.password
    if(username.length <= 0 || password.length <= 0 ) {
        return res.json({err_code: 1, message: '登录失败，请填写完整的表单!'})
    }
    conn.query("select * from users where username='"+ username + "' and password='" + password +"'",(err,result) => {

    })
})

router.post('/shownav',(req,res) => {
    res.json({nav:[{name:'前端',path:'/web'},{name:'JAVA',path:'/java'},{name:'PHP',path:'/php'}]})
})

router.post('/showFirstList',(req,res) => {
    res.json({list:[{title:'title',words:['前端','前端','前端']},{title:'title',words:['前端','前端','前端']},{title:'title',words:['前端','前端','前端']}]})
})

router.post('/showList',(req,res) => {
    if(req.body.navList == 'web') {
        res.json({list:[{title:'title',words:['前端','前端','前端']},{title:'title',words:['前端','前端','前端']},{title:'title',words:['前端','前端','前端']}]})
    } else if (req.body.navList == 'java') {
        res.json({list:[{title:'title',words:['java','java','java']},{title:'title',words:['java','java','java']},{title:'title',words:['java','java','java']}]})
    } else if (req.body.navList == 'php') {
        res.json({list:[{title:'title',words:['php','php','php']},{title:'title',words:['php','php','php']},{title:'title',words:['php','php','php']}]})
    }
})

router.post('/saveArtical',(req,res) => {
    var title = req.body.title
    var artical = req.body.artical
    var data = {title: title,Content:artical}
    conn.query("insert into articals set?",data,(err,result) => {
        if(result.affectedRows !== 1) return res.json({err_code: 1,message: '保存失败！'})
        res.json({err_code: 0 ,message: '保存成功！'})
    })
})

router.get('/showMyArtical',(req,res) => {
    var page = req.query.page? req.query.page : 1
    // conn.query('select * from articals',(err,result) => {
    //     res.json(result)
    // })
    var pagesize = (page-1) * 5
    var data = {}
    conn.query('select * from articals limit '+ pagesize +',5',(err,result) => {
        data.list = result
    })

    conn.query('select count(*) as sum from articals',(err,result) => {
        data.sum = result[0].sum
        res.json(data)
    })

})

router.get('/articalDetails',(req,res) => {
    var id = req.query.id
    conn.query('select * from articals where id='+id,(err,result) => {
        if(result == 0) {
            res.json({err_code:0})
        } else {
            var result = result[0]
            res.json({err_code:0,details:result})
        }
    })
})

router.post('/deleteArtical',(req,res) => {
    var id = req.body.id
    conn.query('delete from articals where id='+ id ,(err,result) => {
        if(result.affectedRows == 1) {
            res.json({err_code: 0 ,message: '删除成功！'})
        }
    })
})

router.post('/editorArtical',(req,res) => {
    var title = req.body.title
    var artical = req.body.artical
    var id = req.body.id
    var data = {title: title,Content:artical}
    conn.query("update articals set title='" + title + "',content='"+ artical+"' where id=" + id + ";",(err,result) => {
        if(result.affectedRows !== 1) return res.json({err_code: 1,message: '保存失败！'})
        res.json({err_code: 0 ,message: '保存成功！'})
    })
})
router.get('/checkuser',(req,res) =>{
    res.json({err_code: 1})
})
module.exports = router
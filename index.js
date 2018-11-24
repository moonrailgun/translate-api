const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

app.use(bodyParser());

const Router = require('koa-router');
let router = new Router();

const google = require('./routers/google');
router.use('/google', google.routes());
app.use(router.routes());

let port = process.env.PORT || 3000;
app.listen(port);
console.log('已启动服务，端口', port);

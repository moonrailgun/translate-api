const Router = require('koa-router');
let router = new Router();

router.post('/translate', async (ctx) => {
  const data = ctx.request.body;
  ctx.body = data;
})

router.get('/translate', async (ctx) => {
  ctx.body = '请使用post方法';
})

module.exports = router;

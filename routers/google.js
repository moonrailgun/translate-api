const Router = require('koa-router');
const translate = require('google-translate-api');
let router = new Router();

router.post('/translate', async (ctx) => {
  const data = ctx.request.body;
  const {
    text,
    options = {to: 'zh-cn'}
  } = data;
  if(!text) {
    ctx.body = "请输入text";
    return;
  }

  try {
    console.log('translate request:', text, options);
    res = await translate(text, options);
    console.log('translate result:', res);
    ctx.body = res.text;
  }catch(err) {
    console.log('translate error:', err);
    ctx.body = err || '翻译失败';
  }
})

router.get('/translate', async (ctx) => {
  ctx.body = '请使用post方法';
})

module.exports = router;

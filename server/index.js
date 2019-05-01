const Koa = require('koa');
const koa = new Koa();


koa.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    const user = {
        id: 1,
        name: 'saber',
    }
    if (ctx.request.path === '/user') {
        ctx.response.body = user;
    }
    new Promise(() => {
        user.id++;
    })
    next();
})

module.exports = function() {
    console.log('server 3000 start...')
    koa.listen(3000);
}
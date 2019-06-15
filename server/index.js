const axios = require('axios');
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
    } else if(ctx.request.path === '/product') {
        let url = 'http://39.106.198.77:8100/product/api/product/getProductDetailById?productId=1';
        // let url = 'http://39.106.198.77:8100/home/api/floor-index';
        await axios.get(url).then(response => {
            console.log(response.data)
            ctx.response.body = response.data;
        }).catch(error => {
            console.log(error)
        })
    }
    new Promise(() => {
        user.id++;
    })
    next();
})

module.exports = function() {
    console.log('server port:3000 start...')
    koa.listen(3000);
}
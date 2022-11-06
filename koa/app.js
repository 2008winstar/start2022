const koa = require('koa')
const app = new koa();
const route = require('koa-route');
const serve = require('koa-static');
const path = require('path');
const co = require('co');
const views = require('koa-views');
const homeRoutes = require('./routes/homeRoutes');

app.use(views('views', { map: { html: 'swig' }}));
// app.use((ctx) => {
//   ctx.body = 'test';
// });
app.proxy = true;
app.use(route.get('/', homeRoutes.showHome));



app.listen(3000);
console.log('server listening on port 3000');
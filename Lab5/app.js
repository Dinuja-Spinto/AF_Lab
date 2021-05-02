const koa = require('koa');
const HomeRouter = require('./routes/home.routes');
const app = new koa();

app.use(HomeRouter.routes).use(HomeRouter.method);

app.use(ctx=>{
    ctx.body = "Hello World";
});

app.listen(3000,err=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Application is running on port 3000')
})
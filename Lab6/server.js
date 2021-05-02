const koa=require('koa');
const HomeRoutes = require('./route/home.router');
const PostRoutes = require('./route/post.route');
const bodyParser = require('koa-bodyparser');

require('./dal');
const app = new koa();
app.use(bodyParser());
app.use(HomeRoutes.routes())
.use(PostRoutes.allowedMethods());

app.use(PostRoutes.routes())
.use(PostRoutes.allowedMethods());

console.log("Server is running @ port 3000");
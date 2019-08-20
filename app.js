import express from 'express';
import { join } from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from './webpack.config';


const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  
app.get('/', function (req, res) {
    res.sendFile(join(__dirname, './src/index.html'))
});


app.listen(port, function(err) {
    if(err) {
        console.log(err)
    } else{
        open('http://localhost:' + port);
        
    }
});
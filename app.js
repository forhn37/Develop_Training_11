// 모듈선언
const http = require('http');
const fs = require('fs');

// 서버를 선언해 가독성위해 함
const server = http.createServer((req,res) => {

  function serverErrorLog() {
    res.writeHead(500);
    return res.end('서버에 문제가 생겼습니다.')
  }

  if(req.url === '/Login') {
    fs.readFile('./board/board.html', 'utf8', (err,data) => {
      if(err) {
        serverErrorLog();
      }
      res.writeHead(200, {'Content-Type':'text/html'});
      res.end(data);
    });
  } else if(req.url === '/Login' && req.method ==='POST')
})
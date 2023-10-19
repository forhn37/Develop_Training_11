// 모듈선언
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
var signUpAsset = require('./login/signUpAsset')

// 서버를 선언해 가독성위해 함
const server = http.createServer((req, res) => {

  function serverErrorLog() {
    res.writeHead(500);
    return res.end('서버에 문제가 생겼습니다.')
  }

  if (req.url === '/login') {
    fs.readFile('login/login.html', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  };
  if (req.url === '/login/css') {
    fs.readFile('login/login.css', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    });
  };
// login페이지에서 폼에서 만들어질 data를 담을 수단
  if(req.method === 'POST' && req.url === '/login') {
// body 선언
    let body = '';

    req.on('data', (chunk) => {
      body+= chunk.toString(); 
    })
    req.on('end', () => {
      const parsedBody = querystring.parse(body);
      const {id, password, passwordcopy, email} = parsedBody;

      console.log(parsedBody);
      console.log(parsedBody.id);
      console.log(parsedBody.password);
      console.log(parsedBody.passwordcopy);
      console.log(parsedBody.email);
      console.log(signUpAsset)

      let temp = Object.assign(signUpAsset, parsedBody);
      console.log(signUpAsset);
// ? 테스트해야할 수단 'Content-Type': 'text/plain'//
      res.writeHead(200, {'Content-Type': 'text/plain' })
      res.end("hello");
    })
    
  }
  if (req.url === '/board') {
    fs.readFile('board/board.html', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  };
  if (req.url === '/board/css') {
    fs.readFile('board/board.css', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    });
  };
})
server.listen(8000, () => {
  console.log('서버 정상실행되었습니다')
})  

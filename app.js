// 모듈선언
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const signUpAsset = require('./login/signUpAsset');
const titletext = require('./board/titletext');
const indexlist = require('./login/indexof')
const alpabetlist = require('./login/alpabet')
const checkpassword = require('./login/same');
const { isUtf8 } = require('buffer');


// 서버를 선언해 가독성위해 함
const server = http.createServer((req, res) => {

  function serverErrorLog() {
    res.writeHead(500);
    return res.end('서버에 문제가 생겼습니다.')
  }
  // 로그인페이지 get형식 최초입장
  if (req.url === '/login') {
    fs.readFile('login/login.html', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  };

  // 로그인 css 바로 설정하기 위해 get 호스팅
  if (req.url === '/login/css') {
    fs.readFile('login/login.css', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data)
    });
  };

  if (req.url === '/login/signupasset') {
    fs.readFile('login/signUpAsset.js', 'utf8', (err, data) => {
      if (err) {
        serverErrorLog();
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    });
  };

  // board에 post방식으로 내용 저장
  if (req.method === 'POST' && req.url === '/board') {
    // body 선언
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    })
    req.on('end', () => {
      const parsedBody = querystring.parse(body);
      const { id, password, passwordcopy, email } = parsedBody;

      // console.log(parsedBody);
      // console.log(parsedBody.id);
      // console.log(parsedBody.password);
      // console.log(parsedBody.passwordcopy)
      // console.log(parsedBody.email);
      // console.log(signUpAsset);

      signUpAsset.id = parsedBody.id;
      signUpAsset.password = parsedBody.password;
      signUpAsset.passwordcopy = parsedBody.passwordcopy;
      signUpAsset.email = parsedBody.email;


      let datayo = `const signUpAsset  = {
        id: "${signUpAsset.id}",
        password: "${signUpAsset.password}",
        passwordcopy: "${signUpAsset.passwordcopy}",
        email: "${signUpAsset.email}",
        inputBoxColor: "#D9D9D9",
        textColor: "#B6B6B6",
        pointColor: "#FF6666"
        }
        
        
        module.exports = signUpAsset;`
      fs.writeFile("login/signUpAsset.js", datayo, (err) => {
        if (err) {
          console.log("err")
        }
      })


      console.log(signUpAsset);
      // 정적페이지 작성
      const datalist =
        `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="http://localhost:8000/board/css"/>
  <!-- <script src = "./titletext.js" defer></script> -->
</head>

<body>
  <div id="root">
    <div id ="header">
      
      <ul><span id = "idvalue">${signUpAsset.id}</span>님! 반갑습니다.<br>저에게 편지를 보내주세요!</ul>
    </div>
    <form action="/storage" method="post">
      <div>
        <label for="title">Title</label>
        <input type="text" name="title">
      </div>
      <div>
        <label for="text">Text</label>
        <input type="text" name="text" id="Text">
      </div>
      <input type="submit" name="send" id ="send">
    </form>
  </div>
</body>
</html>`
      res.writeHead(301, { 'Content-Type': 'text/html' })
      if (alpabetlist(signUpAsset.id) === true &&
        checkpassword(signUpAsset.password, signUpAsset.passwordcopy) === true &&
        indexlist(signUpAsset.email) === true
      ) res.end(datalist)
    })
  }
  //  모듈 적용 후 테스트 시작 
  if (req.method === 'POST' && req.url === '/storage') {
    // body 선언
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    })
    req.on('end', () => {
      const parsedBody = querystring.parse(body);
      console.log(parsedBody);
      const { title, text } = parsedBody;

      titletext.title = parsedBody.title;
      titletext.text = parsedBody.text;

      console.log(parsedBody);
      console.log(titletext.title);
      console.log(titletext.text);

      let dataya = `const titletext  = {
        title: "${titletext.title}",
        text: "${titletext.text}",
        }
      console.log(titletext)
      module.exports = titletext;`
      fs.writeFile("board/titletext.js", dataya, (err) => {
        if (err) {
          console.log("err")
        }
      })
      // 제출버튼이 클릭이 안먹는 조건 만듬
      // ? 문제는 비활성화는 아니라는 것 연구해야함
      res.writeHead(301, { 'Content-Type': 'text/plain' })
      if(titletext.title !== "" && titletext.text !== "") {
        parsedBody.send
      res.end("hi")
      }
    });
  }


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
  console.log('http://localhost:8000/login')
})  

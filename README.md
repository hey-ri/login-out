# login-out

node.js, express.js, mongoDB를 이용하여 로그인 페이지 서버 만들기

## 실행하기

- local 실행 - `npm run start`
- 배포 실행 - `npm run dev`

## 파일 생성 방법

1. 터미널 열기
2. 해당 폴더를 만들 폴더에 들어가기
3. `mkdir project-name`
4. npm init
5. 엔터를 치면서 다음으로 넘어가며, 정보를 수정하거나 추가하고 싶을 시 넣어주기

## 사용된 패키지

- node.js : javascript를 서버사이드에서 쓸 수 있는 언어
- express : node.js는 자동차의 엔진이면 express.js는 그 엔진(node.js)을 이용하여 바퀴나 기타 자동차의 부품을 만드는 것. node.js를 쉽게 이용할 수 있게 하는 프레임워크 `npm i express --save`
- mongoos : mongoDB를 쉽게 쓸 수 있게 해주는 툴 `npm i mongoose --save`
- body-parser : 클라이언트에서 보내는 아이디, 비밀번호, 이메일 등의 정보를 받기 위한 것으로 body 데이터를 분석(parse)하여 req.body로 출력할 때 사용하였다. `npm i body-parser --save`
- postman : 데이터를 클라이언트에게 보낼 수 있게 간편하게 작성해서 화면에서 확인 가능하게 하는 것.
- nodemon : 소스 변경할 때 그걸 감지하여 자동으로 화면 리프레쉬만 해주면 서버를 재시작 해주는 툴. `npm i nodemon --save dev`
- bcrypt : 비밀번호를 암호화하여 데이터 베이스에 저장하도록 함 `npm i bcrypt --save`
- jsonwebtoken : 토큰 생성을 위한 라이브러리 `npm i jsonwebtoken --save`
- cookie-parser : express.js에서 지원하는 요청된 쿠키를 쉽게 추출할 수 있도록 도와주는 것 `npm i cookie-parser --save`

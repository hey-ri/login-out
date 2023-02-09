//production의 약자 prod 파일
//HEROKU 사이트에 config var를 설정해주고 mongoURI 부분의 key , value를 똑같이 넣어주어야 한다.
module.exports = {
  mongoURI: process.env.MONGO_URI,
};

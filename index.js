const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const { User } = require('./models/User');
const config = require('./config/key');

//application/x-www-form-urlencode
app.use(bodyParser.urlencoded({ extended: true }));

//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose
  .connect(config.mongoURI, {})
  .then(() => console.log('mongooDB connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요');
});

//회원가입을 위한 router만들기
app.post('/register', (req, res) => {
  //회원가입할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  }); //mongo db에서 들어오는 메소드 save
});

app.post('/login', (req, res) => {
  //요청된 이메일을 데이터베이스에서 있는지 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '해당 아이디가 없습니다. 다시 확인해주세요',
      });
    }
  });
  //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는지 확인한다.
  user.comparePassword(req.body.password, (err, isMatch) => {
    if (!isMatch) return res.json({ loginSuccess: false, message: '비밀번호를 다시 확인하세요' });
    //비밀번호까지 맞으면 token 생성 시킨다.
    user.generateToken((err, user) => {});
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

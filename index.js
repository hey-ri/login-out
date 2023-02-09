const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const { User } = require('./models/User');

//application/x-www-form-urlencode
app.use(bodyParser.urlencoded({ extended: true }));

//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose
  .connect('mongodb+srv://hyeri:qlqjs1234@boilerplate.8kofbi0.mongodb.net/?retryWrites=true&w=majority', {})
  .then(() => console.log('mongooDB connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

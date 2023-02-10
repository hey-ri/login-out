const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    // 공백 삭제기능 trim
    unique: 1,
  },
  password: {
    type: String,
    maxlength: 50,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre('save', function (next) {
  var user = this;
  //password가 수정 되었을 때 밑에 로직 수행
  if (user.isModified('password')) {
    //mongoose에 있는 pre()메소드를 활용해서 index.js에 있는 save 전에 pre()를 하라는 의미이다.
    //비밀번호를 암호화 시킨다.
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);

        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

//index.js 에 있는 comparePassword 메소드 생성
userSchema.methods.comparePassword = function (plainPassword, cb) {
  //plainPassword가 db의 암호화된 비밀번호가 같은지 체크
  //그렇다면 plain password를 암호화 시키고 그 암호화된 비밀번호와 같은지 비교한다.
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  var user = this;
  //jsonwebtoken을 이용해서 토큰 생성하기
  var token = jwt.sign(user._id.toHexString(), 'secretToken');
  // user._id + 'secretToken' = token [[user._id랑 secretToken을 합쳐서 token 생성하고
  // 그다음에
  // 'secretToken' 을 넣으면  user._id가 나옴
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

const User = mongoose.model('User', userSchema);

module.exports = { User };

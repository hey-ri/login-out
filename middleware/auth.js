const { User } = require('../models/User');

let auth = (req, res, next) => {
  //서버와 클라이언트 사이간 토큰 인증처리를 하는 곳
  //클라이언트 쿠키에서 토큰을 가져온다.
  let token = req.cookies.x_auth;
  //토큰을 jwt에서 복호화 (디코드) 하여 유저를 찾는다.
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });
    req.token = token;
    req.user = user;
    next();
  });
  //유저가 있으면 인증 okay
  //유저가 없으면 인증 no
};

module.exports = { auth };

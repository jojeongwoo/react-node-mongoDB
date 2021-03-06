const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //dhsdb 1541 @naver.com 을 dhsdb1541@naver.com로 trim
    unique: 1,
  },
  password: {
    type: String,
    minLength: 5,
  },
  tel: {
    type: String,
    maxLength: 50,
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

//save 메소드가 실행되기전에 비밀번호를 암호화하는 로직을 짜야한다
userSchema.pre("save", function (next) {
  const user = this;

  //model 안의 paswsword가 변환될때만 암호화
  if (user.isModified("password")) {
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

userSchema.methods.comparePassword = function (plainPassword, cb) {
  //plainPassword 1234567    암호회된 비밀번호 $2b$10$l492vQ0M4s9YUBfwYkkaZOgWHExahjWC
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  })
}

userSchema.methods.generateToken = function(cb) {
  //webtoken 생성하기
  const user = this

  const token = jwt.sign(user._id.toHexString(), 'secretToken')

  user.token = token;
  user.save(function(err, user) {
    if(err) return cb(err)
    cb(null, user)
  })
}

userSchema.statics.findByToken = function(token, cb) {
  const user = this;
  // user._id + ''  = token
  //토큰을 decode 한다. 
  jwt.verify(token, 'secretToken', function (err, decoded) {
      //유저 아이디를 이용해서 유저를 찾은 다음에 
      //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인
      user.findOne({ "_id": decoded, "token": token }, function (err, user) {
          if (err) return cb(err);
          cb(null, user)
      })
  })
}

const User = mongoose.model("User", userSchema);

module.exports = { User };
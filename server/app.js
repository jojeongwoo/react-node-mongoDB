const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser =require('cookie-parser');
const bcrypt = require("bcrypt");
const dateFormat = require('dateformat');

const saltRounds = 10;

const cors = require('cors');
const app = express();
const port = 9000;

const { User } = require('./models/User');
const { Vc } =require('./models/Vc');
const { auth } = require('./middleware/auth');

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const dbAddress = "mongodb+srv://whwjddn7364:wjddn1143214@cluster0.hhz5t.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose.connect(dbAddress, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
.then(() => console.log("MongoDB Connect"))
.catch((err) => console.log(err));

// 회원가입 라우터
app.post('/api/users/register', (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

// test 
app.get('/api/users/bring', (req, res) => {
  User.find((error, data) => {
      if(error) {
        return next(error)
      } else {
        res.json(data);
      }    
    });
});

// 회원탈퇴 기능
app.delete('/api/users/delete/:id', auth, async (req, res) => {

  await User.findByIdAndDelete({_id: req.user._id}).exec();
  res.send('success Delete');
})

// 비밀번호 수정
app.post('/api/users/changePassword', auth, (req, res, next) => {
  const user = new User(req.body);

  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) return next(err);
    if(req.body.changePassword === null) {
      return res.status(400).send({
        err
      })
    }
    bcrypt.hash(req.body.changePassword, salt, function(err, hash) {
      if(err) return next(err);
      req.body.changePassword = hash;
    });
  });

  user.save((err) => {
    User.findOneAndUpdate({_id: req.user._id}, 
      {password: req.body.changePassword},
      (err, user) => {
        if(err) return res.json({ change: false, err});
        return res.status(200).send({
          change: true
      });
    });
  })
});

// 로그인 라우터
app.post('/api/users/login', (req, res) => {
  // 요청된 아이디가 있는지 확인

  User.findOne({ email: req.body.email }, (err, user) => {
    if(!user) {
      return res.json({
        loginSuccess: false,
        message: "일치하는 ID가 없습니다."
      })
    }

    //아이디 확인 후 패스워드 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })

       //패스워드 일치 시 토큰 생성
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        // 토큰을 저장한다. 
        res.cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id })
      })
    })
  })
});

// auth 라우터
app.get('/api/users/auth', auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    tel: req.user.tel,
    password: req.user.password,
  })
})

// 로그아웃 라우터
app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id}, 
  { token: "" },
  (err, user) => {
    if(err) return res.json({ success: false, err});
    return res.status(200).send({
      success: true
    })
  })
}) 

// 개인정보
app.get('/api/users/info', auth, (req, res) => {
  res.status(200).json({
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    tel: req.user.tel,
  })
})

// VC 신청
app.post('/api/users/apply', async (req, res) => {
  const Email = req.body.email;
  const Name = req.body.name;
  const Hospital = req.body.hospital;
  const Disease = req.body.disease;
  const Doctor = req.body.doctor;
  const Price =req.body.price;

  const now = new Date();
  const date = dateFormat ( now ,  "yyyy. mm. dd" ); 
  const apply = new Vc({ email: Email, name: Name, hospital: Hospital, disease: Disease, doctor: Doctor, price: Price, date: date });

  try {
    await apply.save();
    res.send('success');
  } catch(err) {  
    console.log(err);
  }
});


// VC 리스트
app.get('/api/users/list', auth, async (req, res) => {
  Vc.find({"email": "whwjddn7364@gmail.com"},(err, result) => {
    if(err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.listen(port, () => console.log(`listening on port ${port}!`));

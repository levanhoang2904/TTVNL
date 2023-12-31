const express = require('express');
const {getHome, POSTcreateUsers, CreateAccount, GetData, GetCards, login, GetSP, Getall,
   addCard, ADDCARDS, ADDCART, HomeCards, GetCart, tkiem, deleteItem, UpdateCong, UpdateTru, 
   InseretHD, GetRams, UpdateCard, GetProId, DeleteCard, Homeloai, ADDLoai, Deleteloai, GetloaiId, UpdateLoai} = require('../controllers/homeController');
const {dangnhap} = require('../controllers/login')
const router = express.Router();
const connection = require('../config/database');



router.get('/', getHome)
router.post('/create-users', POSTcreateUsers)
router.get('/create', CreateAccount)
router.get('/api/Cards', GetCards) // Lấy data Card theo maloai
router.get('/api/rams', GetRams)
router.get('/login', login)
router.post('/logins', dangnhap)
router.get('/api/getcart', GetCart)
router.post('/api/cartpost', ADDCART )
router.get('/add-Card', addCard) // PAGE ADD CARD
router.post('/add-card-result', ADDCARDS) // Hiển thị kết quả add Card
router.post('/api/search', tkiem)
router.post('/api/deleteItem', deleteItem)
router.get('/api/incr', UpdateCong)
router.get('/api/decr', UpdateTru)
router.get('/api/insertHD', InseretHD)
router.get('/user', (req, res) => {
  // Kiểm tra phiên và truy xuất tên người dùng
  const username = req.session.username;

  if (!username) {
    res.status(401).send('Chưa đăng nhập');
  } else {
    res.send({ username });
  }
});
//Home Products
router.get('/HomeCards', HomeCards) // Home hiển thị sản phẩm
router.get('/trangchu', Getall)
router.get('/delete/:id', DeleteCard) // Xóa sản phẩm
router.get('/edit/:id', GetProId)// In ra thong tin san pham can update
router.post('/update', UpdateCard)
router.get('/Homeloai', Homeloai) // Home loai
router.post('/addloai', ADDLoai)
router.get('/deleteloai/:MaLoai', Deleteloai) // Xóa sản phẩm
router.get('/editloai/:MaLoai', GetloaiId )// In ra thong tin san pham can update
router.post('/updateloai', UpdateLoai)
  module.exports = router;
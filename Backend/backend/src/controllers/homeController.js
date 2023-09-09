 const { create } = require('handlebars');
const connection = require('../config/database');
const { json } = require('express');

const bcrypt = require('bcrypt');
const saltRounds = 10;


 const POSTcreateUsers = async(req, res) => {
   let hoten = req.body.name;
   let email = req.body.email;
   let matkhau = await hashUserPassword(req.body.password);
   console.log('req body: ', 'hoten: ', hoten, 'email: ', email, 'matkhau: ', matkhau)
   if(hoten && email && matkhau) {
      connection.query(
         'Select * from Users where email = ?',[email],
         function(err, results){
            if(results.length>0) {
               res.status(500).json('Email da ton tai')
            }
            else {
               connection.query(
                  'Insert into Users (hoten, email, matkhau) values (?, ?, ?) ', [hoten, email, matkhau],
                  function(err, results){
                     if(err){
                        console.error('Loi he thong', err)
                        res.status(404).json({success: false, message: 'Da xay ra loi'})
                     }
                     else {
                        res.status(200).json('TC')
                     }
                     
                  }
               )
            }
         }
      )
   }
   else {
      res.status(501).json('Vui long nhap thong tin')
   }
}

let hashUserPassword = (password) => {
   return new Promise(async(resolve, reject) => {
       try {
           var hashPassword = await bcrypt.hashSync(password, saltRounds);
           resolve(hashPassword);
       } catch (e) {
           reject(e);
       }
   })
}

            
const GetCards = (req, res) => {
   connection.query(
      'select * from Products where Maloai = "VGA"',
      function(err, results) {
         console.log("Results = ", results); // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         
          res.status(200).json(results)
       }
   );
 }

 const GetRams = (req, res) => {
   connection.query(
      'select * from Products where Maloai = "RAM"',
      function(err, results) {
         console.log("Results = ", results); // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         
          res.status(200).json(results)
       }
   );
 }

 const GetCart = (req, res) => {
   const id = req.query.id
   connection.query(
      'select * from Cart where id = ?',[id],
      function(err, results) {
         console.log("Results = ", results); // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         
          res.status(200).json(results)
       }
   );
 }



 
 const ADDCARDS = (req, res) => {
   let TenCard = req.body.name;
   let SoLuong = req.body.SL;
   let GiaBan = req.body.GB;
   let HinhAnh = req.body.HA;


   connection.query(`Insert into Products (TenCard, SoLuong, GiaBan, HinhAnh) 
   values (?, ?, ?, ?)`,[TenCard, SoLuong, GiaBan, HinhAnh],
   function(err, results){
     
      if(err) res.status(500).json('Loi he thong')
      res.status(200).json('TC');
   }
   )
 }

 
 const ADDCART = (req, res) => {
   let Idpro = req.body.Idpro;
   let IdUser = req.body.IdUser;
   let title = req.body.title;
   let price = req.body.price;
   let img = req.body.imageLink
  
   console.log('====================================');

   connection.query(
       'SELECT * FROM cart WHERE idProduct = ? AND id = ?', [Idpro, IdUser],
       function(err, results) {
           if (err) {
               console.error(err);
               return res.status(500).json('Lỗi hệ thống');
           }

           if (results.length > 0) {
               connection.query(
                   'UPDATE cart SET quantity = quantity + 1, Thanhtien = quantity * price WHERE idProduct = ? AND id = ?', [Idpro, IdUser],
                   function(updateErr, updateResults) {
                       if (updateErr) {
                           console.error(updateErr);
                           return res.status(500).json('Lỗi hệ thống');
                       }

               
                       
                       return res.status(200).json('Thành công');
                   }
               );
           } else {
               // If no existing cart entry, you might want to insert a new row
               connection.query(
                   'INSERT INTO cart (id, idProduct, title, quantity, price, Thanhtien, img) VALUES (?,?,?,1,?,price * 1, ?)',
                   [IdUser, Idpro, title, price, img],
                   function(insertErr, insertResults) {
                       if (insertErr) {
                           console.error(insertErr);
                           return res.status(500).json('Lỗi hệ thống');
                       }
                       
                       return res.status(200).json('Thành công');
                   }
               );
           }
       }
   );
}
 
 const HomeCards = (req, res) =>{
   connection.query(`Select * from Products`, function(err, results){
      if(err) throw err;
      res.render('table.ejs', ({data: results}))
      // res.status(200).json(results)
   })
 }

 const Getall = (req, res) =>{
   connection.query(`Select * from Products`, function(err, results){
      console.log("Results = ", results);
      if(err) res.status(500).json('Loi he thong')
      res.status(200).json(results);
   })
 }







 const GetCPUs = (req, res) => {
   connection.query(
      'select * from Products where MaLoai = "CPU"',
      function(err, results) {
         console.log("Results = ", results); // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         
          res.status(200).json(results)
       }
   );
 }

 const GetCPUAs = (req, res) => {
   connection.query(
      'select * from Products where MaLoai = "CPU" and Hang = "AMD"',
      function(err, results) {
         console.log("Results = ", results); // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         
          res.status(200).json(results)
       }
   );
 }

 const GetCPUIs = (req, res) => {
   connection.query(
      'select * from Products where MaLoai = "CPU" and Hang = "Intel"',
      function(err, results) {
         console.log("Results = ", results); // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         
          res.status(200).json(results)
       }
   );
 }

 const GetUsers = (req, res) => {
   connection.query(
      'select * from Users',
      function(err, results) {
         console.log("Results = ", results); // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         
          res.status(200).json(results)
       }
   );
 }



 const getHome = (req, res)=>{
   
   return res.render('home.ejs')
}

 const CreateAccount = (req, res) => {
   res.render('create.ejs')
 }

 const login = (req, res) =>{
   res.render('login.ejs')
 }
const addCard = (req, res)=> {
   res.render('addCard.ejs')
}

const tkiem = (req, res) =>{
   let key = req.body.key;
   connection.query(
      'select * from Products where title like "%"?"%"',[key],
      function(err, results) {
         console.log("Results = ", results); // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         
          res.status(200).json(results)
       }

   );
 }

 const deleteItem = (req, res) => {
    const id = req.body.id
   connection.query(
      'delete from cart where idCart = ?',[id],
      function(err, results) {
         console.log("Results = ", results); // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         console.log(id)   
          res.status(200).json(results)
       }
   );
 }


const UpdateCong = (req, res) =>{
   let idcart = req.query.idcart
   let quantity = req.query.quantity
   connection.query('UPDATE cart set quantity = quantity + 1, thanhtien = price * quantity where idcart = ?',[idcart],
    function(err, results){
      if(err) throw err;

      res.status(200).json(results)
      // res.status(200).json(results)
   })
 }

 const UpdateTru = (req, res) =>{
   let idcart = req.query.idcart
   
   
      console.log(1)
   connection.query('UPDATE cart set quantity = quantity - 1, thanhtien = price * quantity where idcart = ?',[idcart],
    function(err, results){
      if(err) throw err;

      res.status(200).json(results)
      // res.status(200).json(results)
   })

 }

 const InseretHD = (req, res) =>{
   console.log('====================================');
   console.log(req.query.date);
   console.log('====================================');
   connection.query('Insert into HoaDon(id, ngaymua, tinhtrang)  values(?, CURDATE(), 0)',[req.query.id],
    function(err, results){
      if(err) throw err;

      res.status(200).json(results)
      // res.status(200).json(results)
   })
}


const GetProId = (req, res) => {
   connection.query(
      `select * from Products where id = ${req.params.id}`,
      function(err, result) {
         // console.log("Results = ", results); // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
        if(err) throw err;
         data ={
            // id:results.Id,
            title:result[0].title,
            quantity:result[0].quantity,
            price:result[0].price,
            pricesale:result[0].pricesale,
            imagecategory:result[0].imagecategory,
            discount:result[0].discount,
            maloai:result[0].MaLoai,
            hang:result[0].Hang


         }
         res.render('edit.ejs', {data})
       }
   );
 }


 const UpdateCard = (req, res) => {
   let TenCard = req.body.name;
   let SoLuong = req.body.SL;

   let GiaBan = req.body.GB;
   let GiaSale = req.body.GBS
   let HinhAnh = req.body.HA;
   let DC = req.body.DC;
   let MaLoai = req.body.ML;
   let Hang = req.body.Hang;
   connection.query(
      `UPDATE products SET title=?,quantity=?,price=?,pricesale=?,imagecategory=?,
      discount=?,MaLoai=?,Hang=? where id = ${req.params.id}`,[TenCard, SoLuong, GiaBan, GiaSale, HinhAnh, DC, MaLoai, Hang]
      
      ,
      function(err, result) {
         if(err) throw err
          // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         res.redirect('/HomeCards')
       }
   );
 }

const DeleteCard = (req, res) =>{
   connection.query(`Delete from products where id  = ${req.params.id}`,
   function(err){
      if(err) throw err;
      res.redirect('/HomeCards')
   })
   
 }
const Homeloai = (req, res) =>{
   connection.query(`Select * from loailinhkien`, function(err, results){
      if(err) throw err;

      res.render('adminloai.ejs', ({data: results}))
      // res.status(200).json(results)
   })
 }

const ADDLoai = (req, res) => {
   let TenLoai = req.body.TL;
   let maloai = req.body.ML;
   


   connection.query(`Insert into loailinhkien (MaLoai, TenLoai) 
   values (?, ?)`,[maloai, TenLoai],
   function(err, results){
      console.log("Results = ", results);
      if(err) res.status(500).json('Loi he thong')
      res.status(200).json('TC');
   }
   )
 }

const Deleteloai = (req, res) =>{
   connection.query(`Delete from loailinhkien where maloai  = ${req.params.MaLoai}`,
   function(err){
      if(err) throw err;
      res.redirect('/Homeloai')
   })
   
 }


const GetloaiId = (req, res) => {
   connection.query(
      `select * from loailinhkien where MaLoai = ?`,[req.params.MaLoai],
      function(err, result) {
         // console.log("Results = ", results); // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
        if(err) throw err;
         data ={
            // id:results.Id,
            TenLoai:result[0].TenLoai,
            maloai:result[0].MaLoai,
            


         }
         console.log("dsada");

         res.render('editloai.ejs', {data})
       }
   );
 }

 const UpdateLoai = (req, res) => {
   let TenLoai = req.body.TL;
   let MaLoai = req.body.ML;

  
   connection.query(
      `UPDATE loailinhkien SET TenLoai=? where MaLoai = ?`,[TenLoai, MaLoai]
      
      ,
      function(err, result) {
         if(err) throw err
          // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         res.redirect('/Homeloai')
       }
   );
 }






 module.exports = {
   getHome, POSTcreateUsers, CreateAccount, GetUsers, login, Getall, GetCards, GetCPUIs,
    GetCPUAs, addCard, ADDCARDS, HomeCards, GetCart, ADDCART, tkiem, deleteItem, UpdateCong, UpdateTru, 
    InseretHD, GetRams, UpdateCard, GetProId, DeleteCard, Homeloai, ADDLoai, Deleteloai, GetloaiId, UpdateLoai
 };
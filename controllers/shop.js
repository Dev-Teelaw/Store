
const Product = require("../models/product");
const path = require('path');


exports.getProducts = (req, res) => {
   Product.fetchAll(products =>{
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
      
    });
  });
 
};

exports.getIndex =(req ,res ,next)=>{
  Product.fetchAll(products =>{
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
     
    });
  });
 
}

exports.getCart =(req,res,next)=>{
  res.render('shop/cart', {
    pageTitle: 'Your Cart',
    path: '/cart',
   
  });
}

exports.getCheckout=(req,res ,next)=>{
  res.render=("shop/checkout",{
    pageTitle: 'checkout',
    path: '/checkout',
  })
}


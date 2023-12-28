const Product = require("../models/product");
const path = require('path');

exports.getAddProduct = (req, res) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };
  
  exports.postAddProduct = (req, res) => {
    const title =req.body.title;
    const imageUrl=req.body.imageUrl;
    const price =req.body.price;
    const description=req.body.description
    const product =new Product(title,imageUrl,description,price)
    product.save();
    res.redirect('/');
  };
exports.getProduct=(req,res,next )=>{
    Product.fetchAll(products =>{
        res.render('admin/products', {
          prods: products,
          pageTitle: 'Admin',
          path: '/admin/products',
         
        });
      });   
}
  
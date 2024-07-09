const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.send(products);
};

exports.getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send('Product not found.');
    res.send(product);
};

exports.createProduct = async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.send(product);
};

exports.updateProductById = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).send('Product not found.');
    res.send(product);
};

exports.deleteProductById = async (req, res) => {
    const product = await Product.findByIdAndRemove(req.params.id);
    if (!product) return res.status(404).send('Product not found.');
    res.send(product);
};

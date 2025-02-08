const Product = require('../models/Product');

const addProduct = async (req, res, next) => {
  try {
    const { titre, prix, description } = req.body;
    const product = new Product({ titre, prix, description });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { titre, prix, description } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { titre, prix, description },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: 'Produit non trouvé' });
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Produit non trouvé' });
    }
    res.json({ message: 'Produit supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};

module.exports = { addProduct, getAllProducts, updateProduct, deleteProduct };

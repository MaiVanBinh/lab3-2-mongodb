const PRODUCTS = [
  {
    imageLink: "http://mvbinz.xyz/images/1.jpg",
    name: "Rayon a-line Dress",
    price: "13.45",
    type: "Orther",
  },
];

module.exports = {
  getProducts: function (req, res, next) {
    return res.status(200).json({ products: PRODUCTS });
  },
  createProducts: function (req, res, next) {
    const product = req.body;

    // Output the product to the console for debugging
    console.log(product);
    PRODUCTS.push({ ...product });

    res.status(201).json({ mess: "Products is added to the database" });
  },
};

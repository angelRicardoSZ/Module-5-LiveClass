const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render("products", {
			products:products,
			toThousand
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let id = req.params.id;
		let product = products.find(product => product.id == id)
		res.render("detail", {
			product:product,
			toThousand
		})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let newProduct = {
			id:products[products.length - 1].id + 1,
			...req.body,
			image: req.file.filename
		};
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/');
	},

	// Update - Form to edit
	edit: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)
		res.render("product-edit-form", {productToEdit:productToEdit})
	},
	// Update - Method to update
	update: (req, res) => {

		// Get id
		let id = req.params.id;

		// Create new product based on id
		let productToEdit = products.find(product => product.id == id);

		// Update the product with the new paramteres
		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: productToEdit.image,
		};

		// Update the new parameteres of product in the products
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		});

			
		// Write the final array of products
		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.redirect('/');


	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.redirect('/products');
	}
};

module.exports = controller;
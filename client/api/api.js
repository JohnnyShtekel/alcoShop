import axios from 'axios';

export const initStorage = () => {
  try {
    const serializedProducts = JSON.stringify(require('../data/products.json'));
    const serializedCart = JSON.stringify(require('../data/cart.json'));
    if (!localStorage.getItem('reactminishop')) {
      localStorage.setItem('reactminishop', serializedProducts);
    }

    if (!localStorage.getItem('reactminicart')) {
      localStorage.setItem('reactminicart', serializedCart);
    }
  } catch (e) {

  }
};

export const setProducts = (products) => {
  try {
    const serializedProducts = JSON.stringify(products);
    localStorage.setItem('reactminishop', serializedProducts);
  } catch (e) {

  }
};

export const setCart = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem('reactminicart', serializedCart);
  } catch (e) {
  }
};

export const getProducts = () => {
    return axios.get('/getProducts')
};


export const getCategories = () => {
    return axios.get('/getCategories')
};

export const login = (email,password) => {

    return axios.post('/login', { userName: email, password: password })

};

export const getCart = () => {
  try {
    return JSON.parse(localStorage.getItem('reactminicart'));
  } catch (e) {
    return undefined;
  }
};

export const deleteProduct = (productId) => {
  return axios.post('/delete-product', { productId: productId})
};

export const addProduct = (product) => {
  return axios.post('/add-product', { product: product})
};

export const editProduct = (fieldName,fieldValue,productId) => {
  return axios.post('/edit-product', { fieldName: fieldName, fieldValue: fieldValue, productId: productId})
};


export const removeStorage = () => {
  window.onunload = function() {
    // localStorage.clear();
  };
};

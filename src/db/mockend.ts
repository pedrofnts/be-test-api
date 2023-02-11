import axios from "axios";

const users = axios.get('https://mockend.com/juunegreiros/BE-test-api/users');

const products = axios.get('https://mockend.com/juunegreiros/BE-test-api/products');

export { users, products };
import axios from "axios";

const API_URL = "http://localhost:30000/api";

const getProducts = async () => {
  try {
    const results = await axios.get(`${API_URL}/products`);
    return results.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (_id) => {
  try {
    const results = await axios.get(`${API_URL}/products/${_id}`);
    return results.data.data;
  } catch (error) {
    console.log(error);
  }
};

export { getProducts, getProduct };

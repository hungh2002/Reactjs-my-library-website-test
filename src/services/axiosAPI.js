import axios from 'axios';

const baseUrl = 'http://localhost:8080/api';

const bookData = axios.create({ baseURL: baseUrl });

const apiGetAllData = async (url) => {
  try {
    const response = await bookData.get(url);
    return response.data;
  } catch (error) {
    console.error('api GET method (get all data) ', error);
  }
};

const apiPostData = async (url, data) => {
  try {
    bookData.post(url, data);
  } catch (error) {
    console.error('api POST method (post new book) ', error);
  }
};

const apiFindById = async (url, id) => {
  try {
    const response = await bookData.get(url, { params: { bookId: id } });
    return response.data;
  } catch (error) {
    console.error('api GET method (find by id) ', error);
  }
};

export { apiGetAllData, apiPostData, apiFindById };

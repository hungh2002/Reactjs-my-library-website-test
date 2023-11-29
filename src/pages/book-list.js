import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './../scss/book-list.scss';
import { apiGetAllData } from '../services/axiosAPI.js';

const BookList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    let url = '/book';
    const response = await apiGetAllData(url);
    setData(response);
  };

  const mapData = () => {
    return data.map((element) => {
      return (
        <Link to={`article-detail/${element.bookId}`} key={element.bookId}>
          <figure>
            <img
              src={`http://localhost:8080/${element.thumbnail}`}
              alt={element.title}
            />
            <figcaption>{element.title}</figcaption>
          </figure>
        </Link>
      );
    });
  };

  return <div id='book-list'>{mapData()}</div>;
};

export default BookList;

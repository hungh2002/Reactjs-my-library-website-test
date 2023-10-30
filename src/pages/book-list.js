import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./../scss/book-list.scss";

const BookList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/books");

      return setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const mapData = () => {
    return data.map((element) => {
      return (
        <Link to={"article-detail"} key={element.bookId}>
          <div>{element.thumbnail}</div>
          <div>{element.title}</div>
        </Link>
      );
    });
  };

  return <div id="book-list">{mapData()}</div>;
};

export default BookList;

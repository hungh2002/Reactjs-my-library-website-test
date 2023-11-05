import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import { apiFindById } from '../services/axiosAPI.js';

const ArticleDetail = ({ params }) => {
  const { bookId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getDataById();
  });

  const getDataById = async () => {
    let url = '/book/article-detail';
    try {
      const response = await apiFindById(url, bookId);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  };

  // const mapData = () => {
  //   return data.map((element) => {
  //     return (
  //       <div key={element.bookId}>
  //         <img
  //           src={`http://localhost:8080/${element.thumbnail}`}
  //           alt={element.title}
  //         />
  //       </div>
  //     );
  //   });
  // };

  return (
    <article>
      <img src=
      {`http://localhost:8080/${data.thumbnail}`} />
    </article>
  );
};

export default ArticleDetail;

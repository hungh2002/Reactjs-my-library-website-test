import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import { apiGetDataWithParams } from '../services/axiosAPI.js';
import './../scss/article-detail.scss';

const ArticleDetail = () => {
  const { bookId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getDataById();
  });

  const getDataById = async () => {
    let url = '/book/article-detail';
    try {
      const response = await apiGetDataWithParams(url, { bookId: bookId });
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
    <div id='article-detail'>
      <figure>
        <img src={`http://localhost:8080/${data.thumbnail}`} alt={data.title} />
        <figcaption>{data.title}</figcaption>
      </figure>
      <article>
        <img src={`http://localhost:8080/${data.thumbnail}`} />
      </article>
    </div>
  );
};

export default ArticleDetail;

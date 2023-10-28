import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const BookList = () => {
  
//   const [data, setData] = useState([]);
//   
//   useEffect(() => {
//     getData();
//   });
//   
//   const getData = async() => {
//     try {
//     const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1cec93539b354008ac08bbd2181771a6');
//     return setData(response.data.articles);
//     
//     } catch (error) {
//       console.error(error);
//   }
//   };

  return (
    <div id="book-list">
{//       {data.map((element) => {
//         return (
//           <Link to={'article-detail'}>
//             {element.title}
//             <img src={element.urlToImage} />
//           </Link>
//         );
//       })}
}
      <Link to={'article-detail'}>
        <h1>Title</h1>
        <p>Content</p>
      </Link>
    </div>
  );
}

export default BookList;
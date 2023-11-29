import {
  apiPostData,
  apiGetAllData,
  apiGetDataWithParams,
} from '../services/axiosAPI.js';
import { useState, useEffect } from 'react';

const AddChapter = () => {
  const [image, setImage] = useState([]);
  const [data, setData] = useState([]);
  const [dataById, setDataById] = useState({});
  const [bookId, setBookId] = useState(0);
  let count = 0;

  useEffect(() => {
    getData();
  });

  const handleSubmission = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    let url = `/chapter?bookId=${data.bookId}`;
    await apiPostData(url, formData);
  };

  const getData = async () => {
    let url = '/book';
    const response = await apiGetAllData(url);
    setData(response);
  };

  const getDataById = async (id) => {
    setBookId(id);
    let url = '/book/article-detail';
    try {
      const response = await apiGetDataWithParams(url, { bookId: bookId });
      setDataById(response);
    } catch (error) {
      console.error(error);
    }
  };

  // const handleOneChangeChapter = (e) => {
  //   const data = Object.values(e.files);
  //   setImage(data);
  // };

  const mapData = () => {
    return data.map((element) => {
      return (
        <option key={element.bookId} value={element.bookId}>
          <div>{element.title}</div>
          {setBookIdValue(element.bookId)}
        </option>
      );
    });
  };

  const setBookIdValue = (id) => {
    while (count == 0) {
      setBookId(id);
      count++;
    }
  };

  return (
    <>
      <select value={bookId} onChange={(e) => getDataById(e.target.value)}>
        <option value='0'></option>
        {mapData()}
      </select>
      <img
        src={`http://localhost:8080/${dataById.thumbnail}`}
        alt={dataById.thumbnail}
      />

      <form onSubmit={handleSubmission} encType='multipart/form-data'>
        {/* <label htmlFor='file'>image</label>
      <input
        type='file'
        name='files'
        multiple
        onChange={(e) => handleOneChangeChapter(e.target)}
      />
      <br /> */}

        <label htmlFor='chapter'>chapter</label>
        <input type='text' name='chapter' />
        <br />
        <label htmlFor='file'>File path</label>
        <input type='text' name='file' />

        <br />
        <br />
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};

export default AddChapter;

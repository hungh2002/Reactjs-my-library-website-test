import toBase64 from './../services/base64.js';

import { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [thumbnail, setThumbnail] = useState('');
  const handleOneChangeThumbnail = async (file) => {
    const data = await toBase64(file);
    setThumbnail(`${data}`);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const title = formData.get('title');
    const content = formData.get('content');

    await axios.post('http://localhost:8080/api/books', {
      title: title,
      content: content,
      thumbnail: thumbnail,
    });
  };

  return (
    <form onSubmit={handleSubmission}>
      <label htmlFor='title'>Title:</label>
      <br />
      <input type='text' name='title' />
      <br />
      <label htmlFor='content'>content:</label>
      <br />
      <input type='text' name='content' />
      <br />
      <label htmlFor='thumbnail'>Thumbnail:</label>
      <br />
      <input
        type='file'
        name='thumbnail '
        onChange={(e) => handleOneChangeThumbnail(e.target.files[0])}
      />

      <br />
      <br />
      <input type='submit' value='Submit' />
    </form>
  );
};

export default AddBook;

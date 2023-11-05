import { apiPostData } from '../services/axiosAPI.js';
import axios from 'axios';

const AddChapter = () => {
  const handleSubmission = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const file = formData.get('file');

    let url = '/chapter';
    await axios.post(
      'http://localhost:8080/api/chapter',
      { file: file },
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
  };

  return (
    <form onSubmit={handleSubmission} encType='multipart/form-data'>
      <label htmlFor='file'>image</label>
      <input type='file' id='file' name='file' multiple />

      <br />
      <br />
      <input type='submit' value='Submit' />
    </form>
  );
};

export default AddChapter;

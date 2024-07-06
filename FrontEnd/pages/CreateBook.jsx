import {useState} from 'react';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import {useNavigate} from "react-router-dom"
import axios from "axios"

const CreateBook = () => {
  const [title,setTitle]=useState('');
  const [loading,setLoading]=useState();
  const [author,setAuthor]=useState('');
  const [publishYear,setPublishYear]=useState('');
  const navigate=useNavigate();
  const handleSaveBook=()=>{
    const data={
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios
    .post('http://localhost:5000/books',data)
    .then(()=>{
      setLoading(false);
      navigate('/');
    })
    .catch((error)=>{
      setLoading(false);
      alert('error occured, check console');
      console.log(error);
    })
  }
  return (
    <div className='create_books'>
      <BackButton />
      <h1>Create Book</h1>
      {loading?(
        <Spinner />
      ):("")}
      <div className='create_book'>
        <div className="input_item">
          <label className='label'>Title</label>
          <input 
          type="text"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className='input_title'
           />
        </div>
        <div className="input_item">
          <label className='label'>Author</label>
          <input 
          type="text"
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
          className='input_author'
           />
        </div>
        <div className="input_item">
          <label className='label'>Publish Year</label>
          <input 
          type="text"
          value={publishYear}
          onChange={(e)=>setPublishYear(e.target.value)}
           className='input_year'
           />
        </div>
        <button onClick={handleSaveBook}>save</button>
      </div>
    </div>
  )
}

export default CreateBook
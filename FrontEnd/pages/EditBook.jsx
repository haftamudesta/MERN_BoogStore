import {useState,useEffect} from 'react';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import {useNavigate} from "react-router-dom"
import axios from "axios"
import {useParams} from "react-router-dom";

const EditBook = () => {
  const [title,setTitle]=useState('');
  const [loading,setLoading]=useState();
  const [author,setAuthor]=useState('');
  const [publishYear,setPublishYear]=useState('');
  const navigate=useNavigate();
  const {id}=useParams();
  useEffect(()=>{
    setLoading(true);
    axios
    .get(`http://localhost:5000/books/${id}`)
    .then((response)=>{
      setAuthor(response.data.book.author);
      setPublishYear(response.data.book.publishYear);
      setTitle(response.data.book.title);
      setLoading(false);
    })
    .catch((error)=>{
      setLoading(false);
      alert('error occured, check console');
      console.log(error);
    })
  },[])
  const handleEditBook=()=>{
    const data={
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios
    .put(`http://localhost:5000/books/${id}`,data)
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
    <div className='create_book'>
      <BackButton />
      <h1>Edit Book</h1>
      {loading?(
        <Spinner />
      ):("")}
      <div>
        <div className="input_item">
          <label className='label'>Title</label>
          <input 
          type="text"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
           />
        </div>
        <div className="input_item">
          <label className='label'>Author</label>
          <input 
          type="text"
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
           />
        </div>
        <div className="input_item">
          <label className='label'>Publish Year</label>
          <input 
          type="text"
          value={publishYear}
          onChange={(e)=>setPublishYear(e.target.value)}
           />
        </div>
        <button onClick={handleEditBook}>save</button>
      </div>
    </div>
  )
}

export default EditBook
import {useEffect,useState} from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from "axios";
import {useParams} from "react-router-dom";

const ShowBook = () => {
  const [book,setBook]=useState({});
  const [loading,setLoading]=useState(false);
  const {id}=useParams();
  useEffect(()=>{
    setLoading(true);
    axios
    .get(`http://localhost:5000/books/${id}`)
        .then((response)=>{
            setBook(response.data.book);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false)
        })
  },[])
  console.log(book);
  return (
    <div>
      <BackButton />
      <h1 className="book">Show Book</h1>
      {loading?(
          <Spinner />
        ):(
          <div className="book_main">
            <div className="book_main-details">
              <span>id</span> <span>{book._id}</span>
            </div>
            <div className="book_main-details">
              <span>Title</span> <span>{book.title}</span>
            </div>
            <div className="book_main-details">
              <span>Author</span> <span>{book.author}</span>
            </div>
            <div className="book_main-details">
              <span>Publish Year</span> <span>{book.publishYear}</span>
            </div>
            <div className="book_main-details">
              <span>Created at</span> <span>{new Date().toString()}</span>
            </div>
            
          </div>
          
        )
      }
    </div>
  )
}

export default ShowBook
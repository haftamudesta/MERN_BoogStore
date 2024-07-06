import { useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import {useParams,useNavigate} from "react-router-dom";

const DeleteBook = () => {
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const {id}=useParams();
  const handleDeleteBook=()=>{
    setLoading(true);
    axios
    .delete(`http://localhost:5000/books/${id}`)
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
    <div className="delete_main">
      <BackButton />
      <h1>Delete Book</h1>
      {
        loading?(
          <Spinner />
        ):('')
      }
      <div>
        <h4>Are you sure you want to delete this book</h4>
        <button onClick={handleDeleteBook}>Yes</button>
      </div>
    </div>
    
  )
}

export default DeleteBook
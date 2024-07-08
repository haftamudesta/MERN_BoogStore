import {useEffect,useState} from 'react';
import axios from "axios";
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from "react-icons/ai";
import {BsInfoCircle} from "react-icons/bs";
import {MdOutlineDelete} from "react-icons/md"

const Home = () => {
    const [books,setBooks]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true);
        axios
        .get('http://localhost:5000/books')
        .then((response)=>{
            setBooks(response.data.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setBooks(false);
        })
    },[])
  return (
    <div className='main_container'>
        <div className='book_list'>
        <h1>Book List</h1>
    </div>
    {loading?(
        <Spinner />
    ) : (
        <table className='table'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publish Year</th>
                    <th>operation</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book,index)=>(
                    <tr key={book._id}>
                    <td  className='book_title'>{index+1}</td>
                    <td  className='book_title'>{book.title}</td>
                    <td  className='book_title'>{book.author}</td>
                    <td  className='book_title'>{book.publishYear}</td>
                    <td>
                        <div className='actions'>
                            <div className='veiw_book'>
                            <Link to={`/books/details/${book._id}`}>
                            <BsInfoCircle />
                            <p>View</p>
                            </Link>
                            </div>
                            <Link to={`/books/edit/${book._id}`}>
                               <AiOutlineEdit /> 
                            </Link>
                            <Link to={`/books/delete/${book._id}`}>
                               <MdOutlineDelete /> 
                            </Link>
                        </div>
                    </td>
                    </tr>
                    
                ))
                }
            </tbody>
        </table>
)}
</div>
  )
}

export default Home
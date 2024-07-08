import { Link } from "react-router-dom"
import {MdOutlineAddBox} from "react-icons/md"

const NavBar = () => {
  return (
    <div className="nav_bar">
        <div className="book_app">BookStore App</div>
        <Link to='/books/create' className="add_book">
            <MdOutlineAddBox />
            <p>Add Book</p>
        </Link>
    </div>
  )
}

export default NavBar
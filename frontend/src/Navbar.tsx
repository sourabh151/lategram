import { Link } from "react-router-dom"


function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full  border border-black h-12">
        <Link to={"/home/chats"} className="cursor-pointer">
          chat
        </Link>
      </div>
    </>
  )
}

export default Navbar

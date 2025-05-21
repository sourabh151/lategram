import { useNavigate } from "react-router-dom"
import { useUserContext } from "./contexts/UserContext.tsx";
import Navbar from "./Navbar.tsx";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate()
  const { userData, setUserData } = useUserContext()

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (!data) {
      navigate("/")
    }
    else {
      setUserData(JSON.parse(data))
    }
  },[])
  return (
    <>
      <Navbar />
      <div className="text-primary_text">
        <p>{userData.username}</p>
        <p>hello</p>
      </div>
    </>
  )
}

export default Home

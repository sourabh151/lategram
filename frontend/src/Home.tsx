import { useNavigate } from "react-router-dom"
import type { UserDataType } from "./index.d.ts";

function Home() {
  const navigate = useNavigate()
  const userData = localStorage.getItem("user");
  let user: UserDataType = {
    success: false,
    token: "",
    username: ""
  };
  if (!userData) {
    navigate("/")
  }
  else {
    user = JSON.parse(userData)
  }
  return (
    <div>{user.username}</div>
  )
}

export default Home

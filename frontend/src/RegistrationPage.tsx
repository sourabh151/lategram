import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "./contexts/UserContext"
const url = import.meta.env.VITE_SERVER_URI
function RegistrationPage() {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const username = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const { setUserData } = useUserContext()
  function handleClick() {
    try {
      (async () => {
        try {
          if (username.current && password.current) {
            const URL = `${url}${isLogin ? "authenticate/login" : "authenticate/signup"}`
            console.log(URL);
            const data = await fetch(URL, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                "username": username.current.value,
                "password": password.current.value
              })
            })
            const result = await data.json()
            console.log(result);
            if (result.success) {
              setUserData(result)
              localStorage.setItem("user", JSON.stringify(result));
              navigate("/home")
            }
          }
        } catch (error) {
          console.log(error);
        }
      })()
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className="mx-4 w-full border border-neutral-800 rounded-md p-2 bg-primary_highlight text-primary_accent md:w-96"
    >
      <div className="w-full h-12 flex gap-2">
        <button className={`flex-grow text-2xl font-bold h-full rounded-md  active:scale-95 transition-all duration-300 ease ${isLogin ? " bg-primary_accent text-primary_text" : " bg-primary text-primary_accent"}`} onClick={() => setIsLogin(true)}>Login</button>
        <button className={`flex-grow text-2xl font-bold h-full rounded-md  active:scale-95 transition-all duration-300 ease ${isLogin ? " bg-primary text-primary_accent" : " bg-primary_accent text-primary_text"}`} onClick={() => setIsLogin(false)}>Signup</button>
      </div>
      <div className="w-full h-48 flex flex-col justify-around">
        <input type="text" id="username" placeholder="username" className="w-full rounded-md focus:outline-primary_accent p-2 font-semibold text-xl bg-primary" ref={username} />
        <input type="password" id="password" placeholder="password" className="w-full rounded-md focus:outline-primary_accent p-2 font-semibold text-xl bg-primary" ref={password} />
        <button className="w-full rounded-md bg-primary_accent p-2 text-center font-bold text-primary_text active:outline-primary text-2xl active:scale-95 transition-all duration-300 ease" onClick={handleClick}>
          {
            isLogin ? "Login" : "Signup"
          }
        </button>
      </div>
    </div >
  )
}

export default RegistrationPage

import { useEffect } from "react"
import { useUserContext } from "./contexts/UserContext"
const url = import.meta.env.VITE_SERVER_URI
function Chats() {
  const { userData } = useUserContext()
  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(url, {
          method: "GET",
          headers: {
            "Authorization": "Bearer " + userData.token
          }
        })
      } catch (error) {
        console.log(error);

      }
    })()
  })
  return (
    <div className="w-screen h-full mt-24 border border-black p-2 bg-primary text-primary_text text-2xl">Chats</div>
  )
}

export default Chats

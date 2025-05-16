import App from "./App"
import UserContext from "./contexts/UserContext"

function Main() {
  return (
    <UserContext>
      <App />
    </UserContext>
  )
}

export default Main

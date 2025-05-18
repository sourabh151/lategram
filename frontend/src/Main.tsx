import App from "./App"
import UserContext from "./contexts/UserContext"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")!).render(

	<UserContext>
		<App />
	</UserContext>
)
//function Main() {
//  return (
//  )
//}
//
//export default Main

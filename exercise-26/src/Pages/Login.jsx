import { useContext } from "react"
import { AuthContext } from "../BlogContext"
import { useNavigate } from "react-router-dom"


export const Login = () => {
    const {login} = useContext(AuthContext)
  const  navigate = useNavigate()
    const handleLogin = () => {
        login()
        navigate("/create")
    }
  return (
 <div className="max-w-4xl bg-white shadow-md p-6 flex flex-col gap-2 mt-4 rounded-md">
        <h1>Login</h1>
        <p>You must login to access the Create Post page.</p>
        <button
        onClick={handleLogin} className='bg-sky-400 self-start py-1 px-2 text-white rounded-sm'>Login</button>
        </div>
  )
}

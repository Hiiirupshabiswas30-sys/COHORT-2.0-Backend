import {createBrowserRouter} from "react-router"
import Login from "./features/auth/pages/Login"
import Ragister from "./features/auth/pages/Ragister"

 export const router = createBrowserRouter([
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"/register",
        element:<Ragister/>
    },{
        path:'/',
        element:<h1>Wellcome to 4 layer architecture of react</h1>
    }
])
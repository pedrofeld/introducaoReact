import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../../pages/Login"
import Home from "../../pages/Home"
import ListaMercado from "../../components/ListaMercado";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
        path: "/listaMercado",
        element: <ListaMercado />,
      },
]);

function AppRoutes(){
    return <RouterProvider router={router}/>
}

export default AppRoutes;
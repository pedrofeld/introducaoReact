import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Home</div>
    },
    {
      path: "/login",
      element: <div>Login</div>,
    },
    {
        path: "/listaMercado",
        element: <div>Lista de compras</div>,
      },
]);

function AppRoutes(){
    return <RouterProvider router={router}/>
}

export default AppRoutes;
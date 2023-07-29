import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Products from "../Pages/Products/Products";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";

export const router = createBrowserRouter([
    {   
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Products />
            },
            {
                path: "/:id",
                loader: async ({params}) => await fetch(`https://fakestoreapi.com/products/${params.id}`),
                element: <ProductsDetails />
            }
        ]
    }
])

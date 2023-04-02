import { Route, Routes } from "react-router-dom"
import { Cart,Home,PageNotFound } from "../pages"

export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="cart" element={<Cart/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </div>
    )
}

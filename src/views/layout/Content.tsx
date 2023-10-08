import { Outlet } from "react-router-dom"

export const Content = () => {
    return(
        <div className="content-wrapper">
            <Outlet />
        </div>
    )
}
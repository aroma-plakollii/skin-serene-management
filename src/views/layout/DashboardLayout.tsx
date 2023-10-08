import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { Welcome } from "./Welcome";

const DashboardLayout = () => {
    return (
        <div className={' wrapper h-screen grid grid-cols-6 grid-rows-6'}>
            <div className={'row-span-2 z-10'}>
                <Sidebar />
            </div>
            <div className={'col-span-5 row-span-1'}>
                <Welcome />
            </div>
            <div className={'col-span-5 row-span-4 z-0'}>
                <Content />
            </div>
            <div className={'col-start-2 col-span-5 row-end-7 self-end z-0'}>
                <Footer/>
            </div>
        </div>
    )
}

export default DashboardLayout;
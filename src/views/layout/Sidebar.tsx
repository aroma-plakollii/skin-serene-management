import {VscGraph} from 'react-icons/vsc'
import {FiUsers} from 'react-icons/fi'
import {RiShoppingCart2Line} from 'react-icons/ri'
import {FaRegCircleUser} from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {

    const onLogout = () => {
        sessionStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <aside className="side-bar flex flex-col items-center w-64 h-screen overflow-hidden text-gray-400 bg-neutral-900 rounded shadow-[-45px_-45px_150px_4px_rgba(0,0,0,0.1),_10px_-10px_30px_4px_rgba(167,139,250,0.20)]">
            <a className="flex items-center w-full px-3 py-3 bg-gradient-to-r from-fuchsia-400/70 via-indigo-300/70 to-fuchsia-400/70" href="#">
            <img
                className="mx-1 h-12 w-14"
                src="/img/logo.png"
                alt="Your Company"
            />
                <span className="brand-name ml-2 text-xl text-neutral-950 font-bold uppercase">Skin Serene</span>
            </a>
            <div className="w-full">
                <div className="flex flex-col items-center w-full mt-5">
                    <NavLink to='/dashboard' className='w-full'> 
                        <a className="flex items-center w-full h-14 px-5 mt-2 hover:bg-gray-700 hover:bg-gradient-to-r from-fuchsia-400/60 via-indigo-300/60 to-fuchsia-400/60" href="#">
                            <VscGraph className='text-3xl text-white'/>
                            <span className="ml-2 text-m text-white font-medium">Dashboard</span>
                        </a>
                    </NavLink>
                    <NavLink to='/users' className='w-full'>
                        <a className="flex items-center w-full h-14 px-5 mt-2 hover:bg-gray-700 hover:bg-gradient-to-r from-fuchsia-400/60 via-indigo-300/60 to-fuchsia-400/60" href="#">
                            <FiUsers className='text-3xl text-white'/>
                            <span className="ml-2 text-m text-white font-medium">Users</span>
                        </a>
                    </NavLink>
                    <NavLink to='/products' className='w-full'>
                        <a className="flex items-center w-full h-14 px-5 mt-2 hover:bg-gray-700 hover:bg-gradient-to-r from-fuchsia-400/60 via-indigo-300/60 to-fuchsia-400/60" href="#">
                            <RiShoppingCart2Line className='text-3xl text-white'/>
                            <span className="ml-2 text-m text-white font-medium">Products</span>
                        </a>
                    </NavLink>
                </div>
            </div>
            <a className="flex items-center justify-center w-full h-16 mt-auto bg-gradient-to-r from-fuchsia-400/60 via-indigo-300/60 to-fuchsia-400/60" href="#" onClick={onLogout}>
                <FaRegCircleUser className='text-3xl text-black'/>
                <span className="ml-2 text-m text-black font-medium">Log out</span>
            </a>
        </aside>
    )
}
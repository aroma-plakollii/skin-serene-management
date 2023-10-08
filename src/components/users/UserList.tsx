import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../services/UserService";
import { UserInterface, userList } from "../../store/features/userSlice";
import { useEffect } from "react";

export const UserList = () => {

    const dispatch = useDispatch();
    const usersList = useSelector((state: any) => state.user.users);

    useEffect(() => {
        const __init = async () => {
            const fetchUsers = await getUsers();
            dispatch(userList(fetchUsers));
            console.log(fetchUsers,usersList);    
        }

        __init();
    }, [dispatch]);

    const renderUsers = () => {
        return(
            usersList.users.map((user: any, index: number) => {
                return(
                    <tr className="dark:bg-black">
                        <td className="p-3">
                            <p>{index}</p>
                        </td>
                        <td className="p-3">
                            <p>{user.name}</p>
                        </td>
                        <td className="p-3">
                            <p>{user.email}</p>
                        </td>
                        <td className="p-3">
                            <p>{user.dateOfBirth.toLocaleString()}</p>
                        </td>
                        <td className="p-3">
                            <p>{user.role}</p>
                        </td>
                        <td className="p-3 text-right">
                            <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                <span>Pending</span>
                            </span>
                        </td>
                    </tr>
                )
            })
        )
    }

    return (
        <>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leadi">Invoices</h2>
            <div className="px-4 overflow-x-auto rounded-md border border-purple-700">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-24" />
                    </colgroup>
                    <thead className="dark:bg-black border-b border-opacity-20 dark:border-indigo-400">
                        <tr className="text-left">
                            <th className="p-3">Id</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Date of Birth</th>
                            <th className="p-3">Role</th>
                            <th className="p-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderUsers()}
                    </tbody>
                </table>
            </div>
        </div>

        <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">

                <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
                    <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className="text-sm ml-3 font-medium leading-none ">Previous</p>                    
                    </div>
                    <div className="sm:flex hidden">
                        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">1</p>
                        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">2</p>
                        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">3</p>
                        <p className="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">4</p>
                        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">5</p>
                        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">6</p>
                        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">7</p>
                        <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">8</p>
                    </div>
                    <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                        <p className="text-sm font-medium leading-none mr-3">Next</p>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            
                    </div>
                </div>
            </div>
        </>
    )
}
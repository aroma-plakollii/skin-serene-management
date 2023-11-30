import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import {MdDelete} from 'react-icons/md'
import {AiFillEdit} from 'react-icons/ai'
import { getUsers, deleteUser } from "../../services/UserService";
import { userList, deletedUser } from "../../store/features/userSlice";
import { setTotalPages, setCurrentPage, setCurrentPageLower } from "../../store/features/pagignationSlice";
import { Pagignation } from "../shared/Pagignation";

export const UserList = () => {

    const dispatch = useDispatch();
    const usersList = useSelector((state: any) => state.user.users);
    const isDeleted = useSelector((state: any) => state.user.isDeleted)
    const currentPage = useSelector((state: any) => state.pagignation.currentPage);
    const itemsPerPage = useSelector((state: any) => state.pagignation.itemsPerPage);
    const totalPages = useSelector((state: any) => state.pagignation.totalPages)

    useEffect(() => {
        const __init = async () => {
            const fetchUsers = await getUsers();
            dispatch(userList(fetchUsers));
            dispatch(setTotalPages(Math.ceil(fetchUsers.length / itemsPerPage)));               
            
            if (totalPages > 0 && currentPage + 1 > totalPages) {
                dispatch(setCurrentPageLower());
            }
        }

        __init();
    }, [dispatch, isDeleted, totalPages, currentPage ]);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage; 
    const userArray = usersList.slice(startIndex,endIndex)
    
    const pageChangeHandler = (selectedPage: any) => {        
        dispatch(setCurrentPage(selectedPage.selected))
    }

    const onDelete = async (id: any) => {    
        const isDeleted = await deleteUser(id);

        if(isDeleted){
            dispatch(deletedUser());
        }

    }

    const renderUsers = () => {
        
        return(
            userArray.map((user: any, index: number) => {                
                return(
                    <>
                        <tr className="bg-neutral-900">
                            <td className="px-3 py-5 rounded-tl-lg rounded-bl-lg">
                                <p>{index + 1}</p>
                            </td>

                            <td className="px-3 py-5">
                                <p>{user.name}</p>
                            </td>
                            <td className="px-3 py-5">
                                <p>{user.email}</p>
                            </td>
                            <td className="px-3 py-5">
                                <p>{moment(user.dateOfBirth).format('YYYY-MM-DD')}</p>
                            </td>
                            <td className="px-3 py-5">
                                <p>{user.role}</p>
                            </td>
                            <td className="flex justify-center px-3 py-5 rounded-tr-lg rounded-br-lg">
                                <span className='text-base text-white bg-violet-900 p-2 rounded mr-2 cursor-pointer' onClick={() => onDelete(user._id)}><MdDelete /></span>
                                <span className='text-base text-white bg-violet-400 p-2 rounded cursor-pointer'><AiFillEdit /></span>
                            </td>
                        </tr>
                        <tr className="h-2">
                            <td></td>
                        </tr>
                    </>
                )
            })
        )
    }

    return (
        <>
            <div className="container p-2 sm:p-4 dark:text-gray-100" style={{height: '32.5rem'}}>
            <h2 className="ml-4 mb-4 text-2xl font-semibold leadi uppercase text-violet-400">Users</h2>
            <div className="px-4 overflow-x-auto">
                <table className="min-w-full text-xs">

                    <thead className="dark:bg-black">
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
        <Link to='/add-user'>
            <button className='text-base text-violet-900 bg-white font-bold py-2 px-4 rounded ml-8 cursor-pointer'>Add User</button>
        </Link>
         <Pagignation 
            pageCount={totalPages}
            onPageChange={pageChangeHandler}
            forcePage={currentPage}
        />
        </>
    )
}
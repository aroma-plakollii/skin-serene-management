import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch} from "react-redux"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.module.css"
import moment from "moment";
import { register } from "../../services/AuthenticationService";
import { onInputChange, onHasNoError, onHasError } from "../../store/features/userSlice";


export const AddUser = () => {

    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user.user);
    const hasErrors = useSelector((state: any) => state.user.hasErrors);

    const navigate = useNavigate();

    const inputHandler = (key: any , val: any) => {
        const value = val.target.value;

        dispatch(onInputChange({key, value}));
    }

    const dateChangeHandler = (key: any, val: any) => {
        dispatch(onInputChange({key, value: new Date(moment(val).format('YYYY-MM-DD'))}));
        console.log(user.dateOfBirth)
    }

    const registerUser = async (e: any) => {

        console.log(user)

        e.preventDefault();

        dispatch(onHasNoError);

        if(!user.name || !user.email || !user.password){
            dispatch(onHasError);

            return;
        }

        try{

            const data = {
                name: user.name,
                email: user.email,
                password: user.password,
                dateOfBirth: moment(user.dateOfBirth).format('YYYY-MM-DD'),
                role: 'admin'
            }

            const res = await register(data);

            if(res === 400){
                dispatch(onHasError);
            }
            else if(res){
                navigate('/users');
            }

        }catch(e){
            console.log(e);
        }
        
    }
    return (
        <form className="bg-neutral-900 rounded-md mx-12">
            <div className="bg-neutral-900 rounded-3xl px-12 py-8">
                <h2 className="text-xl font-bold text-white leading-7 uppercase text-gray-900 border-b border-violet-400 pb-4">User Details</h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                        <label htmlFor="name" className="block text-sm text-white font-medium leading-6 text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="given-name"
                            className={`block w-full rounded-md ${hasErrors ? `border-2 border-rose-500` : `border-0`} p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            onChange={(val: any) => inputHandler('name', val)}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="role" className="block text-sm text-white font-medium leading-6 text-gray-900">
                            Role
                        </label>
                        <div className="mt-2">
                            <select
                            id="role"
                            name="role"
                            autoComplete="role"
                            disabled
                            className={`block w-full rounded-md ${hasErrors ? `border-2 border-rose-500` : `border-0`} py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"`}
                            >
                            <option>Admin</option>
                            </select>
                        </div>
                    </div>


                    <div className="sm:col-span-3">
                        <label htmlFor="dateOfBirth" className="block text-sm text-white font-medium leading-6 text-gray-900">
                            Date of Birth
                        </label>
                        <div className="mt-2">
                        <DatePicker 
                            className={`date-picker block rounded-md ${hasErrors ? `border-2 border-rose-500` : `border-0`} py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            onChange={(val: any) => dateChangeHandler('dateOfBirth', val)}
                            onSelect={(val: any) => dateChangeHandler('dateOfBirth', val)}
                            selected={new Date(moment(user.dateOfBirth).format('yyyy-MM-DD'))}
                            dateFormat={'dd.MM.yyyy'}
                            closeOnScroll={true}
                            showMonthDropdown
                            showYearDropdown
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="email" className="block text-sm text-white font-medium leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className={`block w-full rounded-md ${hasErrors ? `border-2 border-rose-500` : `border-0`} p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            onChange={(val: any) => inputHandler('email', val)}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="password" className="block text-sm text-white font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                            type="password"
                            name="password"
                            id="password"
                            className={`block w-full rounded-md ${hasErrors ? `border-2 border-rose-500` : `border-0`} p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            onChange={(val: any) => inputHandler('password', val)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-3 pl-12 pb-8">
                <button className="text-white bg-violet-900 py-2 px-3 rounded" onClick={registerUser}>Register User</button>
                <Link to='/users'>
                    <button className="text-white bg-violet-400 py-2 px-4 rounded">Cancel</button>
                </Link>
            </div>
        </form>
    )
}
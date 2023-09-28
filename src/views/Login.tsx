import { useDispatch, useSelector } from "react-redux"
import {onInputChange, hasError, checkLoginCreds, userisAuthenticated} from '../store/features/authenticationSlice'
import { login } from "../services/AuthenticationService";

export const Login = () => {

    const dispatch = useDispatch();
    const email = useSelector((state: any) => state.auth.email);
    const password = useSelector((state: any) => state.auth.password);
    const hasErrors = useSelector((state: any) => state.auth.hasErrors);
    const loginCreds = useSelector((state: any) => state.auth.loginCreds);

    const onLogin = async (e: any) => {
        e.preventDefault();

        if(!email || !password){
            dispatch(hasError());
            return;
        }

        if(!hasErrors){
            const data = {
                email: email,
                password: password
            }
            
            const res = await login(data);

            if(res.code === 'ERR_BAD_REQUEST'){
                dispatch(checkLoginCreds());             
                return;
            }

            if(res.token){
                sessionStorage.setItem('token', res.token);
                dispatch(userisAuthenticated());
                res.token && window.location.reload();
            }    
        }
    }

    const inputHandler = (key: any, val: any) => {
        const value = val.target ? val.target.value : '';

        dispatch(onInputChange({ key, value }));
    };

    return (
        <>
            <div className="flex h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm px-8 py-8 bg-white rounded-md">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-20 w-auto"
                        src="/img/logo.png"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
                        Sign in to your account
                    </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            // required
                            className={`block w-full rounded-md ${hasErrors ? `border-2 border-rose-500` : `border-0`} p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6`}
                            onChange={(val: any) => inputHandler('email', val)}
                            />
                        </div>
                        </div>

                        <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                            </label>
                            <div className="text-sm">
                            <a href="#" className="font-semibold text-black hover:text-purple-300">
                                Forgot password?
                            </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            // required
                            className={`block w-full rounded-md ${hasErrors ? `border-2 border-rose-500 focus:ring-rose-500` : `border-0 focus:ring-black`} p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                            onChange={(val: any) => inputHandler('password', val)}
                            />
                        </div>
                        {loginCreds && <p className="text-sm pt-2 text-rose-500 font-medium">Check login credentials</p>}
                        </div>

                        <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={onLogin}
                        >
                            Sign in
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}

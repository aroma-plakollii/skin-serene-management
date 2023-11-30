import {Routes, Route, Navigate} from 'react-router-dom'
import { isAuthenticated } from '../services/AuthenticationService';
import { Login } from '../views/Login';
import { PrivateRoute } from './PrivateRoute';
import DashboardLayout from '../views/layout/DashboardLayout';
import { UserList } from '../components/users/UserList';
import { AddUser } from '../components/users/AddUser';

export const RouterList = () => {

    return(
        <Routes>
            <Route path='/' element={
                <PrivateRoute isAuthenticated={isAuthenticated()}>
                    <DashboardLayout />
                </PrivateRoute>
            }>
                {/* Users */}
                <Route path='/users' element={<UserList />}/>
                <Route path='/add-user' element={<AddUser />}/>
            </Route>

            <Route path='/login' element={
                isAuthenticated() ? <Navigate to='/' replace={true} /> : <Login />
            }/>
        </Routes>
    );
}
import axios from "axios";
import { API } from "../config";
import { HEADERS } from "../config";

export const getUsers = async () => {
    try{
        const res = await axios({
            method: 'get',
            url: `${API}/user`,
            headers: HEADERS,
        });

        return res.data;
    }catch(e){      
        return e;
    }
}

export const deleteUser = async (id: any) => {
    
    try{
        const res = axios({
            method: 'delete',
            url: `${API}/user/${id}`,
            headers: HEADERS
        });

        console.log(res);
        return res;
    }catch(e){
        console.log(e);
        
        return e;
    }
}

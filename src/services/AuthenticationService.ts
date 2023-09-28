import axios from "axios";
import { API } from "../config";
import { HEADERS } from "../config";

export const login = async(data: any) =>{
    try{
        const res = await axios({
            method: 'post',
            url: `${API}/user/login`,
            data: data,
            headers: HEADERS
        }) ;

        return res.data;
    }catch(e){
        return e;
    }
}

export const register = async(data: any) => {
    try{
        const res = await axios({
            method: 'post',
            url: `${API}/login`,
            data: data,
            headers: HEADERS
        });

        return res.data;
    }catch(e){
        return e;
    }
}

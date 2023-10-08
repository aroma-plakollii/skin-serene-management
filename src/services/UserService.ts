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
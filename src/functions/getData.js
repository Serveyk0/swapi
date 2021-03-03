import axios from 'axios';

export const getData = async (par, param) => {
    const res = await axios.get(par, { cache: true });
    return { name: res.data[param], id: par.split("/")[4] + "/" + par.split("/")[5] };
}
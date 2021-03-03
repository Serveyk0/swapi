import axios from 'axios';
import { checkParams } from './checkParam';
import { getData } from './getData';

export const parseArray = async (par) => {
    const params = [];
    if ( par.length === 0 )
        return [];
    let s = par.length > 0 ? par[0].split("/")[4] : "";
    let param = checkParams(s);
    for (let i = 0; i < par.length; i++) {
        const res = await getData(par[i], param);
        params.push(res);
    }
    return params;
}
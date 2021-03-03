import React, { useEffect, useState } from 'react';
import { getDataFromServer } from '../functions/getDataFromServer';
import { getJSXData } from '../functions/getJSXData';
import Loader from "react-loader-spinner";

export const AllPagesData = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(async () => {
        setLoading(false);
        setData(await getDataFromServer());
        setLoading(true);
    }, [window.location.href])

    return (
        <div>
            {loading ? getJSXData(data) : <div className="loader"><Loader
                type="Oval"
                color="#efd91d"
                height={250}
                width={250}
            />
            </div>
            }
        </div>
    )
}
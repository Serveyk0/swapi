import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Films = () => {
    const [films, setFilms] = useState([]);
    const [filterFilms, setFilterFilms] = useState([]);

    useEffect(async () => {
        let res = await axios.get("http://swapi.dev/api/" + 'films' + "/", { cache: true });
        res = res.data.results;
        for (let i = 0; i < res.length; i++)
            res[i] = { episode_id: res[i].episode_id, title: res[i].title }
        setFilms(res);
        setFilterFilms(res);
    }, [])

    const search = (e) => {
        setFilterFilms(films.filter(film => film.title.toLowerCase().split(" ").join("").indexOf(e.target.value.split(" ").join("").toLowerCase()) > -1));
    }

    function compare(a, b) {
        return a.title < b.title ? -1 : (a.title > b.title ? 1 : 0)
    }

    const sort = () => {
        setFilterFilms([...filterFilms].sort(compare));
    }

    return (
        <div>
            <div className="grid menu-block">
                <input className="margin-0-auto menu-block__search" type="text" placeholder="search" onChange={(e) => search(e)} />
                <button className="margin-0-auto menu-block__sort" onClick={() => sort()}>Sort</button>
            </div>
            <ul className="flex grid-gap grid-justify-center margin-0-auto all-films">
                {
                    filterFilms.map((film, index) =>
                        <li className="grid grid-align-center text-center film" key={index}>
                            <NavLink className="grid grid-align-center" to={"/films/" + film.episode_id}>
                                {film.title}
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        </div>

    )
}
import { NavLink } from "react-router-dom";

export const getJSXData = (arr) => {
    return (
        <>
            {
                Object.keys(arr).map((item, index) => {
                    let item_title = item.replace(/(_id)|_/, " ");
                    item_title = item_title.charAt(0).toUpperCase() + item_title.substr(1)

                    return (
                        <div className="parameter" key={index} >
                            <h2 className="parameter__title">{item_title}</h2>
                            {
                                Array.isArray(arr[item]) && arr[item].length > 0 ?
                                    arr[item].map((item2, index2) => {
                                        return (
                                            <NavLink className="parameter__link" to={`/${item2.id}`} key={index2}>
                                                {`${item2.name}, `}
                                            </NavLink>
                                        )
                                    })
                                    :
                                    <span className="parameter__text">{arr[item]}</span>

                            }
                        </div>)
                })
            }
        </>
    )
}
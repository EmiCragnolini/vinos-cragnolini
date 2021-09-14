import React from 'react'
import {Link} from "react-router-dom";

const Item = ({item}) => {
    const {id, title, price, pictureUrl} = item
    return (
        <div className="card col-6 col-md-3 text-center py-3">
            <Link to={`/item/${id}`}>
                <img srcSet={pictureUrl} className="w-100" alt=""/>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">$ {price}</p>
                </div>
            </Link>
        </div>
    );
}
export default Item

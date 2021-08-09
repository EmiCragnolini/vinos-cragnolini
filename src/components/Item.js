import React from 'react'
import {Link} from "react-router-dom";

const Item = ({item}) => {
    const {id, title, price, pictureUrl} = item
    return (
        <div className="card col-3">
            <Link to={`/item/${id}`}>
                <img srcSet={pictureUrl} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">$ {price}</p>
                </div>
            </Link>
        </div>
    );
}
export default Item

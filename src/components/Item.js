import React from 'react'

const Item = ({item}) => {
    const { id, title, price, pictureUrl } = item
    return (
        <div className="card col-3">
            <img srcSet={pictureUrl} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">$ {price}</p>
            </div>
        </div>
        );
}
export default Item

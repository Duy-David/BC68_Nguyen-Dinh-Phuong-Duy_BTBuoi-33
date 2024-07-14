import React from "react";

const Detail = ({shoes}) => {
    return (
      <div className="item-shoes space-y-3">
        <img src={shoes.image} alt="" />
        <p className=" text-2xl ">Name: {shoes.name}</p>
        <p className="text-xl ">Price: {shoes.price}$</p>
        <p className="text-xl ">Quantity: {shoes.quantity}$</p>
        <p className="text-lg">ShortDescription: {shoes.shortDescription}</p>
        <p className = "text-sm"> Description: {shoes.description}</p>
      </div>
    )}
export default Detail;

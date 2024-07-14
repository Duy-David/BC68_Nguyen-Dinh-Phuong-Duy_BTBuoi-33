import React from 'react'

const ProductList = (props) => {
    console.log(props.arrSanPham)
    console.log(props.layDuLieuShoes)
  return (
    <div className="item-shoes space-y-3">
       <div className="grid grid-cols-12 gap-4">
          {props.arrSanPham.map((item, index) => {
            console.log(item);
            return <div>
                <img src={item.image} className='w-full' alt="" />
                <h3 className='text-xl font-bold'>{item.    name}</h3>
                <button onClick={()=>{
                    props.layDuLieuShoes(item)
                }} className='bg-black text-white py-2 px-5 rounded-md'>Chi tiết giày</button>
            </div>
          })}
        </div>
    </div>
  )
}

export default ProductList
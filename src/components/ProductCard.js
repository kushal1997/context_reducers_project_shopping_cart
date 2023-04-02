
export const ProductCard = ({ product }) => {
  const { name, image, price } = product;
  return (
    <div className="w-[350px] shadow-[rgba(0,0,0,0.16)_0px_1px_4px] flex flex-col justify-between m-2.5 p-2.5 rounded-[5px]">
      <img className="max-w-full h-64 mx-0 my-2.5" src={image} alt={name} />
      <p  className="mx-0 my-2.5">{name}</p>
      <div className="flex justify-between items-center mx-0 my-2.5">
        <p className="text-lg font-medium">${price}</p>
        <button className=" text-base text-white bg-[#1C59AE] cursor-pointer max-w-[150px] px-2.5 py-[7px] rounded-[5px] border-0">Add To Cart</button>
      </div>
    </div>


    
  )
}

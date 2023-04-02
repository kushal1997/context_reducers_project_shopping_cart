
export const CartCard = ({product}) => {
  const {image,name,price} =product;
  return (
    <>
    <div id="cartCard" className="flex justify-between items-center shadow-[rgba(0,0,0,0.16)_0px_1px_4px] mx-2.5 my-[30px] p-2.5 rounded-[5px]">
      <img className="w-[150px] h-[100px] mr-2.5" src={image} alt={name} />
      <p className=" w-[350px] mr-2.5">{name}</p>
      <p className=" w-[100px] mr-2.5">${price}</p>
      <button className="bg-[#ac0d14] text-white cursor-pointer px-2.5 py-[5px] rounded-[5px] border-0 hover:bg-[#8e090f]">Remove</button>
      
    </div>
    </>
  )
}

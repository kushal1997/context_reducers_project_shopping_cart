import { useCart } from "../context/CardContext"
import { CartCard } from "../components"
import {useTitle} from "../hooks/useTitle"

export const Cart = () => {
  const {total,cartList} =useCart();

  useTitle("Cart");
  
  return (
    <main>
      <section className="mx-0 my-[30px]">
        <h1 className="text-center font-bold text-lg">Cart Items:{cartList.length}/ ${total} </h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product}/>
        ))}
      </section>
    </main>
  )
}

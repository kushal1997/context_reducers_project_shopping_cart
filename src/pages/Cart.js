import { useCart } from "../context/CardContext"
import { CartCard } from "../components"
import {useTitle} from "../hooks/useTitle"
import img1 from "../assets/1001.jpg"
import img2 from "../assets/1002.jpg"

export const Cart = () => {
  const {total} =useCart();

  useTitle("Cart");
  const products = [
    {id: 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": img1}, 
    {id: 2, "name": "boAt Rockerz 450", "price": 49, "image": img2,}, 
  ]

  return (
    <main>
      <section className="mx-0 my-[30px]">
        <h1 className="text-center font-bold text-lg">Cart Items:{products.length}/ ${total} </h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product}/>
        ))}
      </section>
    </main>
  )
}

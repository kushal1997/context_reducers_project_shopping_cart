import {useTitle} from "../hooks/useTitle"
import {ProductCard} from "../components"
import img1 from "../assets/1001.jpg"
import img2 from "../assets/1002.jpg"
import img3 from "../assets/1003.jpg"
import img4 from "../assets/1004.jpg"
import img5 from "../assets/1005.jpg"
import img6 from "../assets/1006.jpg"

export const Home = () => {
  useTitle("Home");

  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": img1},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": img2},
    {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": img3},
    {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": img4},
    {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": img5},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": img6}
  ]

  return (
    <main>
      <section className="flex flex-wrap justify-around mx-0 my-[30px]">
        {products.map((product)=> (
          <ProductCard key={product.id} product={product}/>
        ))}
      </section>
    </main>
  )
}

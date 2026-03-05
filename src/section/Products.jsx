import style from "./Products.module.css";

import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <section id="products">
      <h2>Nos Produits</h2>
      <div className={style.grid}>

        {
            products.map(
                (p) => (
                        <ProductCard key={p.id} info={p} />
            )
        )
        }


      </div>
    </section>
  );
}

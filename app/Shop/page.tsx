import { products } from "@/data/data";
import Image from "next/image";
import css from "./page.module.css";

export default function Shop() {
  return (
    <section className={`container`}>
      <h1 className={`firstHeading`}>Shop</h1>
      <ul className={css.shopList}>
        {products.map((product) => {
          return (
            <li key={product.id} className={css.shopItem}>
              <Image
                className={css.shopImg}
                src={product.src}
                width={2000}
                height={2000}
                alt={product.description}
              />
              <div className={css.cardInfo}>
                <div className={css.nameSizeWrap}>
                  <h3 className={css.productName}>{product.name}</h3>
                  <p className={css.productSize}>{product.size}</p>
                </div>
                <p className={css.productDescription}>{product.description}</p>
                <div className={css.availablePriceBtnWrap}>
                  <p
                    className={
                      product.inStock ? css.productReady : css.productMade
                    }
                  >
                    {product.inStock ? "Ready to ship" : "Made to order"}
                  </p>
                  <div className={css.priceBtnWrap}>
                    <p className={css.productPrice}>${product.price}</p>
                    <button className={css.productOrder}>Order</button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

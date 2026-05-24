"use client";
import { products } from "@/data/data";
import Image from "next/image";
import css from "@/app/Shop/page.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductsList() {
  const [id, setId] = useState("");
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setId(event.currentTarget.children[0].id);
  };
  useEffect(() => {
    if (id) {
      router.push(`/${id}`);
    }
  }, [id, router]);
  return (
    <>
      {products.map((product) => {
        return (
          <li onClick={handleClick} key={product.id} className={css.shopItem}>
            <Image
              className={css.shopImg}
              src={product.src}
              width={2000}
              height={2000}
              alt={product.description}
              id={String(product.id)}
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
    </>
  );
}

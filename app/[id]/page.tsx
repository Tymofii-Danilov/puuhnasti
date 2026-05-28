import { products } from "@/data/data";
import Image from "next/image";
import css from "./page.module.css";
import GoBack from "@/components/GoBack/GoBack";

type ProductProps = {
  params: Promise<{ id: string }>;
};

export default async function Product({ params }: ProductProps) {
  const { id } = await params;
  const note = products.find((product) => product.id === Number(id));
  return (
    <>
      {note && (
        <section className={`container ${css.section}`}>
          <div className={css.headingBackWrap}>
            <h1 className="secondHeading">Product details</h1>
            <GoBack />
          </div>
          <div className={css.card}>
            <Image
              className={css.cardImg}
              src={note.src}
              width={2000}
              height={2000}
              alt={note.description}
            />
            <div className={css.cardInfo}>
              <div className={css.nameSizeWrap}>
                <h3 className={css.productName}>{note.name}</h3>
                <p className={css.productSize}>{note.size}</p>
              </div>
              <p className={css.productDescription}>{note.description}</p>
              <div className={css.availablePriceBtnWrap}>
                <p
                  className={note.inStock ? css.productReady : css.productMade}
                >
                  {note.inStock ? "Ready to ship" : "Made to order"}
                </p>
                <div className={css.priceBtnWrap}>
                  <p className={css.productPrice}>${note.price}</p>
                  <button className={css.productOrder}>Order</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
